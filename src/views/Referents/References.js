import { ReferenceItem } from "../../components/ReferencesItem/ReferenceItem";
import { StyledTitleOfSection } from "../../components/TitleOfSection/TitleOfSectionStyle";
import { referencesDatas } from "./referencesDatas";
import { StyledReferences, StyledContainer } from "./ReferencesStyle";

export const References = () => {
  return (
    <StyledReferences>
      <StyledTitleOfSection>referencje</StyledTitleOfSection>
      <StyledContainer>
        {referencesDatas.map((item) => (
          <ReferenceItem
            key={item.id}
            logoImg={item.logoImg}
            logoWidth={item.logoWidth}
            logoHeight={item.logoHeight}
            company={item.company}
            description={item.description}
            service={item.service}
            link={item.link}
          />
        ))}
      </StyledContainer>
    </StyledReferences>
  );
};
