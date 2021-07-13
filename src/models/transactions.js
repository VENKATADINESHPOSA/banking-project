import send from "../api";

const initialState = {
  transactions: [],
};

const reducers = {
  settransactions: (state, value) => ({ ...state, transactions: value }),
};

const effects = {
  fetchTransactionDetails: async (e, store) => {
    const result = await send({
      url: "/transactions",
      method: "post",
      body: store.accounts.accounts,
    });
    return result;
  },
};

const accounts = {
  state: initialState,
  reducers,
  effects,
};

export default accounts;
