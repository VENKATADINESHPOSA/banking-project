import send from "../api";

const initialState = {
  id: "",
  transactionIds: [],
  transactions: [],
};

const reducers = {
  setField: (state, { name, value }) => ({ ...state, [name]: value }),
  resetField: () => ({ ...initialState }),
};

const effects = {
  fetchTransactionDetails: async (transactionIds, store) => {
    const result = await send({
      url: "/transactions",
      method: "post",
      body: transactionIds,
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
