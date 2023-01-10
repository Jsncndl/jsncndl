import { useScrollTo } from '../../utils/hooks/useScrollTo'

export const Home = () => {
  return (
    <span>
      <h1>Bienvenue sur le site de Josian Candel</h1>
      <div>
        Développeur web à la recherche d'une alternance pour effectuer la formation Développeur
        d'Application JavaScript React avec l'organisme OpenClassrooms
      </div>
      <div id='more-button' onClick={useScrollTo}>
        En savoir plus sur mon parcours ...
      </div>
      <div id='sites-button' onClick={useScrollTo}>
        Voir mes réalisations
      </div>
      <div id='contact-button' onClick={useScrollTo}>
        Me contacter
      </div>
    </span>
  )
}
