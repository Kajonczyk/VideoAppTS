import * as React from "react";
// @ts-ignore
import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 20px;
  width: 40px;
  border-radius: 30px;
  background: white;
  display: flex;
  align-items: center;
`;

const SyledDot = styled.button`
  height: 16px;
  margin: 3px;
  width: 16px;
  border-radius: 50%;
  background: black;
  border: none;
`;

export interface ThemeButtonProps {
  changeTheme(): void;
}

export const ThemeButton: React.FC<ThemeButtonProps> = ({ changeTheme }) => {
  return (
    <StyledWrapper onClick={changeTheme}>
      <SyledDot />
    </StyledWrapper>
  );
};
