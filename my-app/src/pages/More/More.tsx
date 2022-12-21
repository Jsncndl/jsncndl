import styled from 'styled-components'
import { FadeInX } from '../../styles/animations/animations'

const StyledSection = styled.section`
  animation: ${FadeInX} 1s ease-in;
`

export const More = () => {
  return (
    <span>
      <FadeInX duration='1s'>
        <h1>En savoir plus</h1>
        <div>
          Développeur web à la recherche d'une alternance pour effectuer la formation Développeur
          d'Application JavaScript React avec l'organisme OpenClassrooms
        </div>
        <div>En savoir plus sur mon parcours ...</div>
        <div>Voir mes réalisations</div>
      </FadeInX>
    </span>
  )
}
