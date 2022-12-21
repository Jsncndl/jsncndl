import styled from 'styled-components'
import { useNavContext } from '../../utils/hooks/useNavContext'
import { HeaderLink } from '../StyledLink/styledLink'

const StyledHeader = styled.header`
  position: fixed;
  z-index: 99999;
  background-color: transparent;
  backdrop-filter: blur(1px);
  display: flex;
  justify-content: center;
  width: 100%;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  text-transform: uppercase;
`

export const Header = () => {
  const NavContext = useNavContext()

  return (
    <StyledHeader>
      <Nav>
        {NavContext.currentPath === '' ? (
          <>
            <HeaderLink name='home-link' $isActive={true}>
              Accueil
            </HeaderLink>
            <HeaderLink $animDelay='1s' name='more-link'>
              En savoir plus
            </HeaderLink>
            <HeaderLink $animDelay='2s' name='sites-link'>
              Réalisations
            </HeaderLink>
            <HeaderLink $animDelay='3s' name='contact-link'>
              Contact
            </HeaderLink>
          </>
        ) : NavContext.currentPath === 'home' ? (
          <>
            <HeaderLink name='home-link' $isActive={true}>
              Accueil
            </HeaderLink>
            <HeaderLink name='more-link'>En savoir plus</HeaderLink>
            <HeaderLink name='sites-link'>Réalisations</HeaderLink>
            <HeaderLink name='contact-link'>Contact</HeaderLink>
          </>
        ) : NavContext.currentPath === 'more' ? (
          <>
            <HeaderLink name='home-link'>Accueil</HeaderLink>
            <HeaderLink name='more-link' $isActive={true}>
              En savoir plus
            </HeaderLink>
            <HeaderLink name='sites-link'>Réalisations</HeaderLink>
            <HeaderLink name='contact-link'>Contact</HeaderLink>
          </>
        ) : NavContext.currentPath === 'sites' ? (
          <>
            <HeaderLink name='home-link'>Accueil</HeaderLink>
            <HeaderLink name='more-link'>En savoir plus</HeaderLink>
            <HeaderLink name='sites-link' $isActive={true}>
              Réalisations
            </HeaderLink>
            <HeaderLink name='contact-link'>Contact</HeaderLink>
          </>
        ) : NavContext.currentPath === 'contact' ? (
          <>
            <HeaderLink name='home-link'>Accueil</HeaderLink>
            <HeaderLink name='more-link'>En savoir plus</HeaderLink>
            <HeaderLink name='sites-link'>Réalisations</HeaderLink>
            <HeaderLink name='contact-link' $isActive={true}>
              Contact
            </HeaderLink>
          </>
        ) : (
          <>
            <HeaderLink name='home-link' $isActive={true}>
              Accueil
            </HeaderLink>
            <HeaderLink name='more-link' $animDelay='3s'>
              En savoir plus
            </HeaderLink>
            <HeaderLink name='sites-link' $animDelay='3s'>
              Réalisations
            </HeaderLink>
            <HeaderLink name='contact-link' $animDelay='3s'>
              Contact
            </HeaderLink>
          </>
        )}
      </Nav>
    </StyledHeader>
  )
}
