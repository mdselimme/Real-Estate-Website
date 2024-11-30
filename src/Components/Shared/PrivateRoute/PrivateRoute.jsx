import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { userData, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-warning loading-lg"></span>
      </div>
    );
  }

  if (userData) {
    return children;
  }
  return <Navigate to={"/login"} replace></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;