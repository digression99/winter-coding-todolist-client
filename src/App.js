import React, {Component} from 'react';
import { TodoItem } from './components/molecules';
import GlobalStyle from './globalStyles';

import {TodoList } from './components/organisms';

class App extends Component {

    state = {
        todos : [
            {
                title : "todo one.",
                content : "this is todo one.",
                id : 1,
                dateExpire : new Date().getTime() + 10000,
                dateCreated : new Date().getTime()
            },
            {
                title : "todo two.",
                content : "this is todo two.",
                id : 2,
                dateExpire : new Date().getTime() + 20000,
                dateCreated : new Date().getTime()
            }
        ]
    };

    renderTodoList() {
        return this.state.todoList.map(({ title, content, id, dateExpire }) => (
            <TodoItem
                key={id}
                title={title}
                content={content}
                dateExpire={dateExpire}
            />
        ))
    }

    render() {

        return (
            <>
                <TodoList
                    todos={this.state.todos}
                />
                <GlobalStyle />
            </>
        );
    }
}

// {/*<div>*/}
//     {/*<Checkbox*/}
//         {/*checked={isChecked}*/}
//
//     {/*/>*/}
//
//
//     {/*<Checkbox*/}
//         {/*color="primary"*/}
//         {/*checked={isChecked}*/}
//         {/*id="123"*/}
//         {/*onChange={(e) => {*/}
//             {/*console.log(e);*/}
//             {/*console.log(e.target.value);*/}
//             {/*console.log('checkbox clicked.');*/}
//
//             {/*this.setState((prevState, props) => {*/}
//                 {/*return {*/}
//                     {/*isChecked : !prevState.isChecked*/}
//                 {/*};*/}
//             {/*});*/}
//         {/*}}*/}
//     {/*/>*/}
// {/*</div>*/}

export default App;
