import { useEffect } from "react";
import { connect } from "react-redux";
import Account from "../components/organisms/Account/Account";

const Accounts = (props) => {
  const { firstName, lastName, setData, accounts, fetchAccountDetails } = props;

  useEffect(() => {
    const details = async () => {
      const result = await fetchAccountDetails();
      setData(result);
    };
    details();
    // eslint-disable-next-line
  }, []);

  const prepareAccounts = () => {
    return accounts.map((acc, i) => <Account {...acc} />);
  };

  return [
    <div>
      <p>FirstName: {firstName}</p>
      <p>LastName: {lastName}</p>
    </div>,
    prepareAccounts(),
  ];
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
}) => ({
  setData,
  fetchAccountDetails,
});

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
