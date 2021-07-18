import { useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signin = (props) => {
  const [showError, setShowError] = useState(false);
  const [showUserNameValidations, setShowUserNameValidations] = useState(false);
  const [showPasswordErrorValidations, setShowPasswordErrorValidations] =
    useState(false);

  const classes = useStyles();
  let history = useHistory();
  const { userName, password, setField, verifyLoginDetails, setStoredId } =
    props;

  const handleSubmit = async (e) => {
    setShowUserNameValidations(true);
    setShowPasswordErrorValidations(true);

    e.preventDefault();
    const result = await verifyLoginDetails();

    if (Object.keys(result).length > 0) {
      setField({ id: "id", value: result.id });
      sessionStorage.setItem("id", result.id);
      setStoredId(result.id);
      //redirect to accounts page.
      history.push("/accounts");
    } else {
      setShowError(true);
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userName"
              label="Username(alphanumeric)"
              name="userName"
              autoComplete="userName"
              autoFocus
              value={userName}
              onChange={({ target: { value, id } }) => {
                const regex = /[^\w]|_/g;
                if (regex.test(value)) {
                  return;
                }
                setShowUserNameValidations(true);
                setField({ id, value });
              }}
            />
            {showUserNameValidations && userName.length === 0 && (
              <div style={{ color: "red" }}>Please enter username</div>
            )}

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={({ target: { value, id } }) => {
                setShowPasswordErrorValidations(true);
                setField({ id, value });
              }}
            />
            {showPasswordErrorValidations && password.length === 0 && (
              <div style={{ color: "red" }}>Please enter password</div>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => handleSubmit(e)}
            >
              Sign In
            </Button>
          </form>
          {showError && <div style={{ color: "red" }}>Invalid Credentials</div>}
        </div>
      </Container>{" "}
    </>
  );
};

Signin.propTypes = {
  userName: PropTypes.string,
  password: PropTypes.string,
  setField: PropTypes.func,
  verifyLoginDetails: PropTypes.func,
  setStoredId: PropTypes.func,
};

const mapStateToProps = (store) => ({
  userName: store.signin.userName,
  password: store.signin.password,
});
const mapDispatchToProps = (store) => ({
  setField: store.signin.setField,
  verifyLoginDetails: store.signin.verifyLoginDetails,
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
