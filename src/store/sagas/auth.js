export function* login(username, password) {
  yield { type: "LOGIN_SUCCESS", payload: { accessToken: "ACCESS_TOKEN" } }
}
