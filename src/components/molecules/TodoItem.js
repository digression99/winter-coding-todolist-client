import React, { Component } from 'react';

import { Checkbox } from '../atoms';

class TodoItem extends Component {

    state = {
        isChecked : false
    };

    render() {

        const {
            isChecked
        } = this.state;

        const {
            title,
            content
        } = this.props;

        return (
            <>
                <Checkbox
                    isChecked={isChecked}
                    color="primary"
                    onChange={(e) => {

                        console.log(e);
                        this.setState((prevState, props) => ({
                            isChecked : !prevState.isChecked
                        }));

                        if (this.state.isChecked === false) {
                            console.log('todo completed');
                        }
                    }}
                />
                <div>
                    <div>{title}</div>
                    <div>{content}</div>
                </div>
            </>
        );
    }
}

export default TodoItem;