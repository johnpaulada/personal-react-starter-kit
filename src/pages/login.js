import React, { useState } from "react"
import { connect } from "react-redux"
import Button from "../components/common/Button"
import CenteredFullContainer from "../components/common/CenteredFullContainer"
import InputText from "../components/common/InputText"
import { login } from "../store/auth/actions"

const Login = ({ login, loggedIn }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const setUsernameInput = e => setUsername(e.target.value)
  const setPasswordInput = e => setPassword(e.target.value)
  const submit = () => login({ username, password })

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
      <Button onClick={submit}>Submit</Button>
    </CenteredFullContainer>
  )
}

const mapStateToProps = ({ auth: { loggedIn } }) => ({ loggedIn })

const mapDispatchToProps = dispatch => ({
  login: credentials => dispatch(login(credentials))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
