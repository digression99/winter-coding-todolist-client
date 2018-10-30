import React, {Component} from 'react';
import Toast from './Toast';
import GlobalStyle from './globalStyles';
import {TodoList } from './components/organisms';

import { HomePage } from './components/pages';

class App extends Component {

    state = {
        todos : [
            {
                title : "todo one",
                content : "this is todo one.",
                id : 1,
                dateExpire : new Date().getTime() + 5000,
                dateCreated : new Date().getTime()
            },
            {
                title : "todo two",
                content : "this is todo two.",
                id : 2,
                dateExpire : new Date().getTime() + 10000,
                dateCreated : new Date().getTime()
            }
        ]
    };

    render() {
        return (
            <>
                <HomePage
                    todos={this.state.todos}
                />
                <GlobalStyle />
                <Toast />
            </>
        );
    }
}

{/*<TodoList*/}
    {/*todos={this.state.todos}*/}
{/*/>*/}

export default App;
