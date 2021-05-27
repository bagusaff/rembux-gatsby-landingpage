import React from "react"
import styled from "styled-components"
const ContactForm = () => {
  return (
    <FormWrapper>
      <form>
        <FormLabel>Nama</FormLabel>
        <TextInput type="text" name="name" placeholder="Masukan Nama Anda" />
        <FormLabel>Email</FormLabel>
        <TextInput type="email" name="email" placeholder="Masukan Email Anda" />
        <FormLabel>Pesan</FormLabel>
        <TextAreaInput placeholder="Masukan Pesan Anda" />
        <ButtonSubmit type="submit" value="Submit Request" />
      </form>
    </FormWrapper>
  )
}

export default ContactForm

const FormWrapper = styled.div`
  max-width: 400px;
  background: #ffffff;
  position: relative;
  padding: 3rem 2rem;
  box-shadow: 0px -1px 20px 2px rgba(0, 0, 0, 0.15);
  border-radius: 0px 50px;
  border-top: 10px solid #fc5c7e;
`

const FormLabel = styled.label`
  font-weight: normal;
  font-size: 1rem;
  line-height: 16px;
  color: #00163a;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`

const TextInput = styled.input.attrs({
  type: "text",
})`
  width: 100%;
  padding: 12px 20px;
  margin: 1rem 0;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  color: #9f9f9f;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  :focus {
    border: 1px solid #fc5c7e;
  }
`

const TextAreaInput = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  margin: 1rem 0;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 5px;
  max-width: 336px;
  max-height: 100px;
  outline: none;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-sizing: border-box;
  font-family: Nunito;
  font-size: 0.875rem;
  color: #9f9f9f;
  :focus {
    border: 1px solid #fc5c7e;
  }
`

const ButtonSubmit = styled.input.attrs({
  type: "submit",
})`
  width: 100%;
  border: none;
  padding: 10px 0;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  color: white;
  background: #fc5c7e;
  border-radius: 3px;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    transform: scale(1.05);
  }
`
