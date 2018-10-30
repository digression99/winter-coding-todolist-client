import React, { Component } from 'react';
import styled from 'styled-components';
import {toastMessage} from '../../lib';
import { Checkbox } from '../atoms';

const Wrapper = styled.div`
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
            <Wrapper>
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
                <div>
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
            </Wrapper>
        );
    }
}

export default TodoItem;