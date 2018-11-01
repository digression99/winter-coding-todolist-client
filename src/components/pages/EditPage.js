import React from 'react';

import { PageTemplate } from '../templates';
import { Header, Footer } from '../organisms';

import { EditTodoFormContainer } from "../../containers";

const EditPage = ({ todos, onEditFormSubmit }) => {
    return (
        <PageTemplate
            header={<Header />}
            content={
                <div>
                    <EditTodoFormContainer
                        todos={todos}
                        onEditFormSubmit={onEditFormSubmit}
                    />
                </div>}
            footer={<Footer />}
        />
    );
};

export default EditPage;
