import { StyledOfferInfo } from "./OfferInfoStyle.js";
import { Icon } from "./Icon";
import { OfferTitle } from "./OfferTitle";
import { OfferDescription } from "./OfferDescription";

export const OfferInfo = ({
  activeCard,
  icon,
  altText,
  title,
  description,
}) => {
  return (
    <StyledOfferInfo activeCard={activeCard}>
      <Icon icon={icon} altText={altText} />
      <OfferTitle title={title} />
      <OfferDescription description={description} />
    </StyledOfferInfo>
  );
};
