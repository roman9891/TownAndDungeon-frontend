import React from 'react'
import {useState} from 'react'
import {Provider} from './appContext'
import {Login} from './LoginV2'
import {TnD} from './TnD'
import {classes} from './Data/CharacterData'

const defaultUser = {
    id: 0,
    username: `Test`,
    progress: 1
}

export const App = () => {
    const [user, setUser] = useState(defaultUser)
    const [heroes, setHeroes] = useState(classes)


    return(
        <Provider value={{
            setUser: setUser,
            user: user,
            setHeroes: setHeroes,
            heroes: heroes
        }}>
            {!user ? <Login/> : <TnD/>}
        </Provider>
    )
}