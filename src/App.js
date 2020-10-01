import React, { Component } from 'react';
import './App.css';
import LoginContainer from './Containers/LoginContainer'
import TownAndDungeon from './Containers/TownAndDungeon'

class App extends Component {
  state = {
    login: true,
    user: {},
  }

  appHandler = (user) => {
    this.setState({
      login: false,
      user: user,
    }, () => console.log(this.state))
  }

  logHandler = () => {
    this.setState({login: true})
  }
  
  render() {
    return (
      <div id='app'>
        {this.state.login ? <LoginContainer appHandler={this.appHandler}/> : <TownAndDungeon user={this.state.user} logHandler={this.logHandler}/>} 
      </div>
    );
  }
}

export default App;
