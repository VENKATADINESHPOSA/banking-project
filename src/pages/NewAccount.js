/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import BreadCrumb from "../components/organisms/BreadCrumbs/BreadCrumbs";
import Header from "../components/organisms/Header/Header";
import PropTypes from "prop-types";

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
  const [showFirstNameValidationError, setFirstNameShowValidationError] =
    useState(false);
  const [showlastNameValidationError, setLastNameShowValidationError] =
    useState(false);
  const [showAccountTypeValidationError, setShowAccountTypeValidationError] =
    useState(false);
  const [
    showAccountNumberValidationError,
    setShowAccountNumberValidationError,
  ] = useState(false);
  const [showAccountIdValidationError, setShowAccountIdValidationError] =
    useState(false);
  const [showDateValidationError, setShowDateValidationError] = useState(false);
  const [
    showAccountBalanceValidationError,
    setShowAccountBalanceValidationError,
  ] = useState(false);

  const handleSubmitForm = (e) => {
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      type.length === 0 ||
      number.length === 0 ||
      accountId.length === 0 ||
      date.length === 0 ||
      balance.length === 0
    ) {
      return;
    }
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
          onChange={({ target: { value } }) => {
            const regex = /[0-9_\-\.\@]|_/g;
            if (regex.test(value)) {
              return;
            }
            setFirstNameShowValidationError(true);
            setField({ name: "firstName", value });
          }}
        />
        {showFirstNameValidationError && firstName.length === 0 && (
          <div style={{ color: "red" }}>Please enter firstName</div>
        )}
        <br />
        <TextField
          value={lastName}
          required
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          onChange={({ target: { value } }) => {
            const regex = /[0-9_\-\.\@]|_/g;
            if (regex.test(value)) {
              return;
            }
            setLastNameShowValidationError(true);
            setField({ name: "lastName", value });
          }}
        />
        {showlastNameValidationError && lastName.length === 0 && (
          <div style={{ color: "red" }}>Please enter lastName</div>
        )}
        <br />
        <TextField
          value={type}
          id="outlined-basic"
          required
          label="Account Type"
          variant="outlined"
          onChange={({ target: { value } }) => {
            const regex = /[0-9_\-\.\@]|_/g;
            if (regex.test(value)) {
              return;
            }
            setShowAccountTypeValidationError(true);
            setField({ name: "type", value });
          }}
        />
        {showAccountTypeValidationError && type.length === 0 && (
          <div style={{ color: "red" }}>Please enter Account Type.</div>
        )}
        <br />
        <TextField
          id="outlined-basic"
          value={number}
          label="Account Number"
          required
          variant="outlined"
          onChange={({ target: { value } }) => {
            const regex = /[a-zA-Z\.\@\-]|_/g;
            if (regex.test(value)) {
              return;
            }
            setShowAccountNumberValidationError(true);
            setField({ name: "number", value });
          }}
        />
        {showAccountNumberValidationError && number.length === 0 && (
          <div style={{ color: "red" }}>Please enter Account Number.</div>
        )}
        <br />
        <TextField
          value={accountId}
          id="outlined-basic"
          label="AccountId"
          required
          variant="outlined"
          onChange={({ target: { value } }) => {
            const regex = /[^\w]|_/g;
            if (regex.test(value)) {
              return;
            }
            setShowAccountIdValidationError(true);
            setField({ name: "accountId", value });
          }}
        />
        {showAccountIdValidationError && accountId.length === 0 && (
          <div style={{ color: "red" }}>Please enter Account Id.</div>
        )}
        <br />
        <TextField
          value={date}
          id="outlined-basic"
          label="Date"
          required
          variant="outlined"
          onChange={({ target: { value } }) => {
            const regex = /^\d{2}([./-])\d{2}\1\d{4}$/g;
            if (value.length < 10) {
            }
            if (value.match(regex)) {
              console.log(value);
              return;
            }
            setShowDateValidationError(true);
            setField({ name: "date", value });
          }}
        />
        {showDateValidationError && date.length === 0 && (
          <div style={{ color: "red" }}>Please enter date.</div>
        )}
        <br />
        <TextField
          value={balance}
          id="outlined-basic"
          label="Balance"
          required
          variant="outlined"
          onChange={({ target: { value } }) => {
            const regex = /[a-zA-Z\.\@\-]|_/g;
            if (regex.test(value)) {
              return;
            }
            setShowAccountBalanceValidationError(true);
            setField({ name: "balance", value });
          }}
        />
        {showAccountBalanceValidationError && balance.length === 0 && (
          <div style={{ color: "red" }}>Please enter Account balance.</div>
        )}
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

NewAccount.propTypes = {
  fName: PropTypes.string,
  lName: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  accountId: PropTypes.string,
  type: PropTypes.string,
  number: PropTypes.string,
  date: PropTypes.string,
  balance: PropTypes.string,
  setField: PropTypes.func,
  setData: PropTypes.func,
  accounts: PropTypes.array,
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
