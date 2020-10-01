//@ts-ignore
import styled from "styled-components";
import { Theme } from "../../../Utils/theme";
const flexProperties = () => `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledWrapper = styled.div`
  position: relative;
`;
export const StyledHamburgerWrapper = styled.div`
  height: 40px;
  width: 30px;
  ${flexProperties}
  padding-top: 5px;
`;
export const StyledLine = styled.div`
  width: 25px;
  height: 2px;
  margin-bottom: 5px;
  background-color: ${({ theme }: { theme: Theme }) => theme.menuColor};
`;
export const StyledMenuWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }: { theme: Theme }) => theme.colorPrimary};
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translate(-50%, 0%);
  padding: 10px 0px;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }: { theme: Theme }) => theme.menuColor};
  font-size: ${({ theme }: { theme: Theme }) => theme.font.size.s};
  padding: 5px;
  ${flexProperties}
`;
