const initialState = {
  firstName: "",
  lastName: "",
  accountId: "",
  type: "",
  number: "",
  date: "",
  balance: "",
};

const reducers = {
  setField: (state, { name, value }) => ({
    ...state,
    [name]: value,
  }),
};

const newAccount = {
  state: initialState,
  reducers,
};

export default newAccount;
