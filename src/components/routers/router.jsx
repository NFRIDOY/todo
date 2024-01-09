import { createBrowserRouter } from "react-router-dom";

import React from 'react';
import App from "../../App";
import Mainlayout from './../../layout/Mainlayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: "/",
                element: <App></App>,
            }
        ]
    },
]);

export default router;

