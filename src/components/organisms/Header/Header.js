import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Button: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const {
    firstName,
    lastName,
    resetAccounts,
    resetSignin,
    resettransactions,
    resetnewAccount,
  } = props;

  const handleLogout = () => {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("transactionIds");
    resetAccounts();
    resetSignin();
    resettransactions();
    resetnewAccount();
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Welcome{" "}
            <strong>
              {firstName} {lastName}
            </strong>
          </Typography>
          <Button
            className={classes.Button}
            color="inherit"
            variant="outlined"
            onClick={() => history.push("/newaccount")}
          >
            Add Account
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            onClick={() => handleLogout()}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  resetAccounts: PropTypes.func,
  resetSignin: PropTypes.func,
  resettransactions: PropTypes.func,
  resetnewAccount: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  resetSignin: dispatch.signin.resetField,
  resetAccounts: dispatch.accounts.resetData,
  resettransactions: dispatch.transactions.resetField,
  resetnewAccount: dispatch.newAccount.resetField,
});

export default connect(null, mapDispatchToProps)(Header);
