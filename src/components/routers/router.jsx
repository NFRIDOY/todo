import { createBrowserRouter } from "react-router-dom";

import React from 'react';
import App from "../../App";
import Mainlayout from './../../layout/Mainlayout';
import AddTask from "../../pages/AddTask/AddTask";
import Registration from './../../pages/Registration/Registration';
import Login from "../../pages/Login/Login";

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
            {
                path: "/Registration",
                element: <Registration></Registration>,
            },
            {
                path: "/Login",
                element: <Login></Login>,
            },
        ]
    },
]);

export default router;

