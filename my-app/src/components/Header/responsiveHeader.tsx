import { useEffect } from 'react'
import styled from 'styled-components'
import { useNavContext } from '../../utils/hooks/useNavContext'
import { HeaderButton } from '../HeaderButton/HeaderButton'
import { HeaderLink } from '../StyledLink/styledLink'
import './responsiveHeader.css'

const StyledHeader = styled.header`
  position: fixed;
  z-index: 99;
  background-color: transparent;
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  text-transform: uppercase;
`

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`

export const ResponsiveHeader = () => {
  const openMenu = useNavContext().openMenu

  useEffect(() => {
    if (openMenu) {
      document.getElementById('header')?.classList.add('activeNavlist')
      document.getElementById('header')?.classList.remove('hiddenNavlist')
    } else {
      document.getElementById('header')?.classList.add('hiddenNavlist')
      document.getElementById('header')?.classList.remove('activeNavlist')
    }
  })

  return (
    <StyledHeader id='header'>
      <Nav>
        <NavList id='navlist'>
          <HeaderButton />
          <HeaderLink name='home-link' id='home-link' $animDelay='200ms' $isActive={true}>
            Accueil
          </HeaderLink>
          <HeaderLink $animDelay='300ms' name='more-link' id='more-link' $isActive={false}>
            En savoir plus
          </HeaderLink>
          <HeaderLink $animDelay='400ms' name='sites-link' id='sites-link' $isActive={false}>
            Réalisations
          </HeaderLink>
          <HeaderLink $animDelay='500ms' name='contact-link' id='contact-link' $isActive={false}>
            Contact
          </HeaderLink>
        </NavList>
      </Nav>
    </StyledHeader>
  )
}
