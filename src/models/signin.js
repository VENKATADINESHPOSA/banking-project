import send from "../api";

const initialState = {
  userName: "",
  password: "",
  id: "",
};

const reducers = {
  setField: (state, { id, value }) => ({
    ...state,
    [id]: value,
  }),
  resetField: () => ({ ...initialState }),
};

const effects = {
  verifyLoginDetails: async (e, store) => {
    const result = await send({
      url: "/signin",
      method: "post",
      body: store.signin,
    });
    return result;
  },
};

const signin = {
  state: initialState,
  reducers,
  effects,
};

export default signin;
