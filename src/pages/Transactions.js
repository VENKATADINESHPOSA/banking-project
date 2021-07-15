import { useEffect } from "react";
import { connect } from "react-redux";
import Transaction from "../components/organisms/Transaction/Transaction";
import Header from "../components/organisms/Header/Header";
import BreadCrumb from "../components/organisms/BreadCrumbs/BreadCrumbs";

const Transations = (props) => {
  const {
    transactions,
    setField,
    fetchTransactionDetails,
    firstName,
    lastName,
  } = props;

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
      <Header firstName={firstName} lastName={lastName} />
      <BreadCrumb link="transactions" />
      {prepareTransactions()}
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
