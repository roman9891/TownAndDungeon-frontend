import React from 'react'
import {useState, useEffect, useContext} from 'react'
import { User } from './User'
import styled from 'styled-components'
import { appContext } from './appContext'

export const TnD = () => {
    const {user} = useContext(appContext)
    const [nav, setNav] = useState(user.progress !== 1 ? `town` : `guide`);

    return(
        <Wrapper>
            <Nav>Nav
                <button onClick={() => setNav(`town`)}>Town</button>
                <button onClick={() => setNav(`dungeon`)}>Dungeon</button>
                <button onClick={() => setNav(`guide`)}>Guide</button>
                <User/>
            </Nav>
            {nav === `town` && <Body>Town</Body>}
            {nav === `dungeon` && <Body>Dungeon</Body>}
            {nav === `guide` && <Body>Guide</Body>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 10vh 90vh;
`

const Nav = styled.div`

`

const Body = styled.div`
    background-color: grey
`

