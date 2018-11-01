import React, {Component} from 'react';
import {withRouter} from 'react-router';

import Toast from './Toast';
import GlobalStyle from './globalStyles';
import Routes from './Routes';

class App extends Component {

    state = {
        todos: [
            {
                title: "todo one",
                content: "this is todo one.",
                priority: 1,
                id: 1,
                expirationDate: new Date().getTime() + 5000,
                dateCreated: new Date().getTime(),
                isExpirationNotified: false,
                isExpirationDateChecked: false,
                isPriorityChecked: false
            },
            {
                title: "todo two",
                content: "this is todo two.",
                priority: 2,
                id: 2,
                expirationDate: new Date().getTime() + 10000,
                dateCreated: new Date().getTime(),
                isExpirationNotified: false,
                isExpirationDateChecked: false,
                isPriorityChecked: false
            }
        ]
    };

    onTodoNotification(id) {
        const newState = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isExpirationNotified: true
                }
            }
            return todo;
        });
        this.setState({
            todos: newState
        })
    }

    onCreateFormSubmit(formData) {
        const nextId = this.state.todos.length + 1;
        const newTodo = {
            title: formData.title,
            content: formData.content,
            id: nextId,
            expirationDate: formData.isExpirationDateChecked ? formData.expirationDate : -1,
            dateCreated: new Date().getTime(),
            isExpirationNotified: false,
            priority: formData.isPriorityChecked ? formData.priority : -1
        };

        this.setState((prevState) => {
            return {
                todos: [...prevState.todos, newTodo]
            }
        });
        this.props.history.push('/');
    }

    onEditFormSubmit(formData, updateId) {
        const {todos} = this.state;
        const newTodo = {...formData, id: parseInt(updateId)};

        let updateIdx = -1;
        todos.map((todo, idx) => {
            if (todo.id === parseInt(updateId)) {
                updateIdx = idx;
            }
        });

        this.setState({
            todos: [...todos.slice(0, updateIdx),
                newTodo,
                ...todos.slice(updateIdx + 1)
            ]
        });

        this.props.history.push('/');
    }

    render() {
        const onTodoNotification = this.onTodoNotification.bind(this);
        const onCreateFormSubmit = this.onCreateFormSubmit.bind(this);
        const onEditFormSubmit = this.onEditFormSubmit.bind(this);

        return (
            <>
                <Routes
                    onTodoNotification={onTodoNotification}
                    todos={this.state.todos}
                    onCreateFormSubmit={onCreateFormSubmit}
                    onEditFormSubmit={onEditFormSubmit}
                />
                <GlobalStyle/>
                <Toast/>
            </>
        );
    }
}

export default withRouter(App);
