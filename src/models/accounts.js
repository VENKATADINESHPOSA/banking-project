import send from "../api";

const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  accounts: [],
};

const reducers = {
  setData: (state, data) => ({ ...state, ...data }),
  resetData: () => ({ ...initialState }),
};

const effects = {
  fetchAccountDetails: async (e, store) => {
    const result = await send({
      url: "/accounts",
      method: "post",
      body: { id: sessionStorage.getItem("id") },
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
