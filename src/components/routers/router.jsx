import { createBrowserRouter } from "react-router-dom";

import React from 'react';
import App from "../../App";
import Mainlayout from './../../layout/Mainlayout';
import AddTask from "../../pages/AddTask/AddTask";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: "/",
                element: <App></App>,
            },
            {
                path: "/addTask",
                element: <AddTask></AddTask>,
            },
        ]
    },
]);

export default router;

