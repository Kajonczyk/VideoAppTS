// @ts-ignore
import styled from "styled-components";
import { Theme } from "../../../Utils/theme";

export const StyledWrapper = styled.div`
  text-align: center;
`;
export const StyledInput = styled.input`
  width: 75%;
  height: 45px;
  padding: 10px 5px;
  border: 2px solid ${({ theme }: { theme: Theme }) => theme.colorSecondary};
  border-radius: 50px;
`;

export const StyledButton = styled.button`
  height: 45px;
  width: 100px;
  padding: 10px 5px;
  border-radius: 50px;
  display: block;
  background: none;
  margin: 30px auto;
  border: 2px solid ${({ theme }: { theme: Theme }) => theme.colorSecondary};
  color: ${({ theme }: { theme: Theme }) => theme.colorSecondary};
`;
