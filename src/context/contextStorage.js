import { createContext } from "react";

const ContextStorage = createContext({
  id: "",
  setId: () => {},
  transactionIds: [],
  setTransactionIds: () => {},
});

export default ContextStorage;
