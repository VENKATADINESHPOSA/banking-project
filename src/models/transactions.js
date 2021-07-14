import send from "../api";

const initialState = {
  id: "",
  transactionIds: [],
  transactions: [],
};

const reducers = {
  setField: (state, { name, value }) => ({ ...state, [name]: value }),
};

const effects = {
  fetchTransactionDetails: async (e, store) => {
    const result = await send({
      url: "/transactions",
      method: "post",
      body: store.transactions,
    });
    return result;
  },
};

const transactions = {
  state: initialState,
  reducers,
  effects,
};

export default transactions;
