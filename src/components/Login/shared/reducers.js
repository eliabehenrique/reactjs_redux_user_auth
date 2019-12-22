import { Types } from "./actions";

const INITIAL_STATE = {
  username: "",
  email: ""
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN:
      return (state = action.payload);
    default:
      return INITIAL_STATE;
  }
}
