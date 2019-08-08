import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "./action-types"

const initialState = {
  loggedIn: false,
  accessToken: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return state
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        accessToken: action.payload.accessToken
      }
    case LOGIN_FAILED:
      return {
        ...state,
        loggedIn: false,
        accessToken: null
      }
    default:
      return state
  }
}
