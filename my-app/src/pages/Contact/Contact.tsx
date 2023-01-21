import styled from 'styled-components'
import { colors } from '../../styles/colors'
import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'

import mail from '../../images/svg/mail.svg'
import github from '../../images/svg/github.svg'
import linkedin from '../../images/svg/linkedin.svg'
import phone from '../../images/svg/phone.svg'

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
  margin: 0 0 10px;
`
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  gap: 10px;
  background-color: ${colors.first};
`
const SVGMailContainer = styled.div`
  height: 30px;
  width: 30px;
  background: url(${mail});
`
const SVGGithubContainer = styled.div`
  height: 30px;
  width: 30px;
  background: url(${github});
`
const SVGLinkedinContainer = styled.div`
  height: 30px;
  width: 30px;
  background: url(${linkedin});
`
const SVGPhoneContainer = styled.div`
  height: 30px;
  width: 30px;
  background: url(${phone});
`
const ContactItem = styled.div`
  display: flex;
  align-items: center;
`
const ContactLink = styled.a`
  color: ${colors.white};
  text-decoration: none;
  padding: 0 0 0 10px;
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
      <ContactContainer>
        <ContactItem>
          <SVGMailContainer />
          <ContactLink href='mailto:candel.josian@gmail.com'>candel.josian@gmail.com</ContactLink>
        </ContactItem>
        <ContactItem>
          <SVGGithubContainer />
          <ContactLink target='_blank' rel='noreferrer noopener' href='https://github.com/Jsncndl'>
            Jsncndl
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <SVGLinkedinContainer />
          <ContactLink
            target='_blank'
            rel='noreferrer noopener'
            href='https://www.linkedin.com/in/josian-candel/'>
            Josian Candel
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <SVGPhoneContainer />
          <ContactLink href='tel:+3313932115'>+33 6 13 93 21 15</ContactLink>
        </ContactItem>
      </ContactContainer>
    </span>
  )
}
