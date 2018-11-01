import React from 'react';
import {PageTemplate} from '../templates';
import {TodoList} from '../organisms';
import {Header, Footer} from '../organisms';
import { TodoAddButton } from '../atoms';

const HomePage = ({
                      todos,
                      onTodoNotification
}) => {
    return (
        <PageTemplate
            header={<Header/>}
            content={
                <>
                    <TodoList
                        todos={todos}
                        onTodoNotification={onTodoNotification}
                    />
                    <TodoAddButton />
                </>
            }
            footer={<Footer/>}
        />
    );
};

export default HomePage;
