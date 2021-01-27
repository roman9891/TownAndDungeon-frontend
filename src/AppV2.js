import React from 'react'
import {useState, useEffect, useContext} from 'react'
import {Provider} from './appContext'
import {Login} from './LoginV2'
import {TnD} from './TnD'

const defaultUser = {
    id: 0,
    username: `Test`,
    progress: 1
}

export const App = () => {
    const [user, setUser] = useState(defaultUser)

    return(
        <Provider value={{
            setUser: setUser,
            user: user
        }}>
            {!user ? <Login/> : <TnD/>}
        </Provider>
    )
}