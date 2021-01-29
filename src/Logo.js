import React from 'react'
import styled from 'styled-components'

export const Logo = () => {

    return(
        <Wrapper>
            <div>Town&Dungeon</div>
            <Image src="https://image.flaticon.com/icons/png/512/2790/2790344.png" alt="dungeon"/>
        </Wrapper>
    )
}

const Image = styled.img`
    height: 9vh;
`

const Wrapper = styled.div`
    border: 1px solid black;
    height: max-content;
    text-align: center;
    padding: 5px;
    background: beige;
    div{
        font-size: 1.2vw;
    }
`