import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";



const AppRoutes = () => {
    let routes = useRoutes([
        { path:'/login', element: <Login /> },
        { path:'/home', element: <Home /> },
        { path:'/preTest', element: <PreTest /> },
        { path:'/test', element: <Test /> },
        { path:'/postTest', element: <PostTest /> },
        { path:'/profile', element: <Profile /> },
        { path:'/certificate', element: <Certificate /> },
        { path:'/habilities', element: <Habilities /> },
        { path:'', element: < /> },
    ])
    return routes;
}

export default AppRoutes;