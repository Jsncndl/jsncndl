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

export const FadeInLeftRightXAnimation = keyframes`
  from {
    transform: translateX(-100vw);
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
export const FadeInRightLeftXAnimation = keyframes`
  from {
    transform: translateX(100vw);
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
export const FadeInBottomTopYAnimation = keyframes`
  from {
    transform: translateY(100vh);
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
  animation-name: ${FadeInRightLeftXAnimation}
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