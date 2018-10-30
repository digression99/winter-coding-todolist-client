import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default () => (
    <ToastContainer
        autoClose={false}
        closeOnClick={true}
        hideProgressBar={true}
        position={toast.POSITION.BOTTOM_CENTER}
        closeButton={false}
        newestOnTop={true}
    />
);