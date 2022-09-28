import { OfferInfo } from "./OfferInfo"

import {StyledOfferCard} from './OfferCardStyle'
import { useState } from "react"

export const OfferCard = () => {

    const [activeCard, setActiveCard] = useState(false)

    const handleMouseEnter = e => {
        setActiveCard(true)
    }

    const handleMouseLeave = e => {
        setActiveCard(false)
    }

    return(
        <StyledOfferCard onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={()=>setActiveCard(!activeCard)} activeCard={activeCard}
        ><p>{activeCard.toString()}</p>
            <OfferInfo activeCard={activeCard} title='Geotechnika'/>
        </StyledOfferCard>
    )
}