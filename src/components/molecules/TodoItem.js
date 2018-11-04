import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

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

const priorityColors = {
    1 : '#fa5252',
    2 : '#fcc419',
    3 : '#94d82d'
};

const TodoContent = styled.div`
  display : flex;
  justify-content : space-evenly;
  align-items : center;
  flex-direction : row;
  width : 100%;
  
  color: ${props => {
      let color = '#777';
      
      if (priorityColors.hasOwnProperty(props.priority)) {
          color = priorityColors[props.priority];
      }
      return lighten(props.checkedOpacity, color);
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
        expireTimer : null,
        expirationString : ""
    };

    removeTimer() {
        if (this.state.expireTimer) {
            window.clearInterval(this.state.expireTimer);
        }
    }

    async checkTimeExpired() {
        const { expirationDate, isCompleted, isExpirationNotified, onTodoNotification, _id, title } = this.props;
        const time =  moment(expirationDate).valueOf() - new Date().getTime();

        if (time < 0) {
            if (isCompleted === false && isExpirationNotified === false) {
                toastMessage(`\"${title}\" has passed expiration time!`);
                await onTodoNotification(_id);
            }
            this.removeTimer();
        }
    }

    componentWillUnmount() {
        this.removeTimer();
    }

    componentDidMount() {
        if (this.props.expirationDate !== null) {
            this.setState({
                expireTimer : setInterval(() => this.checkTimeExpired(), 1000)
            });
        }
    }

    async handleCheckboxChange(id) {
        await this.props.onCompleteCheckClick(id);
    }

    renderExpirationDate(date) {
        return date === null ? "Do it now!" : moment(date).fromNow();
    }

    render() {

        const {
            title,
            content,
            priority,
            expirationDate,
            _id,
            isCompleted,
            classes
        } = this.props;

        return (
            <ListItemWrapper>
                <Paper>
                    <DataWrapper>
                        <Checkbox
                            checked={isCompleted}
                            color="primary"
                            onChange={() => this.handleCheckboxChange(_id)}
                            className={`${classes.completeCheckbox}`}
                        />
                        <ButtonBase
                            component={TodoLink}
                            to={`/edit/${_id}`}
                            className={`${classes.buttonBase}`}
                        >
                            <TodoContent
                                priority={priority}
                                checkedOpacity={isCompleted ? 0.25 : 0}
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