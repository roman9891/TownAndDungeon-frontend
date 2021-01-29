import React from 'react'
import styled from 'styled-components'

export const HeroCard = props => {
    

    return(
        <Wrapper>
            <div>{props.hero.class}</div>
            <div><img src={props.hero.image} alt=''/></div>      
            <div style={{padding: "3px", fontSize: "1.5vw"}}>{props.hero.roles.join(' | ')}</div>
            <div style={{padding: "3px", fontSize: "1.1vw"}}>{props.hero.info}</div>
            {/* {this.renderSkills()} */}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border: 1px solid black;
    border-radius: 3px;
    background: white;
    display: grid;
    grid-template-rows: 19px max-content max-content 50px;
    width: 90%;
    /* box-shadow: 2px 2px 2px  2px black; */
    div {
        border-top: 1px solid black;
        text-align: center;
        font-size: .8em;
        max-width: 100%;
        box-sizing: border-box;
        overflow-y: scroll;
        /* height: max-content; */
    }
    img {
        /* border: 1px solid black; */
        width: 100%;
        box-sizing: border-box;
    }
`