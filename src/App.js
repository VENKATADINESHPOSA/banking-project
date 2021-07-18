import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import SignIn from "./pages/Signin";
import Accounts from "./pages/Accounts";
import Transactions from "./pages/Transactions";
import NewAccount from "./pages/NewAccount";
import PageNotFound from "./pages/PageNotFound";
import RestrictedRoute from "./hoc/RestrictedRoute";
import ContextStorage from "./context/contextStorage";
import { useState } from "react";

const App = () => {
  const { id } = useContext(ContextStorage);
  let initialVal = "";
  const storedIddd = id;

  if (storedIddd) {
    initialVal = storedIddd;
  }

  const [storedId, setStoredId] = useState(initialVal);
  const [TransactionIds, setTransactionIds] = useState([]);

  return (
    <ContextStorage.Provider
      value={{
        id: storedId,
        setId: setStoredId,
        transactionIds: TransactionIds,
        setTransactionIds: setTransactionIds,
      }}
    >
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
          <RestrictedRoute component={Accounts} path="/accounts" />
          <RestrictedRoute component={Transactions} path="/transactions" />
          <RestrictedRoute component={NewAccount} path="/newAccount" />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </ContextStorage.Provider>
  );
};

export default App;
