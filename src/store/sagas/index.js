import { takeEvery } from "redux-saga/effects"
import { login } from "./auth"

export default function* rootSaga() {
  yield takeEvery("LOGIN", login)
}
