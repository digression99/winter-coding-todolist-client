import React from 'react';
import styled from 'styled-components';

import { TodoItem } from '../molecules';

const TodoList = styled.ul`
  display : flex;
  flex-direction : column;
  width : 100%;
  height : 100%;
`;

export default ({ todos }) => (
    <TodoList>
        {todos.map(({ id, ...rest }) =>
            <TodoItem
                key={id}
                {...rest}
            />)}
    </TodoList>
);