import { LOGIN } from "./action-types"

const initialState = {
  accessToken: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        accessToken: ""
      }
    default:
      return state
  }
}
