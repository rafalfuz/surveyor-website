import styled from 'styled-components'
import NavBckGrdPct from "../../assets/Photos/archPlan2.png"

export const StyledNavbar = styled.nav`
    position: fixed;
    width: 100%;
    height: 80px;
    background-image: url(${NavBckGrdPct});
    background-size: cover;
    background-color: royalblue;
    background-blend-mode: screen;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledNavbarContainer = styled.div`
    width: 80%;
    height: 80%;
    border-bottom: 2px solid white;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`
export const StyledLogo = styled.div`
    flex-basis: 40%;
    font-size: 32px;
    font-weight: 700;
    color: white;
    text-shadow: 1px 1px black;
`
export const StyledLinkContainer = styled.ul`
    flex-basis: 60%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    list-style-type: none;
    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background-color: royalblue;
        width: 100%;
        height: calc(100vh - 80px);
        position: fixed;
        top: 80px;
        left: ${({mobile})=>mobile ? 0 : '-100%'};
        transition: all .5s ease;
        overflow: hidden;
    }
   
`

export const StyledLink = styled.li`
    font-size: 22px;   
    font-weight: 700;
    color: white;
    text-shadow: 1px 1px black;
    transition: all .5s;
    margin: 10px;
    &:hover{
        cursor: pointer;
        text-shadow: 2px 2px black;
        
    }
`