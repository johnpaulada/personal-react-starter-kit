import { LOGIN } from "./action-types"

const initialState = {
  loggedIn: false,
  accessToken: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true,
        accessToken: "AT"
      }
    default:
      return state
  }
}
