import styled from 'styled-components'

export const StyledOfferInfo= styled.div`
    width: 100%;
    height: 120px;
    position: absolute;
    top: ${({activeCard})=>activeCard ? '200px' : "255px"}; 
    left: 0;
    display: flex;
    justify-content: flex-start;
    align-items:center;
    flex-wrap: wrap;
    padding: 5px;
    border-top: 3px solid black;
    transition: all .8s;
`