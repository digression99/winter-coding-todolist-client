import React from 'react';

import { PageTemplate } from '../templates';
import { Header, Footer } from '../organisms';

const EditPage = () => {
    return (
        <PageTemplate
            header={<Header />}
            content={<div>This is edit page.</div>}
            footer={<Footer />}
        />
    );
};

export default EditPage;
