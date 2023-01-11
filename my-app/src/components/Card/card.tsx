import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/colors'
import '../Card/card.css'
import { mediaQueries } from '../../styles/mediaQueries'

interface CardProps {
  title?: string
  date?: string
  place?: string
  description?: {
    firstDescTitle?: string
    firstDescSubTitle?: string
    firstDescItemList?: string[]
    secondDescSubTitle?: string
    secondDescItemList?: string[]
    thirdDescSubTitle?: string
    thirdDescItemList?: string[]
    fourDescSubTitle?: string
    fourDescItemList?: string[]
  }
  toggleExpansion?: (event: any) => void
  isActive?: boolean
}

const StyledCard = styled.div`
  background-color: ${colors.second};
  width: 90%;
  max-height: 440px;
  display: flex;
  flex-direction: column;
  margin: 15px 0 0 0;
  padding: 7px;
  border-radius: 10px;
`
const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
`
const StyledHeaderInfo = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`
const StyledTitle = styled.h2`
  margin: 0;
  font-weight: normal;
  font-size: 20px;
`
const StyledDescription = styled.div`
  overflow: scroll;
  overscroll-behavior: contain;
  height: 100%;
  width: 100%;
`
const StyledTitleDescription = styled.h3`
  margin: 0;
  font-size: 16px;
`
const StyledList = styled.ul`
  padding: 0 0 0 7px;
`
const StyledSubList = styled.ul`
  padding: 0 0 0 10px;
  margin: 5px 0 10px 0;
`
const StyledListItem = styled.li`
  list-style-type: none;
  padding: 0 0 0 15px;
`
export const Card = (props: CardProps) => {
  const DispatchItemList = (itemList: string[]) => {
    itemList.map((item: string, index: number) => {
      return <StyledListItem key={index}>{item}</StyledListItem>
    })
  }

  return (
    <StyledCard>
      <StyledHeader>
        <StyledTitle>{props.title}</StyledTitle>
        <StyledHeaderInfo>
          <span>{props.date}</span>
          <p>{props.place}</p>
        </StyledHeaderInfo>
      </StyledHeader>
      {props.description && (
        <StyledDescription>
          <StyledTitleDescription>{props.description?.firstDescTitle}</StyledTitleDescription>
          <StyledList>
            <StyledSubList>
              <h4>{props.description?.firstDescSubTitle}</h4>
              <>
                {props.description?.firstDescItemList?.map((item: string, index: number) => {
                  return <StyledListItem key={index}>{item}</StyledListItem>
                })}
              </>
            </StyledSubList>
            <StyledSubList>
              <h4>{props.description?.secondDescSubTitle}</h4>
              <>
                {props.description?.secondDescItemList?.map((item: string, index: number) => {
                  return <StyledListItem key={index}>{item}</StyledListItem>
                })}
              </>
            </StyledSubList>
            <StyledSubList>
              <h4>{props.description?.thirdDescSubTitle}</h4>
              <>
                {props.description?.thirdDescItemList?.map((item: string, index: number) => {
                  return <StyledListItem key={index}>{item}</StyledListItem>
                })}
              </>
            </StyledSubList>
            <StyledSubList>
              <h4>{props.description?.fourDescSubTitle}</h4>
              <>
                {props.description?.fourDescItemList?.map((item: string, index: number) => {
                  return <StyledListItem key={index}>{item}</StyledListItem>
                })}
              </>
            </StyledSubList>
          </StyledList>
        </StyledDescription>
      )}
    </StyledCard>
  )
}

const StyledCardExp = styled.div`
  background-color: ${colors.second};
  width: 90%;
  max-height: 250px;
  display: flex;
  flex-direction: column;
  margin: 15px 0 0 0;
  padding: 7px;
  border-radius: 10px;
`
const StyledCardExpHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const StyledCardExpTitle = styled.h3`
  margin: 0;
`
const StyledCarpExpButton = styled.button`
  border: 0px;
  border-radius: 0 10px 0 0;
  background-color: transparent;
  color: ${colors.third};
  font-size: 30px;
  height: 37px;
  width: 40px;
  padding: 0;
  cursor: pointer;
`

export const CardExp = (props: CardProps) => {
  const myRef = useRef<null | HTMLDivElement>(null)

  return (
    <StyledCardExp className='expCard'>
      <StyledCardExpHeader>
        <StyledCardExpTitle>{props.title}</StyledCardExpTitle>
        {props.isActive ? (
          <StyledCarpExpButton onClick={props.toggleExpansion}>-</StyledCarpExpButton>
        ) : (
          <StyledCarpExpButton onClick={props.toggleExpansion}>+</StyledCarpExpButton>
        )}
      </StyledCardExpHeader>
      {props.isActive && (
        <div ref={myRef} style={{ overflow: 'scroll', overscrollBehavior: 'contain' }}>
          <div
            style={{
              padding: '0 10px 0 0',
              display: 'flex',
              justifyContent: 'flex-end',
              textAlign: 'end',
            }}>
            {props.place}
          </div>
          <div>{props.date}</div>
          <ul>
            {props.description?.firstDescItemList?.map((item: string, index: number) => {
              return <li key={index}>{item}</li>
            })}
          </ul>
        </div>
      )}
    </StyledCardExp>
  )
}
