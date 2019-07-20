import { LOGIN } from "./action-types"

export const login = ({ username, password }) => ({
  type: LOGIN,
  payload: {
    username,
    password
  }
})
