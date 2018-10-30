import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default () => (
    <ToastContainer
        autoClose={5000}
        closeOnClick={true}
        hideProgressBar={true}
        position={toast.POSITION.BOTTOM_LEFT}
        closeButton={false}
        newestOnTop={true}
    />
);