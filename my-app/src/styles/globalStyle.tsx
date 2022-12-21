import styled from "styled-components";
import { colors } from "./colors";

export const Main = styled.main`
  color: ${colors.white};
`;

export const StyledSection = styled.section`
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${colors.first};
  padding: 40px 15px;
`;