import { StyledFront } from "./FrontOfHomeStyle";
import {Logo} from './Logo'
import {Button} from '../../../components/Button/Button'
import { theme } from "../../../theme/mainTheme";

export const FrontOfHome = () => {
  return (
  <StyledFront>
    <Logo />
    <Button 
    width='80%' 
    height='10%' 
    padding='20px' 
    color={theme.quaternary}
    hoverColor={theme.primary}>Umów spotkanie
    </Button>
  </StyledFront>
  )
};
