import loginDetails from "../mock/login";
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
    },
  });
  return server;
};

export default makeServer;
