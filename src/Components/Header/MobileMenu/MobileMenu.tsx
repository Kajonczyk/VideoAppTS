import React, { useState } from "react";
import {
  StyledHamburgerWrapper,
  StyledLine,
  StyledMenuWrapper,
  StyledLink,
} from "./MobileMenuStyles";

export interface MobileMenuProps {}

export const MobileMenu: React.FC<MobileMenuProps> = () => {
  const [isToggled, setToggle] = useState(false);
  return (
    <>
      <StyledHamburgerWrapper onClick={() => setToggle(!isToggled)}>
        <StyledLine />
        <StyledLine />
        <StyledLine />
      </StyledHamburgerWrapper>

      {isToggled && (
        <StyledMenuWrapper>
          <StyledLink>Home</StyledLink>
          <StyledLink>Favourites</StyledLink>
        </StyledMenuWrapper>
      )}
    </>
  );
};
