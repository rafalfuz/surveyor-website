import styled from 'styled-components'
import stadium from '../../assets/Photos/stadium.jpg'

export const StyledAlbumCard = styled.div`
    position: relative;
    width: 25vw;
    height: 25vw;
    margin: 20px;
    overflow: hidden;
    
`

export const StyledAlbumTitle = styled.p`
    padding: 10%;
    font-size: ${({theme})=>theme.fontSize.xl};
    font-weight: ${({theme})=>theme.fontWeight.bold};
    color: ${({theme})=>theme.black};
    text-transform: uppercase;
    position: absolute;
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
&:hover{
    cursor: pointer;
    transform: scale(1.3);
    
}
`