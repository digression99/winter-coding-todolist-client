import React from 'react';
import { PageTemplate }from '../templates';
import { TodoList } from '../organisms';

import { Header, Footer } from '../organisms';

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
            />
        </div>
    );
};

export default HomePage;
