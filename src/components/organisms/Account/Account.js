import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    float: "left",
    margin: 30,
    width: 300,
    backgroundColor: "#aaaac9",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Account = (props) => {
  const { accountId, number, type, balance, setField, transactions, id } =
    props;
  const classes = useStyles();
  let history = useHistory();

  const handleTransactionsButton = () => {
    setField({ name: "transactionIds", value: transactions });
    setField({ name: "id", value: id });
    history.push("/transactions");
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Account Number : {number}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          AccountId : {accountId}
        </Typography>
        <Typography variant="body2" component="p">
          Account Type : {type}
          <br />
          Account Balance: {balance}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="inherit"
          variant="outlined"
          onClick={() => handleTransactionsButton()}
        >
          See Transactions
        </Button>
      </CardActions>
    </Card>
  );
};

export default Account;
