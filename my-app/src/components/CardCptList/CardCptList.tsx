import htmlIcon from '../../images/icon-html.svg'
import cssIcon from '../../images/icon-css.svg'
import sassIcon from '../../images/icon-sass.svg'
import jsIcon from '../../images/icon-js.svg'
import reactIcon from '../../images/icon-react.svg'
import tsIcon from '../../images/icon-ts.svg'
import nodeIcon from '../../images/icon-node-js.svg'
import mongoIcon from '../../images/icon-mongodb.svg'
import { CardCpt, CardCptProps } from '../CardCpt/CardCpt'
import styled from 'styled-components'

const competences: CardCptProps[] = [
  { title: 'HTML', icon: htmlIcon },
  { title: 'CSS', icon: cssIcon },
  { title: 'Sass', icon: sassIcon },
  { title: 'JavaScript', icon: jsIcon },
  { title: 'React JS', icon: reactIcon },
  { title: 'TypeScript', icon: tsIcon },
  { title: 'MongoDB', icon: mongoIcon },
  { title: 'Node.JS', icon: nodeIcon },
]

const StyledContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 25px 15px;
  gap: 20px;
`


export const CardCptList = () => {

  return (
    <StyledContainer>
      {competences.map(({ title, icon }, index) => {
        return <CardCpt key={index} title={title} icon={icon} indexDelay={index} />
      })}
    </StyledContainer>
  )
}
