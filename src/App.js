import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./pages/Signin";
import Accounts from "./pages/Accounts";
import Transactions from "./pages/Transactions";
import NewAccount from "./pages/NewAccount";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/accounts" component={Accounts} />
        <Route exact path="/newaccount" component={NewAccount} />
        <Route exact path="/transactions" component={Transactions} />
        <Route exact path="/pagenotfound" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
