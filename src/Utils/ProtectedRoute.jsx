import {Outlet,Navigate} from "react-router-dom";

const ProtectedRoutes = () =>{
    const token = localStorage.getItem('token'); // localStorage'dan token alınıyor
    return token ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;