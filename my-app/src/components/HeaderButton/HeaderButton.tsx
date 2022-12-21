import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { useNavContext } from '../../utils/hooks/useNavContext'
import './HeaderButton.css'
const Wrapper = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20px;
  height: 20px;
`

const TopBar = styled.div`
  width: 20px;
  height: 2px;
  background-color: ${colors.white};
  transform-origin: left;
  transition: transform 300ms ease;
`
const MiddleBar = styled.div`
  width: 20px;
  height: 2px;
  background-color: ${colors.white};
  transition: display 100ms ease;
`

const BottomBar = styled.div`
  width: 20px;
  height: 2px;
  background-color: ${colors.white};
  transform-origin: left;
  transition: transform 300ms ease;
`

export const HeaderButton = () => {
  const NavContext = useNavContext()
  const [isOpen, setIsOpen] = useState(false)

  const topBar = document.getElementById('topBar')
  const middleBar = document.getElementById('middleBar')
  const bottomBar = document.getElementById('bottomBar')

  useEffect(() => {
    if (NavContext.openMenu === true) {
      topBar?.classList.add('activeTopBar')
      middleBar?.classList.add('activeMiddleBar')
      bottomBar?.classList.add('activeBottomBar')
    } else {
      topBar?.classList.remove('activeTopBar')
      middleBar?.classList.remove('activeMiddleBar')
      bottomBar?.classList.remove('activeBottomBar')
    }
  })

  return (
    <Wrapper
      onClick={() => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
        NavContext.setOpenMenu()
      }}>
      <TopBar id='topBar' className={isOpen ? 'activeTopBar' : ''} />
      <MiddleBar id='middleBar' className={isOpen ? 'activeMiddleBar' : ''} />
      <BottomBar id='bottomBar' className={isOpen ? 'activeBottomBar' : ''} />
    </Wrapper>
  )
}
