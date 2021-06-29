import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import Frame from './Frame';
import UserStore from '../stores/UserStore';

class Dashboard extends React.Component {

    constructor(props){
        super(props);
        this.state={
          url1:'https://www.udayy.com/',
          url2:'https://www.udayy.com/'
        }
          }

          setInputValue(prop,val){
            val = val.trim();
            this.setState({
              [prop]:[val]
            })
          }

  async logout(){
    UserStore.isLoggedIn = false;
    UserStore.username = '';
    localStorage.setItem("username", undefined);
  }

  render(){
      return (
          <div>
        <div className="header">
               <span className='textColor'>Hi {UserStore.username}!</span>
               <InputField
                  type='text'
                  value = {this.state.url1 ? this.state.url1 : ''}
                  onChange = {(val) => this.setInputValue('url1',val)}    
                    placeholder='URL-1'
                />
                <InputField
                  type='text'
                    placeholder='URL-2'
                    value = {this.state.url2 ? this.state.url2 : ''}
                    onChange = {(val) => this.setInputValue('url2',val)} 
                />
                <SubmitButton 
                text={'Logout'}
                disabled={false}
                onClick={() => this.logout()}
                /> 
        </div>
        <div className="bodyClass">
        <Frame 
            src= {this.state.url1}
        />
         <Frame 
            src={this.state.url2}
        />
        </div>
        </div>

    );
  }
}

export default Dashboard;