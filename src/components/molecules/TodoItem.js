import React, { Component } from 'react';
import styled from 'styled-components';
import {toastMessage} from '../../lib';
import { Checkbox } from '../atoms';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { withStyles } from '@material-ui/core/styles';

import { HeaderLink } from "../atoms";

const ListItemWrapper = styled.li`
  list-style-type: none;
  &:not(:last-child) {
    margin-bottom : 1rem;
  }
`;

const DataWrapper = styled.div`
  display : flex;
  flex-direction : row;
`;

const TodoContent = styled.div`
  display : flex;
  justify-content : flex-start;
  align-items : flex-start;
  flex-direction : column;
  width : 100%;
`;

const Title = styled.h2`
  font-size : 2rem;
`;

const Content = styled.p`
  font-size : 1rem;
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
                            isChecked={isCompleted}
                            color="primary"
                            onChange={this.handleCheckboxChange(title)}
                        />
                        <HeaderLink
                            to={`/edit/${id}`}
                        >
                            <ButtonBase
                                className={`${classes.buttonBase}`}
                                onClick={() => console.log(`todo ${title} clicked.`)}
                            >
                                <TodoContent>
                                    <Title>{title}</Title>
                                    <Content>{content}</Content>
                                    <div>priority :{priority}</div>
                                    <div>expiration date : {expirationDate}</div>
                                </TodoContent>
                            </ButtonBase>
                        </HeaderLink>
                    </DataWrapper>
                </Paper>
            </ListItemWrapper>
        );
    }
}

const styles = theme => ({
    buttonBase : {
        width : '100%',
        height : '6rem',
        paddingLeft : '1rem'
    }
});

export default withStyles(styles)(TodoItem);