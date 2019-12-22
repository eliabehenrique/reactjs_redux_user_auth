const initialState = {
    user: {

    },
    users: []
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      return [
        ...state.users,
        {
          id: Math.random(),
          user: action.payload
        }
      ];
    default:
      return state;
  }
}
