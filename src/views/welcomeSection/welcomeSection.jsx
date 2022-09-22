import {StyledWelcomeSection} from './welcomeSectionStyle'
import image2 from '../../assets/Photos/surveyorWorksDesc.jpg'
import BackgroundSlider from 'react-background-slider'


import image1 from '../../assets/Photos/valeria-fursa-zSrksQgp4W0-unsplash.jpg'


export const WelcomeSection = () => {
    return(
        <StyledWelcomeSection>
            <BackgroundSlider images={[]} duration={10} transition={2}/>


            
        </StyledWelcomeSection>
    )
}