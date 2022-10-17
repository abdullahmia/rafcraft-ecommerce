import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
    const isLoggedIn = useAuth();
    const { token } = useSelector(state => state.auth);
    let decodedToken;
    if (token) {
        decodedToken = jwt_decode(token);
    }
    return isLoggedIn && decodedToken.role === 'admin' ? children : <Navigate to="/login" />
}

export default AdminRoute;