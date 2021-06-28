import React from 'react';
import UserStore from './stores/UserStore';
import Login from './components/Login';
import { observer } from 'mobx-react';
import SubmitButton from './components/SubmitButton';
import './App.css';

class App extends React.Component {

  async componentDidMount(){
      if(localStorage.getItem("username") == "test"){
        UserStore.isLoggedIn = true;
        UserStore.username = "test";
      }else{
        UserStore.isLoggedIn = false;
      }
  }

  async logout(){
    UserStore.isLoggedIn = false;
    UserStore.username = '';
    localStorage.setItem("username", undefined);
  }

  render(){
      if(UserStore.isLoggedIn){
        return (
        <div className="app">
          <div className="container">
              <SubmitButton 
                text={'Logout'}
                disabled={false}
                onClick={() => this.logout()}
              /> 
          </div>
        </div>
        )
      }
      return (
        <div className="app">
          <div className="container">
              <Login/>
          </div>
        </div>
      );
    }
}

export default observer(App);