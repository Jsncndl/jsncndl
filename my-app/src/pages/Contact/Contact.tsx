import styled from 'styled-components'
import { colors } from '../../styles/colors'
import mail from '../../images/svg/mail.svg'

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-self: center;
  gap: 10px;
`

const StyledLabel = styled.form`
  display: flex;
  flex-direction: column;
`
const StyledLabelName = styled.div`
  padding: 5px 15px;
`

const StyledInput = styled.input<{ textarea?: boolean }>`
  background-color: ${colors.third};
  border-radius: 5px;
  ${(props) => props.textarea && 'height: 20vh;'}
`

const StyledButton = styled.input`
  width: 50%;
  border: 0;
  border-radius: 20px;
  align-self: center;
  height: 25px;
  background-color: ${colors.third};
  color: ${colors.white};
  box-shadow: 0 0 5px ${colors.white};
`

const SVGContainer = styled.div`
  height: 30px;
  width: 30px;
  background: url(${mail});
`

export const Contact = () => {
  return (
    <span
      style={{
        alignSelf: 'center',
        width: '90%',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <h2>Me contacter</h2>
      <StyledForm>
        <StyledLabel>
          <StyledLabelName>Prénom</StyledLabelName>
          <StyledInput required type='text' />
        </StyledLabel>
        <StyledLabel>
          <StyledLabelName>Nom</StyledLabelName>
          <StyledInput required type='text' />
        </StyledLabel>
        <StyledLabel>
          <StyledLabelName>Titre du message</StyledLabelName>
          <StyledInput required type='text' />
        </StyledLabel>
        <StyledLabel>
          <StyledLabelName>Message</StyledLabelName>
          <StyledInput textarea required type='text' />
        </StyledLabel>
        <StyledButton type='submit' value='Envoyer' />
      </StyledForm>
      <SVGContainer />
    </span>
  )
}
