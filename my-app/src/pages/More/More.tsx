import styled from 'styled-components'
import { colors } from '../../styles/colors'
import image from '../../images/portfolio.webp'
import { Card, CardExp } from '../../components/Card/card'
import { useEffect, useRef, useState } from 'react'
import { CardExpList } from '../../components/CardExpList/CardExpList'


const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 180px;
  right: 0;
  background-color: ${colors.third};
  z-index: -1;
  display: flex;
  flex-direction: column;
`

const StyledContainer = styled.span`
  display: flex;
  flex-direction: column;
`
const StyledImageContainer = styled.span`
  background-image: url('${image}');
  background-position: center;
  background-size: cover;
  border-radius: 100px;
  border: 5px ${colors.third} solid;
  align-self: center;
  position: absolute;
  width: 180px;
  height: 180px;
`

const StyledName = styled.h2`
  align-self: center;
  margin: 1em 0 0.83em 0;
`

const StyledSubMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
`

const StyledItemList = styled.li<{ active?: boolean }>`
  text-align: center;
  width: 115px;
  transition: all 1s ease;
  height: 30px;
  &::after {
    content: '';
    display: inline-block;
    position: relative;
    top: -50%;
    width: 70px;
    height: 1.5px;
    background: #ffffff;
    transition: transform 0.4s ease-in-out;
    transform: ${(props) => (props.active ? 'scale(1)' : 'scale(0)')};
  }
`
const cardValue1 = {
  title: 'Développeur Web',
  date: '2022',
  place: 'OpenClassrooms',
  description: {
    firstDescTitle: 'Réalisation de projets basés sur des scénarios professionnels:',
    firstDescSubTitle: 'Transformer une maquette en site web avec HTML & CSS',
    firstDescItemList: [
      'Intégrer du contenu conformément à une maquette',
      'Implémenter une interface responsive',
    ],
    secondDescSubTitle: 'Optimiser un site web existant',
    secondDescItemList: [
      "Optimiser la taille, la vitesse et le référencement d'un site web",
      "Assurer l'accessibilité d'un site web",
    ],
    thirdDescSubTitle: 'Construire un site e-commerce en JavaScript',
    thirdDescItemList: [
      'Interagir avec un web service JavaScript',
      'Gérer des évènements JavaScript',
      'Créer un plan de test pour une application',
    ],
    fourDescSubTitle: "Créer un réseau social d'entreprise",
    fourDescItemList: [
      'Stocker des données de manière sécurisée',
      'Implémenter un modèle logique de données conformément à la réglementation',
      'Implémenter des opérations CRUD de manière sécurisée',
    ],
  },
}
export const More = () => {
  const myRef = useRef<null | HTMLHeadingElement>(null)
  const [categorie, setCategorie] = useState('formations' || 'experiences' || 'competences')

  const toggleCategorie = (event: any) => {
    const categorie = event.target.id.slice(4)
    console.log(event.target.offsetTop)
    if (myRef.current) {
      myRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
      myRef.current.scrollBy({ top: 150 })
    }
    setCategorie(categorie)
  }

  const [activeIndex, setActiveIndex] = useState<null | number>()

   useEffect(() => {
    if (activeIndex) {
      setActiveIndex(activeIndex)
    }
  }, [activeIndex])

  return (
    <span style={{ width: '100%', position: 'absolute', right: 0 }}>
      <StyledContainer className='exp-card'>
        <StyledImageContainer />
        <StyledBackground ref={myRef}>
          <StyledName>Josian Candel</StyledName>
          <StyledSubMenu>
            {categorie === 'formations' ? (
              <StyledItemList active id='cat-formations' onClick={toggleCategorie}>
                Formations
              </StyledItemList>
            ) : (
              <StyledItemList id='cat-formations' onClick={toggleCategorie}>
                Formations
              </StyledItemList>
            )}
            {categorie === 'experiences' ? (
              <StyledItemList active id='cat-experiences' onClick={toggleCategorie}>
                Expériences
              </StyledItemList>
            ) : (
              <StyledItemList id='cat-experiences' onClick={toggleCategorie}>
                Expériences
              </StyledItemList>
            )}
            {categorie === 'competences' ? (
              <StyledItemList active id='cat-competences' onClick={toggleCategorie}>
                Compétences
              </StyledItemList>
            ) : (
              <StyledItemList id='cat-competences' onClick={toggleCategorie}>
                Compétences
              </StyledItemList>
            )}
          </StyledSubMenu>
          <StyledSubMenu>
            {categorie === 'formations' ? (
              <>
                <Card {...cardValue1} />
                <Card
                  {...{ title: 'BAC STI2D spé. SIN', date: '2016', place: 'Haute-Savoie, 74' }}
                />
              </>
            ) : categorie === 'experiences' ? (
              <>
                <CardExpList />
              </>
            ) : categorie === 'competences' ? (
              <p>competence</p>
            ) : (
              <div>error</div>
            )}
          </StyledSubMenu>
        </StyledBackground>
      </StyledContainer>
    </span>
  )
}
