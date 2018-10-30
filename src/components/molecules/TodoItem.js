import React, { Component } from 'react';
import styled from 'styled-components';

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

    checkTimeExpired() {
        const time =  this.props.dateExpire - new Date().getTime();
        console.log(`${this.props.title} has remain time : ${time}`);

        if (time < 0) {
            console.log('timer expired.');
            window.clearInterval(this.state.expireTimer);
        }
    }

    componentWillUnmount() {
        if (this.state.expireTimer !== -1) {
            window.clearInterval(this.state.expireTimer);
        }
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
            content,
            dateExpire
        } = this.props;

        return (
            <Wrapper>
                <Checkbox
                    isChecked={isChecked}
                    color="primary"
                    onChange={(e) => {
                        this.setState((prevState, props) => ({
                            isChecked : !prevState.isChecked
                        }));

                        if (this.state.isChecked === false) {
                            console.log('todo completed');
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