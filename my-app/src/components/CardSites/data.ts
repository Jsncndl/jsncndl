import bookiMockup from '../../images/booki.webp'
import ohmyfoodMockup from '../../images/ohmyfood.webp'
import panthereMockup from '../../images/lapantheremockup.webp'
import kanapMockup from '../../images/kanap-mockup.webp'
import groupomaniaMockup from '../../images/groupomania-mockup.webp'

export interface dataSitesProps {
  image: string
  title: string
  project: number
  description: string
  link: string
}

export const dataSites: dataSitesProps[] = [
  {
    image: bookiMockup,
    title: 'Booki',
    project: 1,
    description: `Projet 1 de la formation OpenClassroms. Réalisation d'un site en HTML/CSS selon une maquette.`,
    link: '',
  },
  {
    image: ohmyfoodMockup,
    title: 'Ohmyfood',
    project: 2,
    description: '',
    link: '',
  },
  {
    image: panthereMockup,
    title: 'La Panthère',
    project: 2,
    description: '',
    link: '',
  },
  {
    image: kanapMockup,
    title: 'Kanap',
    project: 2,
    description: '',
    link: '',
  },
  {
    image: groupomaniaMockup,
    title: 'Groupomania',
    project: 2,
    description: '',
    link: '',
  },
]
