import React, {Component} from 'react';
import { withRouter } from 'react-router';

import Toast from './Toast';
import GlobalStyle from './globalStyles';
import Routes from './Routes';

const state = {
    todos : {
        byId : {
            1 : {
                title : "todo one",
                content : "this is todo one.",
                id : 1,
                dateExpire : new Date().getTime() + 5000,
                dateCreated : new Date().getTime(),
                isExpirationNotified : false
            },
            2 : {
                title : "todo two",
                content : "this is todo two.",
                id : 2,
                dateExpire : new Date().getTime() + 10000,
                dateCreated : new Date().getTime(),
                isExpirationNotified : false
            }
        },
        allTodos : [

        ]
    }
};

class App extends Component {

    state = {
        todos : [
            {
                title : "todo one",
                content : "this is todo one.",
                id : 1,
                dateExpire : new Date().getTime() + 5000,
                dateCreated : new Date().getTime(),
                isExpirationNotified : false
            },
            {
                title : "todo two",
                content : "this is todo two.",
                id : 2,
                dateExpire : new Date().getTime() + 10000,
                dateCreated : new Date().getTime(),
                isExpirationNotified : false
            }
        ]
    };

    onTodoNotification(id) {
        const todo = this.state.todos.filter(todo => todo.id === id);

        const newState = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isExpirationNotified : true
                }
            } else {
                return todo;
            }
        });
        this.setState({
            todos : newState
        })
    }

    onCreateFormSubmit(title, content) {
        console.log('create form submitted.');
        console.log(title, content);

        const nextId = this.state.todos.length + 1;
        const newTodo = {
            title,
            content,
            id : nextId,
            dateExpire : new Date().getTime() + 360000,
            dateCreate : new Date().getTime(),
            isExpirationNotified : false
        };

        this.setState((prevState) => {
            return {
                todos : [...prevState.todos, newTodo]
            }
        });
        this.props.history.push('/');
    }

    render() {

        const onTodoNotification = this.onTodoNotification.bind(this);
        const onCreateFormSubmit = this.onCreateFormSubmit.bind(this);

        return (
            <>
                <Routes
                    onTodoNotification={onTodoNotification}
                    todos={this.state.todos}
                    onCreateFormSubmit={onCreateFormSubmit}
                />
                <GlobalStyle />
                <Toast />
            </>
        );
    }
}

export default withRouter(App);
