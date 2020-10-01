//@ts-ignore
import styled from "styled-components";
import { Theme } from "../../Utils/theme";

export const StyledHeader = styled.header`
  height: 40px;
  background-color: ${({ theme }: { theme: Theme }) => theme.colorPrimary};
  width: 100%;
  color: ${({ theme }: { theme: Theme }) => theme.menuColor};
  line-height: 40px;
  margin-bottom: 70px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledH1 = styled.h1`
  font-size: ${({ theme }: { theme: Theme }) => theme.font.size.s};
  margin: 0px;
  font-weight: lighter;
`;
export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  justify-content: space-between;
`;
