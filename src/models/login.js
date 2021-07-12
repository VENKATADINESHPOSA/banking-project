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
  verifyLoginDetails: () => {
    console.log("11111111111111111111111");
  },
};

const login = {
  state: initialState,
  reducers,
  effects,
};

export default login;
