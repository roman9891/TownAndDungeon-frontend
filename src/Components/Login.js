import React, { Component } from 'react';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    
    changeHandler = (e) => {   
        if (e.target.name === 'username') {
            this.setState({username: e.target.value})
        }
        if (e.target.name === 'password') {
            this.setState({password: e.target.value})
        }
    }

    submitHandler = (e) => {
        e.preventDefault()
        if (this.getUser()) {this.props.appHandler(this.getUser())}    
    }

    getUser = () => {
        return {username: this.state.username, progress: 3}
    }

    render() {
        return (
            <div id='login'>
                <form onSubmit={this.submitHandler}>
                    <label>Username</label>
                    <input name='username' onChange={this.changeHandler} value={this.state.username}></input>
                    <label>Password</label>
                    <input type='password' name='password' onChange={this.changeHandler} value={this.state.password}></input>
                    <button type='submit'>Login</button>
                    <button type='submit'>Create Account</button>
                </form>
            </div>
        );
    }
}

export default Login;
