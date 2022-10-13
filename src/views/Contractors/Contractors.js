import { ContractorItem } from "../../components/ContractorsItem/ContractorItem";
import { StyledSectionTitle } from "../../components/TitleOfSection/TitleOfSection";
import { constractrorsDatas } from "./ConstractorsDatas";
import {
  StyledContractors,
  StyledContainer,
  StyledItem,
} from "./ContractorsStyle";

export const Contractors = () => {
  return (
    <StyledContractors name="contractorsSection">
      <StyledSectionTitle>Kontrahenci</StyledSectionTitle>
      <StyledContainer>
        {constractrorsDatas.map((item) => (
          <StyledItem key={item.id}>
            <ContractorItem href={item.websiteLink} logoImg={item.logoImg} />
          </StyledItem>
        ))}
      </StyledContainer>
    </StyledContractors>
  );
};
