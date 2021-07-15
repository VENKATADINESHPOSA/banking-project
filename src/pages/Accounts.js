import { useEffect } from "react";
import { connect } from "react-redux";
import Account from "../components/organisms/Account/Account";
import Header from "../components/organisms/Header/Header";

const Accounts = (props) => {
  const { setData, accounts, fetchAccountDetails, setField, id } = props;

  useEffect(() => {
    const details = async () => {
      const result = await fetchAccountDetails();
      setData(result);
    };
    if (accounts.length === 0) {
      details();
    }
    // eslint-disable-next-line
  }, []);

  const prepareAccounts = () => {
    return accounts.map((acc) => (
      <Account key={acc.accountId} {...acc} setField={setField} id={id} />
    ));
  };

  return (
    <>
      <Header />
      {prepareAccounts()}
    </>
  );
};

const mapStateToProps = ({
  signin: { id },
  accounts: { firstName, lastName, accounts },
}) => ({
  id,
  firstName,
  lastName,
  accounts,
});

const mapDispatchToProps = ({
  accounts: { setData, fetchAccountDetails },
  transactions: { setField },
}) => ({
  setData,
  fetchAccountDetails,
  setField,
});

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
