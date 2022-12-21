import { Route } from 'react-router'
import { BrowserRouter, Routes } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import { Header } from './components/Header/header'
import { ResponsiveHeader } from './components/Header/responsiveHeader'
import { Home } from './pages/Home/Home'
import { More } from './pages/More/More'
import { colors } from './styles/colors'
import { StyledSection, Main } from './styles/globalStyle'
import { NavContext } from './utils/context/NavContext'
import { useNavContext } from './utils/hooks/useNavContext'

function App() {
  ///
  const setCurrentPath = useNavContext().setCurrentPath

  const sections = document.querySelectorAll('section')
  const options = {
    rootMargin: '0px',
    threshold: 0.25,
  }
 // homePage?.addEventListener('mouseover', (event: any) => console.log(event))
 // morePage?.addEventListener('mouseover', (event: any) => setTimeout(() => console.log(document.getElementById("home-link"))))
  const callback = (entries: any) => {
    entries.forEach(async (entry: any) => {
      const target = entry.target
      if (entry.intersectionRatio >= 0.25) {
        target.firstChild.classList.add('inview')
        const offsetTop = target.offsetTop
        window.scroll({ top: offsetTop, behavior: 'smooth' })
        
        setTimeout(() => {
          console.log("euh")
          window.location.assign(window.location.origin + '/#' + target.id)
          const linkId = document.getElementById(`${target.id}-link`)
          setCurrentPath(target.id)
        }, 700)
      } else {
        target.firstChild.classList.remove('inview')
      }
    })
  }

  const observer = new IntersectionObserver(callback, options)
  sections.forEach((section, index) => {
    console.log("observer")
    observer.observe(section)
  })
  ///

  return (
    <Main dir='ltr'>
      <ResponsiveHeader />
      <StyledSection id='home'>
        <Home />
      </StyledSection>
      <StyledSection id='more'>
        <More />
      </StyledSection>
      <StyledSection id='sites'>
        <span>RéALISATIONS</span>
      </StyledSection>
      <StyledSection id='contact'>
        <span>Derniere div</span>
      </StyledSection>
    </Main>
    /*     <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='more' element={<More />} />
        <Route path='sites' />
        <Route path='contact' />
      </Routes>
    </BrowserRouter> */
  )
}

export default App
