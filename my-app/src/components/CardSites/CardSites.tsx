import { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { colors } from '../../styles/colors'
import { mediaQueries } from '../../styles/mediaQueries'
import { Modal } from '../../utils/hooks/modal'

interface CardSitesProps {
  image: string
  title: string
  project: number
  description: string
  link: string
  index?: number
}

const zommInOut = keyframes`
  30% {
    translate: 0 0;
    /* transform: scale(2); */
    height: 90%;
  }
  45% {
    translate: 38% 0;
    /* transform: scale(2); */
    height: 90%;
  }
  75% {
    translate: -35% 0;
    /* transform: scale(2); */
    height: 90%;
  }
  100% {
    /* transform: scale(1); */
    height: 50%;
  }
`
const leftToRight = keyframes`
  0% {
    translate: 33% 0;
  }
  50% {
    translate: -33% 0;
  }
  100% {
    translate: 33% 0;
  }
`

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  overflow: hidden;
`
const StyledImage = styled.img`
  /* max-height: 100%;
   max-width: 100%; */
  height: 50%;
  z-index: 2;
  /* animation: ${zommInOut} 20s steps(1000, end) infinite ; */

  @media (min-width: ${mediaQueries.md}) {
    max-height: 100%;
    max-width: 100%;
    height: 100%;
  }
`
const StyledFigure = styled.figure``

const FullSizeContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FullSizeImage = styled.img`
  height: 100%;
  animation: ${leftToRight} 12s ease-in-out infinite;

  @media (min-width: ${mediaQueries.md}) {
    animation: none;
    width: 100%;
    height: auto;
  }
`
const animatedFigcaption = keyframes`
  0% {
    translate: 0 0;
  }
  50% {
    translate: 0 -25px;
  }
  100% {
    translate: 0 0;
  }
`

const StyledFigcaption = styled.figcaption<{ active?: boolean }>`
  background-color: ${colors.third};
  max-height: 20px;
  overflow: hidden;
  border-radius: 15px;
  border: 0;
  padding: 7px;
  animation: ${animatedFigcaption} 3s ease-in-out infinite;
  transition: all 1s ease-in-out;
  z-index: 3;
  position: relative;

  ${(props) => props.active && "transform: translateY(-50px); max-height: 100px; animation: none;"}
`

export const CardSites = ({ image, title, project, description, link, index }: CardSitesProps) => {
  const [fullSize, setFullSize] = useState<boolean>(false)
  const [isDescActive, setIsDescActive] = useState(false)

  useEffect(() => {
    console.log(isDescActive)
    fullSize ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '')
  }, [fullSize])

  const imageClick = () => {
    fullSize ? setFullSize(false) : setFullSize(true)
    console.log('click', fullSize)
  }

  const descClick = (event: any) => {
    console.log(event)
    isDescActive ? setIsDescActive(false) : setIsDescActive(true)
  }

  return (
    <StyledFigure>
      {fullSize && (
        <Modal>
          <FullSizeContainer>
            <FullSizeImage src={image} onClick={() => setFullSize(false)} />
          </FullSizeContainer>
        </Modal>
      )}
      <StyledImageContainer>
        <StyledImage
          src={image}
          onClick={() => {
            imageClick()
          }}
        />
      </StyledImageContainer>
      {isDescActive ? (
        <StyledFigcaption
          active
          onClick={(event) => {
            descClick(event)
          }}>
          <div>{title}</div>
          <div>{description}</div>
        </StyledFigcaption>
      ) : (
        <StyledFigcaption
          onClick={(event) => {
            descClick(event)
          }}>
          <div>{title}</div>
          <div>{description}</div>
        </StyledFigcaption>
      )}
    </StyledFigure>
  )
}
