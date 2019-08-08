import { call, put } from "redux-saga/effects"

export function* login({ payload: { username, password } }) {
  try {
    const response = yield call(
      fetch,
      `${process.env.REACT_APP_SERVER_URL}/auth`
    )
    const { accessToken } = yield call([response, "json"])
    yield put({ type: "LOGIN_SUCCESS", payload: { accessToken } })
  } catch (err) {
    console.log("== LOGIN_FAILED ==")
    console.error(err)
    yield put({ type: "LOGIN_FAILED", payload: { reason: err } })
  }
}
