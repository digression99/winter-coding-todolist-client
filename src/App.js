import React, {Component} from 'react';
import {withRouter} from 'react-router';

import Toast from './Toast';
import GlobalStyle from './globalStyles';
import Routes from './Routes';

import {
    fetchTodos,
    insertTodo,
    updateTodo,
    deleteTodo
} from './lib/api';

class App extends Component {

    state = {
        todos : []
    };

    async componentDidMount() {
        window.todos = this.state.todos;
        const fetchedTodos = await fetchTodos();
        this.setState({ todos : fetchedTodos });
    }

    async onCompleteCheckClick(id) {
        const todo = this.state.todos.filter(todo => todo._id === id)[0];
        todo.isCompleted = !todo.isCompleted;

        await updateTodo(todo);
        const fetchedTodos = await fetchTodos();
        this.setState({ todos : fetchedTodos });
    }

    async onTodoNotification(id) {
        const todo = this.state.todos.filter(todo => todo._id === id)[0];
        todo.isExpirationNotified = true;
        todo.isExpirationDateChecked = false;

        await updateTodo(todo);
        const fetchedTodos = await fetchTodos();
        this.setState({ todos : fetchedTodos });
    }

    async onDeleteTodo(id) {
        await deleteTodo(id);

        const fetchedTodos = await fetchTodos();
        this.setState({ todos : fetchedTodos });
        this.props.history.push('/');
    }

    async onCreateFormSubmit(formData) {
        await insertTodo(formData);

        const fetchedTodos = await fetchTodos();
        this.setState({ todos : fetchedTodos });
        this.props.history.push('/');
    }

    async onEditFormSubmit(formData, updateId) {
        await updateTodo(formData);
        const fetchedTodos = await fetchTodos();
        this.setState({ todos : fetchedTodos });
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
