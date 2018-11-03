import React from 'react';

import {PageTemplate} from '../templates';
import {Header, Footer} from '../organisms';

import {EditTodoFormContainer} from "../../containers";

const EditPage = ({
                      todos,
                      onEditFormSubmit,
                      onDeleteTodo
                  }) => {
    return (
        <PageTemplate
            header={<Header/>}
            content={
                <div>
                    <EditTodoFormContainer
                        todos={todos}
                        onEditFormSubmit={onEditFormSubmit}
                        onDeleteTodo={onDeleteTodo}
                    />
                </div>}
            footer={<Footer/>}
        />
    );
};

export default EditPage;
