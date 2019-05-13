import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './root.scss';
import App from './components/App';

const Root = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
export default Root;