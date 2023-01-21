import styled from 'styled-components'
import { colors } from '../../styles/colors'
import mail from '../../images/svg/mail.svg'
import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'

interface FormUserEmail {
  user_email: string
}

interface FormProps {
  user_email: string
  user_name: string
  user_object: string
  user_message: string
  user_phone?: string
}

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-self: center;
`

const StyledLabel = styled.label`
  padding: 5px 0;
`
const StyledLabelName = styled.label`
  padding: 5px 0;
`

const StyledInput = styled.input<{ textarea?: boolean }>`
  background-color: ${colors.third};
  border-radius: 5px;
  font-family: 'Poppins';
  ${(props) => props.textarea && 'height: 20vh;'}
`

const StyledTextarea = styled.textarea`
  background-color: ${colors.third};
  height: fit-content;
  border-radius: 5px;
  max-height: 100px;
  min-height: 18px;
  max-width: 88.4vw;
  min-width: 88.4vw;
  margin: 0 0 20px 0;
  font-family: 'Poppins';
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
  const form = useRef(null)
  const [formValue, setFormValue] = useState<FormProps>({
    user_email: '',
    user_name: '',
    user_object: '',
    user_message: '',
  })

  useEffect(() => {
    console.log(formValue)
  }, [formValue])

  const onSubmit = (event: any) => {
    event.preventDefault()
    console.log(formValue, 'submit')

    console.log(form.current)
    if (form.current)
      emailjs
        .sendForm('service_o3h6wdi', 'template_4vancxh', form.current, '780HXU93LVlOKoj1u')
        .then(
          (result: any) => {
            console.log(result.text)
          },
          (error: any) => {
            console.log(error.text)
          },
        )
  }

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
      <StyledForm ref={form} onSubmit={onSubmit}>
        <StyledLabelName htmlFor='user_name'>Votre nom</StyledLabelName>
        <StyledInput
          required
          type='text'
          name='user_name'
          id='user_name'
          onChange={(event: any) => setFormValue({ ...formValue, user_name: event.target.value })}
        />
        <StyledLabelName htmlFor='user_email'>Votre email</StyledLabelName>
        <StyledInput
          required
          type='text'
          name='user_email'
          id='user_email'
          onChange={(event: any) => setFormValue({ ...formValue, user_email: event.target.value })}
        />
        <StyledLabelName htmlFor='user_phone'>Votre téléphone</StyledLabelName>
        <StyledInput
          type='text'
          name='user_phone'
          id='user_phone'
          onChange={(event: any) => setFormValue({ ...formValue, user_phone: event.target.value })}
        />
        <StyledLabelName htmlFor='user_object'>Objet de votre message</StyledLabelName>
        <StyledInput
          required
          type='text'
          name='user_object'
          id='user_object'
          onChange={(event: any) => setFormValue({ ...formValue, user_object: event.target.value })}
        />
        <StyledLabelName htmlFor='user_message'>Message</StyledLabelName>
        <StyledTextarea
          required
          name='user_message'
          id='user_message'
          onChange={(event: any) =>
            setFormValue({ ...formValue, user_message: event.target.value })
          }
        />
        <StyledButton type='submit' value='Envoyer' />
      </StyledForm>
      <SVGContainer />
    </span>
  )
}
