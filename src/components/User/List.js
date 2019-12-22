import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as userActions from "./shared/actions";
import { connect } from "react-redux";

class UserList extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  state = {
    newUser: ""
  };

  getNewUser = () => {
    this.props.addUser(this.state.newUser);

    this.setState({ newUser: "" });
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(element => (
            <li key={element.id}>{element.user}</li>
          ))}
        </ul>

        {/* <input
          type="text"
          value={this.state.newUser}
          onChange={e => this.setState({ newUser: e.target.value })}
        />
        <button onClick={this.addNewUser}>Add</button> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(userActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
