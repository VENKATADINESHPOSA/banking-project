import { Redirect, Route } from "react-router";

const RestrictedRoute = ({ isLoggedIn, component, path }) => {
  return (
    <>
      {isLoggedIn ? (
        <Route path={path} component={component} />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default RestrictedRoute;
