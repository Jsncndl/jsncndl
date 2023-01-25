import styled, { css } from 'styled-components'
import { colors } from './colors'
import backgroundWave from "../images/svg/wave.svg"

export const Main = styled.main`
  color: ${colors.white};
`

export const StyledSection = styled.section<{home?: boolean}>`
  height: 90vh;
  background-color: ${colors.first};
  padding: 40px 15px;
  display: flex;
  justify-content: center;
  ${(props) => props.home && css`background-color: ${colors.first};
  background-image: url(${backgroundWave});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;`};

`
