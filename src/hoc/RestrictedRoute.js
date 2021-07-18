import { Redirect, Route } from "react-router";
import { useContext } from "react";
import ContextStorage from "../context/contextStorage";
import PropTypes from "prop-types";

const RestrictedRoute = ({ component, path }) => {
  const { id } = useContext(ContextStorage);
  return (
    <>
      {id ? <Route path={path} component={component} /> : <Redirect to="/" />}
    </>
  );
};

RestrictedRoute.propTypes = {
  component: PropTypes.object, //why this is passed as object here.
  path: PropTypes.string,
};
export default RestrictedRoute;
