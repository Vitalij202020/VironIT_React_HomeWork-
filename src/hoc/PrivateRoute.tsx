import React, {FC} from 'react';
import {Navigate} from "react-router"
import {useTypedSelector} from "../hooks/useTypedSelector";

interface PropType {
    component: React.FC
    roles: Array<string>
}

const PrivateRoute: FC<PropType> = ({component: Component, roles}) => {
    const {user} = useTypedSelector(state => state.user)

    const userHasRequiredRole = roles.includes(user.role)
    console.log("inside private rout", userHasRequiredRole)

    if (userHasRequiredRole) {
        return <Component/>
    }
    return <Navigate to='/'/>
};

export default PrivateRoute;


