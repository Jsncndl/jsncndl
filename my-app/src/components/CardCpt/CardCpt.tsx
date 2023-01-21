import styled, { keyframes } from 'styled-components'
import { FadeInX, FadeInBottomTopYAnimation, FadeInRightLeftXAnimation } from '../../styles/animations/animations'

export interface CardCptProps {
  title: string
  icon?: string
  indexDelay?: number
}

const animation = keyframes`
  from {
    transform: translateY(-100px);
    opacity: 5%;
    scale: 0.8;
  }
  65% {
    transform: translateX(0);
    opacity: 100%;
  }
  to {
    scale: 1;
  }
`
const StyledContainer = styled.li<{ indexDelay?: number | null }>`
  height: 80px;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-name: ${FadeInRightLeftXAnimation};
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-duration: 400ms;
  animation-delay: ${(props) =>
    props.indexDelay !== undefined && props.indexDelay !== null && props.indexDelay !== 0
      ? 300 + 100 * props.indexDelay
      : 300}ms;
`
const StyledIcon = styled.img`
  height: 50px;
`

export const CardCpt = ({ title, icon, indexDelay }: CardCptProps) => {
  return (
    <StyledContainer indexDelay={indexDelay}>
        <StyledIcon src={icon} alt={'Logo de ' + title} />
        <p>{title}</p>
    </StyledContainer>
  )
}
