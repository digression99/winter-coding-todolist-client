import React from 'react';
import { PageTemplate } from '../templates';
import { Header, Footer } from '../organisms';

import { TodoForm } from '../organisms';

const CreatePage = ({ onSubmit }) => {
    return (
        <PageTemplate
            header={<Header />}
            content={
                <div>
                    <TodoForm
                        onSubmit={onSubmit}
                    />
                </div>
            }
            footer={<Footer />}
        />
    );
};

export default CreatePage;
