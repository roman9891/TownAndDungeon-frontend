import React from 'react';
import {useContext} from 'react'
import {appContext} from './appContext'
import styled from 'styled-components'

export const User = props => {
    const {user, setUser} = useContext(appContext)
    
    return(
        <div>
            <div>
                {`Welcome, ${user.username}`}
            </div>
            <Button onClick={() => setUser(null)}>Logout</Button>
        </div>

    )
}

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