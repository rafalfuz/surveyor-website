import styled, {css} from 'styled-components'
import stadium from '../../assets/Photos/stadium.jpg'

export const StyledAlbumCard = styled.div`
    position: relative;
    width: 25vw;
    height: 25vw;
    margin: 20px;
    overflow: hidden;
    @media screen and (max-width: 960px){
        width: 90%;
        height: 100%;
    }
`

export const StyledAlbumTitle = styled.p`
    padding: 10%;
    font-size: ${({theme})=>theme.fontSize.xl};
    font-weight: ${({theme})=>theme.fontWeight.bold};
    color: ${({theme})=>theme.black};
    text-transform: uppercase;
    position: absolute;
    z-index: 99;
    &:hover{
        cursor: pointer;
    }
`

export const StyledBackgroundPhoto = styled.div`
background-image: url(${stadium});
background-size: cover;
background-position: center;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
transition: .5s;
${props => props.albumCardHover && css`
    transform: scale(1.3);
    transition: .5s;
    cursor: pointer;
`}
`