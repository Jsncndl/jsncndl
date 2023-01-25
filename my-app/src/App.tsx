import './App.css'
import { ResponsiveHeader } from './components/Header/responsiveHeader'
import { Contact } from './pages/Contact/Contact'
import { Home } from './pages/Home/Home'
import { More } from './pages/More/More'
import { Sites } from './pages/Sites/Sites'
import { StyledSection, Main } from './styles/globalStyle'
import { useNavContext } from './utils/hooks/useNavContext'
import backgroundWave from './images/svg/wave.svg'

function App() {
  const setCurrentPath = useNavContext().setCurrentPath

  const sections = document.querySelectorAll('section')
  const options = {
    rootMargin: '0px',
    threshold: 0.25,
  }
  const callback = (entries: any) => {
    entries.forEach(async (entry: any) => {
      const target = entry.target
      if (entry.intersectionRatio >= 0.25) {
        target.firstChild.classList.remove('hidden')
        target.firstChild.classList.add('inview')
        const offsetTop = target.offsetTop
        window.scroll({ top: offsetTop, behavior: 'smooth' })

        setTimeout(() => {
          /* Timeout of 500ms to avoid freezing when scrolling to top */
          target.id && setCurrentPath(target.id)
        }, 500)
      } else {
        target.firstChild.classList.remove('inview')
        target.firstChild.classList.add('hidden')
      }
    })
  }

  const observer = new IntersectionObserver(callback, options)
  sections.forEach((section, index) => {
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
        <Sites />
      </StyledSection>
      <StyledSection id='contact'>
        <Contact />
      </StyledSection>
    </Main>
  )
}

export default App
