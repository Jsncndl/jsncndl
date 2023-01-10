import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { colors } from '../../styles/colors'
import { useNavContext } from '../../utils/hooks/useNavContext'

const Wrapper = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20px;
  height: 20px;
`

const TopBar = styled.div<{ isOpen: boolean }>`
  width: 20px;
  height: 2px;
  background-color: ${colors.white};
  transform-origin: left;
  transition: transform 300ms ease;

  ${(props) =>
    props.isOpen &&
    css`
      transform-origin: left;
      transform: rotate(45deg) scale(1.3);
    `}
`
const MiddleBar = styled.div<{ isOpen: boolean }>`
  width: 20px;
  height: 2px;
  background-color: ${colors.white};
  transition: display 100ms ease;

  ${(props) =>
    props.isOpen &&
    css`
      display: none;
    `}
`

const BottomBar = styled.div<{ isOpen: boolean }>`
  width: 20px;
  height: 2px;
  background-color: ${colors.white};
  transform-origin: left;
  transition: transform 300ms ease;

  ${(props) =>
    props.isOpen &&
    css`
      transform: rotate(-45deg) scale(1.3);
    `}
`

export const HeaderButton = () => {
  const NavContext = useNavContext()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(NavContext.openMenu)
  }, [NavContext.openMenu])

  const handleClick = () => {
    setIsOpen(!isOpen)
    NavContext.setOpenMenu()
  }

  return (
    <Wrapper
      onClick={handleClick}>
      <TopBar id='topBar' isOpen={isOpen} />
      <MiddleBar id='middleBar' isOpen={isOpen} />
      <BottomBar id='bottomBar' isOpen={isOpen} />
    </Wrapper>
  )
}
