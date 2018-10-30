import React, {Component} from 'react';
import { TodoItem } from './components/molecules';
import GlobalStyle from './globalStyles';

class App extends Component {

    state = {
        todoList : [
            {
                title : "todo one.",
                content : "this is todo one.",
                id : 1
            },
            {
                title : "todo two.",
                content : "this is todo two.",
                id : 2
            }
        ]
    };

    renderTodoList() {
        return this.state.todoList.map(({ title, content, id }) => (
            <TodoItem
                key={id}
                title={title}
                content={content}
            />
        ))
    }

    render() {

        return (
            <>
                {this.renderTodoList()}
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
