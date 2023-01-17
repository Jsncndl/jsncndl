import styled from 'styled-components'
import { CardSites } from '../../components/CardSites/CardSites'
import chevron from '../../images/chevron.svg'
import { useState } from 'react'
import { colors } from '../../styles/colors'
import { dataSites } from '../../components/CardSites/data'

const StyledButton = styled.button<{ left?: boolean }>`
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  margin: 15px;
  border-radius: 100px;
  background-color: ${colors.third};
  border: 0;
  box-shadow: 0 0 5px black;
  cursor: pointer;
  transition: all 500ms ease;
  ${(props) => props.left && 'transform: scaleX(-1)'};

  &:hover {
    box-shadow: 0 0 7px ${colors.third};
    filter: brightness(1.3);
  }
`
const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  height: 90vh;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
const ButtonImage = styled.img`
  width: 90%;
  margin: 0 0 0 5px;
`

export const Sites = () => {
  const [activeSlide, setActiveSlide] = useState(1)
  const slidesLength = dataSites.length - 1

  const nextSlide = (index: number, slidesLength: number) => {
    if (index === slidesLength) {
      setActiveSlide(0)
    } else {
      setActiveSlide(index + 1)
    }
  }

  const prevSlide = (index: number, slidesLength: number) => {
    if (index === 0) {
      setActiveSlide(slidesLength)
    } else {
      setActiveSlide(index - 1)
    }
  }

  return (
    <>
      <span
        style={{
          overflow: 'hidden',
          width: '100%',
          height: '90vh',
          position: 'absolute',
          right: 0,
        }}>
        {dataSites.map((data, index) => {
          return (
            activeSlide === index && (
              <CardSites
                key={index}
                {...data}
              />
            )
          )
        })}
        <ButtonContainer>
          <StyledButton left onClick={() => prevSlide(activeSlide, slidesLength)}>
            <ButtonImage src={chevron} alt='Vers la gauche' />{' '}
          </StyledButton>
          <StyledButton onClick={() => nextSlide(activeSlide, slidesLength)}>
            <ButtonImage src={chevron} alt='Vers la droite' />
          </StyledButton>
        </ButtonContainer>
      </span>
    </>
  )
}
