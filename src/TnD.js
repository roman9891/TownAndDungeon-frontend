import React from 'react'
import {useState, useContext} from 'react'
import { User } from './User'
import styled from 'styled-components'
import { appContext } from './appContext'
import { Heroes } from './Heroes'
import {Logo} from './Logo'

export const TnD = () => {
    const {user} = useContext(appContext)
    const [nav, setNav] = useState(user.progress === 1 ? `town` : `guide`)

    return(
        <Wrapper>
            <Nav>
                <Logo/>
                <button onClick={() => setNav(`town`)}>Town</button>
                <button onClick={() => setNav(`dungeon`)}>Dungeon</button>
                <button onClick={() => setNav(`guide`)}>Guide</button>
                <User/>
            </Nav>
            {nav === `town` && <Body><Heroes/></Body>}
            {nav === `dungeon` && <Body>Dungeon</Body>}
            {nav === `guide` && <Body>Guide</Body>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: max-content 90vh;
`

const Nav = styled.div`
    display: grid;
    grid-template-columns: max-content auto auto auto max-content;
    justify-items: center;
    align-items: center;
    background: burlywood
`

const Body = styled.div`
    background-color: grey
`

