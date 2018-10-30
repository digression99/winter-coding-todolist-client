import React, { Component } from 'react';
import styled from 'styled-components';
import {toastMessage} from '../../lib';
import { Checkbox } from '../atoms';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

const ListItemWrapper = styled.li`
  list-style-type: none;
  &:not(:last-child) {
    margin-bottom : 1rem;
  }
`;

const ContentWrapper = styled.div`
  display : flex;
  flex-direction : row;
`;

class TodoItem extends Component {

    state = {
        isChecked : false,
        expireTimer : -1
    };

    removeTimer() {
        if (this.state.expireTimer !== -1) {
            window.clearInterval(this.state.expireTimer);
        }
    }

    checkTimeExpired() {
        const time =  this.props.dateExpire - new Date().getTime();
        console.log(`${this.props.title} has remain time : ${time}`);

        if (time < 0) {
            if (this.state.isChecked === false) {
                toastMessage(`${this.props.title} has passed expiration time!`);
            }
            this.removeTimer();
        }
    }

    componentWillUnmount() {
        this.removeTimer();
    }

    componentDidMount() {
        this.setState({
            expireTimer : setInterval(() => this.checkTimeExpired(), 1000)
        });
    }

    render() {

        const {
            isChecked
        } = this.state;

        const {
            title,
            content
        } = this.props;

        return (
            <ListItemWrapper>
                <Paper>
                    <ContentWrapper>
                        <Checkbox
                            isChecked={isChecked}
                            color="primary"
                            onChange={() => {
                                this.setState(prevState => ({
                                    isChecked : !prevState.isChecked
                                }));

                                if (this.state.isChecked === false) {
                                    toastMessage(`${title} completed!`);
                                }
                            }}
                        />
                        <ButtonBase
                            style={{
                                width : '100%',
                                height : '6rem',
                                paddingLeft : '1rem'
                            }}
                        >
                            <div
                                style={{
                                    width : '100%',
                                    display : 'flex',
                                    justifyContent : 'flex-start',
                                    alignItems : 'flex-start',
                                    flexDirection : 'column'
                                }}
                            >
                                <h2
                                    style={{
                                        fontSize : '2rem',
                                    }}
                                >{title}</h2>
                                <p
                                    style={{
                                        fontSize : '1rem'
                                    }}
                                >{content}</p>
                            </div>
                        </ButtonBase>
                    </ContentWrapper>
                </Paper>
            </ListItemWrapper>
        );
    }
}

export default TodoItem;