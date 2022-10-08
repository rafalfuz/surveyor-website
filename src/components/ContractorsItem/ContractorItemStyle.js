import styled from 'styled-components'

export const StyledContractorItem = styled.a`
    width: 100%;
    height: 100%;
    background-image: url(${({logoImg})=>logoImg});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
`