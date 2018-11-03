import React from 'react';
import styled from 'styled-components';

import {TodoItem} from '../molecules';

const Wrapper = styled.ul`
  display : flex;
  flex-direction : column;
  width : 100%;
  min-width : 40rem;
  margin-bottom : 2rem;
`;

const TodoList = ({
                      todos,
                      onTodoNotification,
                      onCompleteCheckClick,
                  }) => (
    <Wrapper>
        {todos.length < 1 ? (
            <div>No todos.</div>
        ) : (
            todos.map(todo =>
                <TodoItem
                    onTodoNotification={onTodoNotification}
                    onCompleteCheckClick={onCompleteCheckClick}
                    key={todo.id}
                    {...todo}
                />)
        )}
    </Wrapper>
);

TodoList.displayName = "TodoList";

export default TodoList;