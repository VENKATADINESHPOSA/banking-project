import { useEffect } from "react";
import { connect } from "react-redux";
import Transaction from "../components/organisms/Transaction/Transaction";

const Transations = (props) => {
  const { transactions, setField, fetchTransactionDetails } = props;

  useEffect(() => {
    const transactionDetails = async () => {
      const data = await fetchTransactionDetails();
      console.log(data);
      setField({ name: "transactions", value: data });
    };
    transactionDetails();
    // eslint-disable-next-line
  }, []);

  const prepareTransactions = () => {
    return transactions.map((transaction) => <Transaction {...transaction} />);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Transactions Page</h1>
      {prepareTransactions()}
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
