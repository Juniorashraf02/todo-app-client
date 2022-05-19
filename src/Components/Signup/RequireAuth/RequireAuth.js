import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, Navigate } from "react-router-dom";
import auth from '../../firebase.init';

const RequireAuth = ({ children}) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    if (!user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
   
};
if(loading){
    return <p>Loading</p>
}
return children;
}

export default RequireAuth;