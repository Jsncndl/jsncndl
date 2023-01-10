import { useCallback, useState } from 'react'
import { CardExp } from '../Card/card'

const cards = [
  {
    title: 'Adjoint technique territorial',
    date: 'De juin à août 2021, de janvier à février 2021, de juin à août 2020, de janvier à fevrier 2020',
    place: 'Centre de vacances Les Primevères, Habère-Poche 74',
    description: {
      firstDescItemList: [
        "Organisation et répartition des tâches d'une équipe de quatre personnes",
        'Préparer et mettre en place les repas',
        'Plonge des repas',
        'Entretien des locaux',
      ],
    },
  },
  {
    title: 'Facteur',
    date: 'Octobre 2020',
    place: 'La Poste, Boëge 74',
  },
  {
    title: 'Agent de production',
    date: 'De octobre 2017 à septembre 2019',
    place: 'Cuisines Morel, Allinges 74',
    description: {
      firstDescItemList: [
        'Utiliser, alimenter et contrôler des machines industrielles',
        'Usiner des plans de travail en bois',
        'Gérer la quincaillerie sur une chaine de production de meubles en bois',
        'Repérer les défauts de fabrication',
        "Respecter les délais d'une chaine de production",
      ],
    },
  },
  {
    title: 'Agent polyvalent',
    date: 'De juillet 2017 à septembre 2017',
    place: 'Communauté de communes Arve et Salève, Reignier-Esery 74',
  },
  {
    title: 'Employé polyvalent',
    date: 'Août 2017',
    place: 'Boucherie Lullinoise, Lullin 74',
  },
]

export const CardExpList = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const toggleExpansion = useCallback(
    (event: any, index: number) => {
      console.log(index, activeCard)
      if (activeCard === index) {
        console.log(index, activeCard, 'if')
        setActiveCard(null)
      } else {
        console.log(index, activeCard, 'else')
        setActiveCard(index)
      }
    },
    [activeCard],
  )

  return (
    <>
      {cards.map((card, index) => {
        return (
          <CardExp
            key={index}
            title={card.title}
            place={card.place}
            date={card.date}
            description={card.description}
            toggleExpansion={(event: any) => toggleExpansion(event, index)}
            isActive={activeCard === index}
          />
        )
      })}
    </>
  )
}
