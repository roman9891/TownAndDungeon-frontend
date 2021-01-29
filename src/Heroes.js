import React from 'react'
import {useContext} from 'react'
import styled from 'styled-components'
import { appContext } from './appContext'
import {HeroCard} from './HeroCard'

export const Heroes = () => {
        const {heroes} = useContext(appContext)
        const renderHeroCard = heroesArray => heroesArray.map(hero => <HeroCard key={hero.id} hero={hero}/>)

    return(
        <Wrapper>
            {renderHeroCard(heroes)}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    justify-items: center;
    align-items: center;
`