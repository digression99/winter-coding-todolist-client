import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default () => (
    <ToastContainer
        autoClose={false}
        closeOnClick={true}
        hideProgressBar={true}
        position={toast.POSITION.BOTTOM_RIGHT}
        closeButton={false}
        newestOnTop={true}
    />
);