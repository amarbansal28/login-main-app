import React from "react";
import UserStore from "./stores/UserStore";
import Login from "./components/Login";
import { observer } from "mobx-react";
import Dashboard from "./components/Dashboard";
import "./App.css";

class App extends React.Component {
  async componentDidMount() {
    if (localStorage.getItem("username") == "test") {
      UserStore.isLoggedIn = true;
      UserStore.username = "test";
    } else {
      UserStore.isLoggedIn = false;
    }
  }

  render() {
    if (UserStore.isLoggedIn) {
      return (
        <div>
          <div className="containerDashboard">
            <Dashboard />
          </div>
        </div>
      );
    }
    return (
      <div className="app">
        <div className="container">
          <Login />
        </div>
      </div>
    );
  }
}

export default observer(App);
