import React from 'react';
import {useSelector} from "react-redux";
import {Navigate} from "react-router"

const PrivateRoute = ({component: Component, props}) => {
    const {isLogin} = useSelector(state => state.user)

    if (isLogin) {
        return <Component {...props}/>
    }
    return <Navigate to={'/'}/>
};

export default PrivateRoute;