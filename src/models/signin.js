import send from "../api";

const initialState = {
  userName: "",
  password: "",
};

const reducers = {
  setField: (state, { id, value }) => ({
    ...state,
    [id]: value,
  }),
};

const effects = {
  verifyLoginDetails: async (e, store) => {
    const result = await send({
      url: "/signin",
      method: "post",
      body: store.login,
    });
    return result;
  },
};

const login = {
  state: initialState,
  reducers,
  effects,
};

export default login;
