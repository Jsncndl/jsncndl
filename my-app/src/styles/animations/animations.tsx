import styled, { keyframes } from "styled-components";

interface PropsBaseAnimation {
  duration?: string,
  timingFunction?: string,
  delay?: string,
  iterationCount?: string,
  direction?: string
}

export const BaseAnimation = styled.div<PropsBaseAnimation>`  
  animation-duration: ${props => props.duration};  
  animation-timing-function: ${props => props.timingFunction};      
  animation-delay: ${props => props.delay};  
  animation-iteration-count: ${props => props.iterationCount};  
  animation-direction: ${props => props.direction};
`; 

const FadeInXAnimation = keyframes`
  from {
    transform: translateX(-100vh);
    opacity: 0%;
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

export const FadeInX = styled(BaseAnimation)`
  animation-name: ${FadeInXAnimation}
`

export const AnimHeaderLink = (props: any) => keyframes`
  from {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  75 % {
    opacity: 0.8;
  }
  to {
    opacity: 1;
  }
`