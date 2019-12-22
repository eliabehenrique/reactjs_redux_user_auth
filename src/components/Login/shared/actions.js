export const Types = {
  LOGIN: "USER_LOGIN"
};

export function Login(payload) {
  return {
    type: Types.LOGIN,
    payload
  };
}
