import { Types } from "./actions";

const INITIAL_STATE = {
  newUser: {
    username: "",
    email: "",
    password: ""
  }
};

export default function signup(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.NEWUSER:
      return (state.newUser = action.payload);
    default:
      return state;
  }
}
