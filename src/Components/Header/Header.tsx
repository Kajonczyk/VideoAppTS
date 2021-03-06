import * as React from "react";
import { StyledHeader, StyledH1, StyledWrapper } from "./HeaderStyles";
import { ThemeButton } from "./ThemeButton";
import { MobileMenu } from "./MobileMenu/MobileMenu";

export interface ThemeButtonProps {
  changeTheme(): void;
}
export const Header: React.FC<ThemeButtonProps> = ({ changeTheme }) => {
  return (
    <StyledHeader>
      <StyledH1>VideoApp</StyledH1>
      <StyledWrapper>
        <ThemeButton changeTheme={changeTheme} />
        <MobileMenu />
      </StyledWrapper>
    </StyledHeader>
  );
};
