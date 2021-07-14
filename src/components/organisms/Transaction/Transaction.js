import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: 300,
    margin: 30,
    float: "left",
    backgroundColor: "#f1cb68",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Transaction = (props) => {
  const classes = useStyles();
  const { id, type, cardType, cardDetails, amount, date } = props;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          TransactionDate: {date}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          TransactionId: {id}
        </Typography>
        <Typography variant="h5" component="h2">
          Amount: {amount}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Status: {type}
        </Typography>
        <Typography variant="body2" component="p">
          cardDetails: {cardDetails}
        </Typography>
        <Typography variant="body2" component="p">
          CardType: {cardType}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Transaction;
