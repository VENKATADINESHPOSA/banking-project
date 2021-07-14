import loginDetails from "../mock/login";
import accounts from "../mock/accounts";
import transactions from "../mock/transactions";
import { createServer } from "miragejs";

const makeServer = () => {
  let server = createServer({
    routes() {
      this.post("/signin", (_, request) => {
        const details = JSON.parse(request.requestBody);
        const data = loginDetails.find(
          ({ userName, password }) =>
            details.userName === userName && details.password === password
        );
        return data;
      });

      this.post("/accounts", (_, request) => {
        const details = JSON.parse(request.requestBody);
        const data = accounts.find((account) => details.id === account.id);
        return data;
      });

      this.post("/transactions", (_, request) => {
        const {transactionIds, id} = JSON.parse(request.requestBody);
        const data = transactions[id].filter((transaction) => transactionIds.includes(transaction.id));
        return data;
      });
    },
  });
  return server;
};

export default makeServer;
