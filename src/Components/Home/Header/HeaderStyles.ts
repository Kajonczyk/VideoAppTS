//@ts-ignore
import styled from "styled-components";
import { Theme } from "../../../Utils/theme";

export const StyledHeader = styled.header`
  height: 40px;
  background-color: ${({ theme }: { theme: Theme }) => theme.colorPrimary};
  width: 100%;
  color: ${({ theme }: { theme: Theme }) => theme.menuColor};
  text-align: center;
  line-height: 40px;
  font-size: ${({ theme }: { theme: Theme }) => theme.font.size.s};
  margin-bottom: 70px;
`;
