import React, { Component } from 'react';
import Login from '../Components/Login'
import Signup from '../Components/Signup'

class LoginContainer extends Component {
    render() {
        return (
            <div id='login-container'>
                <Login appHandler={this.props.appHandler}/>
                {/* <Signup/> */}
            </div>
        );
    }
}

export default LoginContainer;
