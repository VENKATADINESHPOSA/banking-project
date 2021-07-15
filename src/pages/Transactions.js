import { useEffect } from "react";
import { connect } from "react-redux";
import Transaction from "../components/organisms/Transaction/Transaction";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";


const Transations = (props) => {
  const { transactions, setField, fetchTransactionDetails } = props;
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
      <h1 style={{ textAlign: "center" }}>Transactions Page</h1>
      {prepareTransactions()}
      <Button
        variant="contained"
        color="secondary"
        onClick={() => history.push("/accounts")}
      >
        Back to Accounts
      </Button>
    </>
  );
};

const mapStateToProps = (store) => ({
  transactions: store.transactions.transactions,
});

const mapDispatchToProps = (store) => ({
  setField: store.transactions.setField,
  fetchTransactionDetails: store.transactions.fetchTransactionDetails,
});

export default connect(mapStateToProps, mapDispatchToProps)(Transations);
