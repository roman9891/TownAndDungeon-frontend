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
        // if (e.target.login) {
        //     console.log('login')
        // }
        // if (e.target.create) {
        //     console.log('create')
        // }
        // console.log(e.target.value)
        // if (this.getUser()) {this.props.appHandler(this.getUser())}    
    }

    clickHandler = (e) => {
        // console.log(e.target.value)
        if (e.target.name === 'login') {
            this.getUser()
        }
        if (e.target.name === 'create') {
            this.postUser()
        }
    }

    getUser = () => {
        fetch(`http://localhost:3000/api/v1/users`, {
            method: `GET`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({user: {...this.state}})
        })
        .then(r => r.json())
        .then(user => this.props.appHandler(user))
        // return {username: this.state.username, progress: 10}
    }

    postUser = () => {
        fetch(`http://localhost:3000/api/v1/users`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({user: {...this.state, progress: 1}})
        })
        .then(r => r.json())
        .then(user => this.props.appHandler(user))
        // return {username: this.state.username, progress: 10}
    }

    render() {
        return (
            <div id='login'>
                <form onSubmit={this.submitHandler}>
                    <label>Username</label>
                    <input name='username' onChange={this.changeHandler} value={this.state.username}></input>
                    <label>Password</label>
                    <input type='password' name='password' onChange={this.changeHandler} value={this.state.password}></input>
                    <br/>
                    <button onClick={this.clickHandler} name='login'>Login</button>
                    <button onClick={this.clickHandler} name='create'>Create Account</button>
                    {/* <input type='submit' name='login' value='Login'/> */}
                    {/* <input type='submit' name='create' value='Create'/> */}
                </form>
            </div>
        );
    }
}

export default Login;
