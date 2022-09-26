import {StyledButton} from './ButtonStyle'

export const Button = ({width, height, padding, backgroundColor, color, hoverColor, children}) => {
    return(
        <StyledButton 
        width={width}
        height={height}
        padding={padding}
        backgroundColor={backgroundColor}
        color={color}
        hoverColor={hoverColor}
        >{children}</StyledButton>
    )
}