import { call, put } from "redux-saga/effects"
import { getFromStorage, isInStorage } from "../../lib/storage"

const hasAccessTokenFromStorage = isInStorage("ACCESS_TOKEN")
const getAccessTokenFromStorage = getFromStorage("ACCESS_TOKEN")

const getAccessToken = async (username, password) => {
  const inStorage = await hasAccessTokenFromStorage()
  if (inStorage) {
    const accessToken = await getAccessTokenFromStorage()
    return accessToken
  } else {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/auth`)
    const { accessToken } = await response.json()

    return accessToken
  }
}

export function* login({ payload: { username, password } }) {
  try {
    const accessToken = yield call(getAccessToken, username, password)
    yield put({ type: "LOGIN_SUCCESS", payload: { accessToken } })
  } catch (err) {
    console.log("== LOGIN_FAILED ==")
    console.error(err)
    yield put({ type: "LOGIN_FAILED", payload: { reason: err } })
  }
}
