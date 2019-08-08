import { all, takeEvery } from "redux-saga/effects"
import { login } from "./auth"

function* loginWatcher() {
  yield takeEvery("LOGIN", login)
}

export default function* rootSaga() {
  yield all([loginWatcher()])
}
