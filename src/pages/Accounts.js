import { useEffect, useContext } from "react";
import { connect } from "react-redux";
import Account from "../components/organisms/Account/Account";
import BreadCrumb from "../components/organisms/BreadCrumbs/BreadCrumbs";
import Header from "../components/organisms/Header/Header";
import ContextStorage from "../context/contextStorage";
import PropTypes from "prop-types";

const Accounts = (props) => {
  const {
    setData,
    accounts,
    fetchAccountDetails,
    setField,
    firstName,
    lastName,
  } = props;

  const { id } = useContext(ContextStorage);

  useEffect(() => {
    const details = async () => {
      const result = await fetchAccountDetails(id);
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
      <Header firstName={firstName} lastName={lastName} />
      <BreadCrumb link="" />
      {prepareAccounts()}
    </>
  );
};

Accounts.propTypes = {
  setData: PropTypes.func,
  accounts: PropTypes.array,
  fetchAccountDetails: PropTypes.func,
  setField: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

const mapStateToProps = ({ accounts: { firstName, lastName, accounts } }) => ({
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
