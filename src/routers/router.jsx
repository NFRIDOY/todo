import { createBrowserRouter } from "react-router-dom";

import React from 'react';
import Mainlayout from './../layout/Mainlayout';
import App from './../App';
import AddTask from './../pages/AddTask/AddTask';
import Registration from './../pages/Registration/Registration';
import Login from './../pages/Login/Login';
import PrivateRoute from "./PrivateRoute";


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
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>,
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

