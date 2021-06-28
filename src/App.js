import React from 'react';
import UserStore from './stores/UserStore';
import Login from './components/Login';
import { observer } from 'mobx-react';
import SubmitButton from './components/SubmitButton';
import './App.css';

class App extends React.Component {

  async componentDidMount(){
    try{
      let res = await fetch('/isLoggedIn',{
        method: 'post',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let result = await res.json();
      if(result && result.success){
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }else{
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }catch(e){
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  async logout(){
    try{
      let res = await fetch('/logout',{
        method: 'post',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let result = await res.json();
      if(result && result.success){
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      }
    }catch(e){
    }
  }

  render(){
    if(UserStore.loading){
      return (
        <div className="app">
           <div className="container">
          Loading...
        </div></div>
      );
    }else{
      if(UserStore.isLoggedIn){
        <div className="app">
          <div className="container">
              <SubmitButton 
                text={'Logout'}
                disabled={false}
                onClick={() => this.logout()}
              /> 
          </div>
        </div>
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
}

export default observer(App);