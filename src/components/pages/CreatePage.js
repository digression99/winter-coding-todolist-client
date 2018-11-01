import React from 'react';
import styled from 'styled-components';
import { PageTemplate } from '../templates';
import { Header, Footer } from '../organisms';

import { TodoForm } from '../organisms';

const CreatePage = ({ onSubmit }) => {
    return (
        <PageTemplate
            header={<Header />}
            content={
                <div
                    style={{
                        marginTop : '3rem'
                    }}
                >
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
