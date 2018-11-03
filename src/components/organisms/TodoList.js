import React from 'react';
import styled from 'styled-components';

import { TodoItem } from '../molecules';

const Wrapper = styled.ul`
  display : flex;
  flex-direction : column;
  width : 100%;
  margin-bottom : 2rem;
  //height : 100%;
`;

const TodoList = ({ todos, onTodoNotification }) => (
    <Wrapper>
        {todos.map(todo =>
            <TodoItem
                onTodoNotification={onTodoNotification}
                key={todo.id}
                {...todo}
            />)}
    </Wrapper>
);

TodoList.displayName="TodoList";

export default TodoList;