import React from "react";
import { useRoutes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";


const AppRoutes = () => {
    let routes = useRoutes([
        { path:'/login', element: <Login /> },
        { path:'/home', element: <LandingPage /> },
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