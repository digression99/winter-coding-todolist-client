import React from 'react';
import {PageTemplate} from '../templates';
import {TodoList} from '../organisms';
import {Header, Footer} from '../organisms';
import {TodoAddButton} from '../molecules';

const HomePage = ({
                      todos,
                      onTodoNotification,
                      onCompleteCheckClick
                  }) => {
    return (
        <PageTemplate
            header={<Header/>}
            content={
                <>
                    <TodoList
                        todos={todos}
                        onTodoNotification={onTodoNotification}
                        onCompleteCheckClick={onCompleteCheckClick}
                    />
                    <TodoAddButton/>
                </>
            }
            footer={<Footer/>}
        />
    );
};

HomePage.displayName = "HomePage";

export default HomePage;
