import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
   
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <p className=" text-center mt-36"><span className="loading loading-spinner loading-lg"></span></p>
    }
    if(user){
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
    
};

export default PrivateRoute;