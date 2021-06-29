import React from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import UserStore from "../stores/UserStore";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  setInputValue(prop, val) {
    val = val.trim();
    this.setState({
      [prop]: [val],
    });
  }

  resetForm() {
    this.setState({
      username: "",
      password: "",
    });
  }

  async login() {
    if (!this.state.password || !this.state.username) {
      alert("Enter credentials!!");
      return;
    }
    if (this.state.password == "test" && this.state.username == "test") {
      localStorage.setItem("username", "test");
      UserStore.isLoggedIn = true;
      UserStore.username = "test";
    } else {
      this.resetForm();
      alert("Invalid credentials!!");
    }
  }

  render() {
    return (
      <div className="login">
        Sign in
        <InputField
          type="text"
          placeholder="Username"
          value={this.state.username ? this.state.username : ""}
          onChange={(val) => this.setInputValue("username", val)}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={this.state.password ? this.state.password : ""}
          onChange={(val) => this.setInputValue("password", val)}
        />
        <SubmitButton text={"Login"} onClick={() => this.login()} />
      </div>
    );
  }
}

export default Login;
