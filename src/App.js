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
        const fetchedTodos = await fetchTodos();
        this.setState({ todos : fetchedTodos });
    }

    async onCompleteCheckClick(id) {
        const todo = this.state.todos.filter(todo => todo.id === id)[0];
        todo.isCompleted = !todo.isCompleted;

        const newState = await updateTodo(todo);
        this.setState({ todos: newState });
    }

    async onTodoNotification(id) {
        const todo = this.state.todos.filter(todo => todo.id === id)[0];
        todo.isExpirationNotified = true;
        todo.isExpirationDateChecked = false;
        console.log('noti todo : ', todo);

        const newState = await updateTodo(todo);
        console.log('new state : ', newState);
        this.setState({ todos: newState });
    }

    async onDeleteTodo(id) {
        const newState = await deleteTodo(id);
        this.setState({ todos: newState });

        this.props.history.push('/');
    }

    async onCreateFormSubmit(formData) {
        const newTodo = {
            ...formData,
            id : this.state.todos.length + 1,
            dateCreated: new Date().getTime(),
            expirationDate: formData.isExpirationDateChecked ? formData.expirationDate : -1,
            priority: formData.isPriorityChecked ? formData.priority : -1
        };

        const newState = await insertTodo(newTodo);
        this.setState(() => ({ todos : newState }));

        this.props.history.push('/');
    }

    async onEditFormSubmit(formData, updateId) {
        const todo = {...formData, id: parseInt(updateId)};

        const newState = await updateTodo(todo);
        this.setState(() => ({ todos : newState }));

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
