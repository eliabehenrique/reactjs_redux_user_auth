import React from "react";
import axios from "axios";
import "../../App.css";
import { connect } from "react-redux";

const onSubmit = (e) => {
  
  alert("Xesq");

  e.preventDefault();
};

const SignUp = ({ newUser, dispatch }) => (
  <div className="App">
    <header className="App-header">
      <form name="loginForm" onSubmit={onSubmit}>
        {/* <img src={} className="App-logo" alt="logo" /> */}
        <input type="text" placeholder="username" value={newUser.username} />
        <br />
        <input type="text" placeholder="email" value={newUser.email} />
        <br />
        <input type="text" placeholder="password" value={newUser.password} />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </header>
  </div>
);

export default connect(state => ({ newUser: state.newUser }))(SignUp);

/* Aprendizado: nossa funcionalidade de cadastro não precisa ter redux, pois no nosso contexto,
                não será utilizado nada para servir outros components. Funciona normal, mas é desnecessário. 
                TODO: refatorar para o modelo normal.
*/

// class SignUp extends Component {
//   onSubmit = e => {
//     e.preventDefault();

//     const data = {

//     };

//     this.props.state.addUser(this.state);

//     this.setState({ email: "", password: "" });
//   };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <form name="loginForm" onSubmit={this.onSubmit}>
//             {/* <img src={} className="App-logo" alt="logo" /> */}
//             {/* <input type="text" placeholder="username" value={this.props.state.username} /> */}
//             <input type="text" placeholder="email" value={this.props.state.email} />
//             <input type="text" placeholder="password" value={this.state.password} />
//             <button type="submit">Cadastrar</button>
//           </form>
//         </header>
//       </div>
//     );
//   }
// }
