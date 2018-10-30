import React from 'react';
import { PageTemplate }from '../templates';
import { TodoList } from '../organisms';

import { Header } from '../organisms';

const HomePage = ({ todos }) => {
    return (
        <div>
            <PageTemplate
                header={
                    <Header />
                }
                content={<TodoList
                    todos={todos}
                />}
                footer={<footer>This is home page footer.</footer>}
            />
        </div>
    );
};

export default HomePage;
