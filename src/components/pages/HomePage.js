import React from 'react';
import { PageTemplate }from '../templates';
import { TodoList } from '../organisms';

const HomePage = ({ todos }) => {
    return (
        <div>
            <PageTemplate
                header={<header>This is home page header.</header>}
                content={<TodoList
                    todos={todos}
                />}
                footer={<footer>This is home page footer.</footer>}
            />
        </div>
    );
};

export default HomePage;
