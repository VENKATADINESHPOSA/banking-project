import { useEffect } from "react";
import { connect } from "react-redux";
import Transaction from "../components/organisms/Transaction/Transaction";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import Header from "../components/organisms/Header/Header";

const Transations = (props) => {
  const {
    transactions,
    setField,
    fetchTransactionDetails,
    firstName,
    lastName,
  } = props;
  const history = useHistory();

  useEffect(() => {
    const transactionDetails = async () => {
      const data = await fetchTransactionDetails();
      setField({ name: "transactions", value: data });
    };
    transactionDetails();
    // eslint-disable-next-line
  }, []);

  const prepareTransactions = () => {
    return transactions.map((transaction) => (
      <Transaction {...transaction} key={transaction.id} />
    ));
  };

  return (
    <>
      <Header firstName={firstName} lastName={lastName}/>
      {prepareTransactions()}
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push("/accounts")}
        >
          Back to Accounts
        </Button>
      </div>
    </>
  );
};

const mapStateToProps = (store) => ({
  transactions: store.transactions.transactions,
  firstName: store.accounts.firstName,
  lastName: store.accounts.lastName,
});

const mapDispatchToProps = (store) => ({
  setField: store.transactions.setField,
  fetchTransactionDetails: store.transactions.fetchTransactionDetails,
});

export default connect(mapStateToProps, mapDispatchToProps)(Transations);
