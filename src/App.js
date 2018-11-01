import React, {Component} from 'react';
import { withRouter } from 'react-router';

import Toast from './Toast';
import GlobalStyle from './globalStyles';
import Routes from './Routes';

// const state = {
//     todos : {
//         byId : {
//             1 : {
//                 title : "todo one",
//                 content : "this is todo one.",
//                 id : 1,
//                 dateExpire : new Date().getTime() + 5000,
//                 dateCreated : new Date().getTime(),
//                 isExpirationNotified : false,
//                 priority : 1
//             },
//             2 : {
//                 title : "todo two",
//                 content : "this is todo two.",
//                 id : 2,
//                 dateExpire : new Date().getTime() + 10000,
//                 dateCreated : new Date().getTime(),
//                 isExpirationNotified : false,
//                 priority : 2
//             }
//         },
//         allTodos : [
//
//         ]
//     }
// };

class App extends Component {

    state = {
        todos : [
            {
                title : "todo one",
                content : "this is todo one.",
                priority : 1,
                id : 1,
                expirationDate : new Date().getTime() + 5000,
                dateCreated : new Date().getTime(),
                isExpirationNotified : false
            },
            {
                title : "todo two",
                content : "this is todo two.",
                priority : 2,
                id : 2,
                expirationDate : new Date().getTime() + 10000,
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

    onCreateFormSubmit(formData) {
        console.log('received data : ', formData);

        const nextId = this.state.todos.length + 1;
        const newTodo = {
            title : formData.title,
            content : formData.content,
            id : nextId,
            expirationDate : new Date().getTime() + 360000,
            dateCreated : new Date().getTime(),
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
