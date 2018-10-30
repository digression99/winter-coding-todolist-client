import React from 'react';

import { PageTemplate } from '../templates';
import { Header, Footer } from '../organisms';

const CreatePage = () => {
    return (
        <PageTemplate
            header={<Header />}
            content={<div>This is Create page.</div>}
            footer={<Footer />}
        />
    );
};

export default CreatePage;
