import React from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
  const history1 = useHistory();
  const { firstName, lastName } = props;

  const handleLogout = () => {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("transactionIds");
    history1.push("/");
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

export default Header;
