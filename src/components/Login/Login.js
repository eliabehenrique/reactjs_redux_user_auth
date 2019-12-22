import React from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux"; //'de' 'para' de nossas actions
import * as LoginActions from "./shared/actions";

const password = "";

const onLoginClick = (login, userLogin) => {
  if (!login) return;
  //API.POSTLOGIN
  console.log(login);

  login(userLogin);
};

const Login = ({ email, username, login }) => (
  <div className="App">
    <header className="App-header">
      <p>Email: {email}</p>
      <form name="loginForm" onSubmit={onLoginClick(login, email)}>
        <input type="text" placeholder="email" value={email} />
        <br />
        <input type="password" placeholder="password" value={password} />
        <br />
        <button type="submit">Entrar</button>
      </form>
    </header>
  </div>
);

const mapStateToProps = state => ({
  email: state.login.email,
  username: state.login.username
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
