import {StyledOfferInfo} from './OfferInfoStyle.js'
import {Icon} from './Icon'
import { OfferTitle } from './OfferTitle'
import { OfferDescription } from './OfferDescription'


export const OfferInfo = ({activeCard, title, description}) => {
    return(
        <StyledOfferInfo activeCard={activeCard}>
            <Icon />
            <OfferTitle title={title}/>
            {description ?? <OfferDescription description='Our Geotechnical Engineering department is staffed and equipped to provide our expertise to assist owners, developers, contractors, and planners with understanding specific conditions affecting their project.'/>}
        </StyledOfferInfo>
    )
}