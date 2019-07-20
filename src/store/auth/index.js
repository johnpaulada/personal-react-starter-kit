import { LOGIN, LOGIN_SUCCESS } from "./action-types"

const initialState = {
  loggedIn: false,
  accessToken: ""
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
    default:
      return state
  }
}
