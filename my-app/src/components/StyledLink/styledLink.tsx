import { HTMLAttributes, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { AnimHeaderLink } from '../../styles/animations/animations'
import { colors } from '../../styles/colors'
import { useNavContext } from '../../utils/hooks/useNavContext'
import "./styledLink.css"

export interface HeaderLinkProps extends HTMLAttributes<HTMLLinkElement> {
  name: 'home-link' | 'more-link' | 'sites-link' | 'contact-link'
  id?: 'home-link' | 'more-link' | 'sites-link' | 'contact-link'
  $isActive?: boolean
  $animDelay?: string
}

const StyledLink = styled.a<HeaderLinkProps>`
  cursor: pointer;
  color: ${colors.white};
  text-align: center;
  line-height: 20px;
  text-decoration: none;
  scale: ${(props) => (props.$isActive ? '105%' : '100%')};
  transition: all 1s ease;
  &:active {
    scale: 105%;
  }
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1.5px;
    background: ${colors.white};
    transition: transform 0.4s ease-in-out;
    transform: ${(props) => (props.$isActive === true ? 'scale(1)' : 'scale(0)')};
  }
  &:hover {
    scale: 105%;
  }
  &:hover::after {
    transform: scale(1);
  }
  &:active::after {
    transform: scale(1);
  }
`

export const HeaderLink = ({ ...props }: HeaderLinkProps) => {
  const NavContext = useNavContext()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    console.log("styledlink")
    if (props.name.includes(NavContext.currentPath)) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  })

  return (
    <StyledLink
      href={`#${props.name.slice(0, props.name.search("-"))}`}
      name={props.name}
      id={props.id}
      onClick={(event: any) => {
        setIsActive(true);
        NavContext.setCurrentPath(event.target.name);
        setTimeout(() => NavContext.setOpenMenu(), 700)
      }}
      $isActive={isActive}
      $animDelay={props.$animDelay}>
      {props.children}
    </StyledLink>
  )
}
