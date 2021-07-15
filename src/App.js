import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./pages/Signin";
import Accounts from "./pages/Accounts";
import Transactions from "./pages/Transactions";
import NewAccount from "./pages/NewAccount";
import PageNotFound from "./pages/PageNotFound";
import RestrictedRoute from "./hoc/RestrictedRoute";
import { useState } from "react";

const App = () => {
  let initialVal = "";
  const storedIddd = sessionStorage.getItem("id");

  if (storedIddd) {
    initialVal = storedIddd;
  }

  const [storedId, setStoredId] = useState(initialVal);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <SignIn {...props} setStoredId={setStoredId} />}
        />
        <Route
          exact
          path="/signin"
          render={(props) => <SignIn {...props} setStoredId={setStoredId} />}
        />
        <RestrictedRoute
          component={Accounts}
          path="/accounts"
          isLoggedIn={storedId}
        />
        <RestrictedRoute
          component={Transactions}
          path="/transactions"
          isLoggedIn={storedId}
        />
        <RestrictedRoute
          component={NewAccount}
          path="/newAccount"
          isLoggedIn={storedId}
        />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
