import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import {toastMessage} from '../../lib';

const ListItemWrapper = styled.li`
  list-style-type: none;
  &:not(:last-child) {
    margin-bottom : 1rem;
  }
`;

const DataWrapper = styled.div`
  display : flex;
  flex-direction : row;
  min-height : 8rem;
`;

const TodoContent = styled.div`
  display : flex;
  justify-content : space-evenly;
  align-items : center;
  flex-direction : row;
  width : 100%;
  
  color: ${props => {
    switch (props.priority) {
        case 1:
            return '#fa5252';
        case 2:
            return '#fcc419';
        case 3:
            return '#c0eb75';
        default:
            return '#777';
    }
  }}
`;

const MainSection = styled.div`
  flex : 4 0 auto;
  height : 100%;
`;

const SubSection = styled.div`
  flex : 1 0 auto;
  display : flex;
  justify-content : center;
  align-items : flex-end;
  flex-direction : column;
  height : 100%;
  margin-right : 2rem;
`;

const Title = styled.h2`
  font-size : 2rem;
  max-width : 25rem;
  overflow : hidden;
  text-transform : uppercase;
`;

const Content = styled.p`
  font-size : 1rem;
  word-wrap : break-word;
  overflow : scroll;
  max-width : 25rem;
`;

const TodoLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 15px 40px;
    
    &:link, &:visited {
      color : #777;
    }
    &:hover {
        color: #ffa8a8;
    }
    &:active {
        color: #ff8787;
    }
`;

class TodoItem extends Component {

    state = {
        isCompleted : false,
        expireTimer : -1
    };

    removeTimer() {
        if (this.state.expireTimer !== -1) {
            window.clearInterval(this.state.expireTimer);
        }
    }

    checkTimeExpired() {
        const time =  this.props.expirationDate - new Date().getTime();

        if (time < 0) {
            if (this.state.isCompleted === false && this.props.isExpirationNotified === false) {
                toastMessage(`${this.props.title} has passed expiration time!`);
                this.props.onTodoNotification(this.props.id);
            }
            this.removeTimer();
        }
    }

    componentWillUnmount() {
        this.removeTimer();
    }

    componentDidMount() {
        if (this.props.expirationDate !== -1) {
            this.setState({
                expireTimer : setInterval(() => this.checkTimeExpired(), 1000)
            });
        }
    }

    handleCheckboxChange(title) {
        return e => {
            this.setState({ isCompleted : e.target.checked });
            if (e.target.checked) {
                toastMessage(`${title} completed!`);
            }
        };
    }

    renderExpirationDate(date) {
        if (date === -1) {
            return "Do it now!";
        }
        return moment(date).fromNow()
    }

    render() {
        const {
            isCompleted
        } = this.state;

        const {
            title,
            content,
            priority,
            expirationDate,
            id,
            classes
        } = this.props;

        return (
            <ListItemWrapper>
                <Paper>
                    <DataWrapper>
                        <Checkbox
                            checked={isCompleted}
                            color="primary"
                            onChange={this.handleCheckboxChange(title)}
                            className={`${classes.completeCheckbox}`}
                        />
                        <ButtonBase
                            component={TodoLink}
                            to={`/edit/${id}`}
                            className={`${classes.buttonBase}`}
                        >
                            <TodoContent
                                priority={priority}
                            >
                                <MainSection>
                                    <Title>{title}</Title>
                                    <Content>{content}</Content>
                                </MainSection>
                                <SubSection>
                                    <div>{this.renderExpirationDate(expirationDate)}</div>
                                </SubSection>
                            </TodoContent>
                        </ButtonBase>
                    </DataWrapper>
                </Paper>
            </ListItemWrapper>
        );
    }
}

const styles = theme => ({
    buttonBase : {
        width : '100%',
        paddingLeft : '1rem'
    },
    completeCheckbox : {
        width : '100px'
    }
});

export default withStyles(styles)(TodoItem);