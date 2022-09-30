import {StyledRealizations} from './RealizationsStyle'
import {AlbumCard} from '../../components/AlbumCard/AlbumCard'
import { StyledSectionTitle } from '../../components/TitleOfSection/TitleOfSection'

export const Realizations = () => {
    return(
        <StyledRealizations>
            <StyledSectionTitle>Reazlizacje</StyledSectionTitle>
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
        </StyledRealizations>
    )
}