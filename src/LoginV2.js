import React, {useContext, useState} from 'react'
import { appContext } from './appContext'
import styled from 'styled-components'

export const Login = props => {
    const {setUser} = useContext(appContext)
    const [error, setError] = useState(``);
    const [username, setUsername] = useState(``)
    const [password, setPassword] = useState(``)

    const loginHandler = e => {
        postAuth(username, password)
    }

    const changeUsername = e => {
        const newUsername = e.target.value
        setUsername(newUsername)
    }

    const changePassword = e => {
        const newPassword = e.target.value
        setPassword(newPassword)
    }

    const createUser = e => {
        postUser(username, password)
    }

    const postUser = (username, password) => {
        fetch(`http://localhost:3000/api/v1/users`, {
            method: `POST`,
            headers: {
                "Content-Type": `application/json`,
                Accept: `application/json`
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        })
        .then(r => r.json())
        .then(r => {
            if (r.error) {
                setError(r.error)
            } else {
                console.log(r)
                let user = {...r.user}
                setUser(user)
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    }

    const postAuth = (username, password) => {
        fetch(`http://localhost:3000/api/v1/login`, {
            method: `POST`,
            headers: {
                "Content-Type": `application/json`,
                Accept: `application/json`
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        })
        .then(r => r.json())
        .then(r => {
            if (r.error) {
                setError(r.error)
            } else {
                console.log(r)
                setUser(r.user)
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    }

    return(
            <Form>
                <label>Username:</label>
                <input onChange={changeUsername} value={username}></input>
                <label>Password:</label>
                <input type="password" onChange={changePassword} value={password}></input>
                <Button primary name="login" onClick={loginHandler}>Login</Button>
                <Button primary onClick={createUser}>Create</Button>
                {error && <p>{error}</p>}
            </Form>
    )
}

const Form = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 3px;
    box-sizing: content-box;
    padding: .4em;
    font-size: .8em;
    width: 10%;
    height: 10%;
    min-width: 120px;
`
const Button = styled.button`
    background: ${props => props.primary ? "#299637" : "white"};
    color: ${props => props.primary ? "white" : "#299637"};
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid #299637;
    border-radius: 3px;
    margin: .1em;
    cursor: pointer;
`