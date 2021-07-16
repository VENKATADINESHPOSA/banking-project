import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import BreadCrumb from "../components/organisms/BreadCrumbs/BreadCrumbs";
import Header from "../components/organisms/Header/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const NewAccount = (props) => {
  const {
    fName,
    lName,
    firstName,
    lastName,
    accountId,
    type,
    number,
    date,
    balance,
    setField,
    setData,
    accounts,
  } = props;
  const classes = useStyles();
  const history = useHistory();

  const handleSubmitForm = (e) => {
    setData({
      accounts: [
        ...accounts,
        { accountId, type, number, date, balance, transactions: [] },
      ],
    });
    history.push("/accounts");
  };

  return (
    <>
      <Header firstName={fName} lastName={lName} />
      <BreadCrumb link="New Account" />
      <form className={classes.root} autoComplete="off">
        <h1 style={{ textAlign: "center" }}>Account addition form</h1>
        <TextField
          value={firstName}
          id="outlined-basic"
          required
          label="First Name"
          variant="outlined"
          onChange={({ target: { value } }) =>
            setField({ name: "firstName", value })
          }
        />
        <br />
        <TextField
          value={lastName}
          required
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          onChange={({ target: { value } }) =>
            setField({ name: "lastName", value })
          }
        />
        <br />
        <TextField
          value={type}
          id="outlined-basic"
          required
          label="Account Type"
          variant="outlined"
          onChange={({ target: { value } }) =>
            setField({ name: "type", value })
          }
        />
        <br />
        <TextField
          id="outlined-basic"
          value={number}
          label="Account Number"
          required
          variant="outlined"
          onChange={({ target: { value } }) =>
            setField({ name: "number", value })
          }
        />
        <br />
        <TextField
          value={accountId}
          id="outlined-basic"
          label="AccountId"
          required
          variant="outlined"
          onChange={({ target: { value } }) =>
            setField({ name: "accountId", value })
          }
        />
        <br />
        <TextField
          value={date}
          id="outlined-basic"
          label="Date"
          required
          variant="outlined"
          onChange={({ target: { value } }) =>
            setField({ name: "date", value })
          }
        />
        <br />
        <TextField
          value={balance}
          id="outlined-basic"
          label="Balance"
          required
          variant="outlined"
          onChange={({ target: { value } }) =>
            setField({ name: "balance", value })
          }
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={(e) => handleSubmitForm(e)}
        >
          Create Account
        </Button>
      </form>
    </>
  );
};

const mapSateToProps = (store) => ({
  fName: store.accounts.firstName,
  lName: store.accounts.lastName,
  firstName: store.newAccount.firstName,
  lastName: store.newAccount.lastName,
  id: store.accounts.id,
  accountId: store.newAccount.accountId,
  type: store.newAccount.type,
  number: store.newAccount.number,
  date: store.newAccount.date,
  balance: store.newAccount.balance,
  accounts: store.accounts.accounts,
});

const mapDispatchToProps = (dispatch) => ({
  setField: dispatch.newAccount.setField,
  setData: dispatch.accounts.setData,
});

export default connect(mapSateToProps, mapDispatchToProps)(NewAccount);
