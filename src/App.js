import React, {Component} from 'react';
import {withRouter} from 'react-router';

import Toast from './Toast';
import GlobalStyle from './globalStyles';
import Routes from './Routes';

import { fetchTodos } from './lib/api';

class App extends Component {

    state = {
        todos : []
    };

    async componentDidMount() {
        const fetchedTodos = await fetchTodos();
        this.setState({ todos : fetchedTodos });
    }

    onCompleteCheckClick(id) {
        const newState = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isCompleted : !todo.isCompleted
                }
            }
            return todo;
        });

        this.setState({ todos : newState });
    }

    onTodoNotification(id) {
        console.log('on todo notification called!');


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

    onDeleteTodo(id) {
        const newState = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos: newState });
        this.props.history.push('/');
    }

    onCreateFormSubmit(formData) {
        const newTodo = {
            ...formData,
            id : this.state.todos.length + 1,
            dateCreated: new Date().getTime(),
            expirationDate: formData.isExpirationDateChecked ? formData.expirationDate : -1,
            priority: formData.isPriorityChecked ? formData.priority : -1
        };

        this.setState((prevState) => ({ todos: [...prevState.todos, newTodo] }));
        this.props.history.push('/');
    }

    onEditFormSubmit(formData, updateId) {
        console.log('form data received : ', formData);
        console.log('update id : ', updateId);
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
        const { todos } = this.state;
        const onTodoNotification = this.onTodoNotification.bind(this);
        const onCreateFormSubmit = this.onCreateFormSubmit.bind(this);
        const onEditFormSubmit = this.onEditFormSubmit.bind(this);
        const onDeleteTodo = this.onDeleteTodo.bind(this);
        const onCompleteCheckClick = this.onCompleteCheckClick.bind(this);

        return (
            <>
                <Routes
                    onTodoNotification={onTodoNotification}
                    todos={todos}
                    onCreateFormSubmit={onCreateFormSubmit}
                    onEditFormSubmit={onEditFormSubmit}
                    onDeleteTodo={onDeleteTodo}
                    onCompleteCheckClick={onCompleteCheckClick}
                />
                <GlobalStyle/>
                <Toast/>
            </>
        );
    }
}

export default withRouter(App);
