import * as React from "react";
import { StyledInput, StyledWrapper, StyledButton } from "./InputStyles";
import { getMovie } from "./getMovie";
export const Input: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledInput type="text" />
      <StyledButton onClick={() => getMovie("lSAz2ONC1rk")}>
        Add movie
      </StyledButton>
    </StyledWrapper>
  );
};
