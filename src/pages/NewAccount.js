import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <h1 style={{ textAlign: "center" }}>Account addition form</h1>
      <TextField id="outlined-basic" label="First Name" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="Account Type" variant="outlined" />
      <br />
      <TextField
        id="outlined-basic"
        label="Account Number"
        variant="outlined"
      />
      <br />
      <TextField id="outlined-basic" label="Mobile" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="Address" variant="outlined" />
      <br />
      <Button variant="contained" color="secondary">
        Create Account
      </Button>
    </form>
  );
}
