import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../components/common/Button"
import CenteredFullContainer from "../components/common/CenteredFullContainer"
import InputText from "../components/common/InputText"
import { login } from "../store/auth/actions"

const Login = props => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const loggedIn = useSelector(state => state.auth.loggedIn)
  const setUsernameInput = e => setUsername(e.target.value)
  const setPasswordInput = e => setPassword(e.target.value)
  const dispatchLogin = () => dispatch(login({ username, password }))

  console.log(loggedIn)

  return (
    <CenteredFullContainer>
      <h1>Login</h1>
      <InputText
        type="text"
        placeholder="username"
        onChange={setUsernameInput}
        value={username}
      />
      <InputText
        type="password"
        placeholder="password"
        onChange={setPasswordInput}
        value={password}
      />
      <Button onClick={dispatchLogin}>Submit</Button>
    </CenteredFullContainer>
  )
}

export default Login
