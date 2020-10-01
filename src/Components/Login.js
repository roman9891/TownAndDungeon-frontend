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

    getUser = (progress) => {
        return {username: this.state.username, progress: progress}
    }

    clickHandler = (e) => {
        e.preventDefault()
        if (e.target.name === 'login') {
            this.props.appHandler(this.getUser(15))
        }
        if (e.target.name === 'create') {
            this.props.appHandler(this.getUser(1))
        }
    }

    render() {
        return (
            <div id='login'>
                <div id='logo'>{'Town & Dungeon'}</div>
                <form >
                    <label>Username</label>
                    <input name='username' onChange={this.changeHandler} value={this.state.username}></input>
                    <label>Password</label>
                    <input type='password' name='password' onChange={this.changeHandler} value={this.state.password}></input>
                    <br/>
                    <button onClick={this.clickHandler} name='login'>Login</button>
                    <button onClick={this.clickHandler} name='create'>Create Account</button>
                </form>
            </div>
        );
    }
}

export default Login;
