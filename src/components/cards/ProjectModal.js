import React from "react"
import { Modal } from "react-responsive-modal"
import "react-responsive-modal/styles.css"
import styled from "styled-components"
const ProjectModal = ({ isOpen, setOnClose, data }) => {
  return (
    <Modal open={isOpen} onClose={setOnClose} center={true}>
      <Banner src={data.thumbnail} />
      <Wrapper>
        <Title>{data.title}</Title>
        <Link href="/">https://google.com</Link>
        <TextHeader>Tentang Projek Ini</TextHeader>
        <TextBody>{data.description}</TextBody>
        <TextHeader>Jenis Projek</TextHeader>
        <TextBody>{data.type}</TextBody>
        <TextHeader>Teknologi yang kami gunakan</TextHeader>
        <TextBody>icon icon icon icon</TextBody>
      </Wrapper>
    </Modal>
  )
}

const Wrapper = styled.div`
  margin-top: 1rem;
  max-width: 500px;
  width: auto;
  display: grid;
  row-gap: 10px;
`

const Banner = styled.img`
  width: 100%;
  max-height: 250px;
  margin: auto;
  object-fit: contain;
`

const Title = styled.h1`
  font-size: 1.75rem;
  color: #00163a;
  font-weight: bold;
`

const Link = styled.a`
  color: #fc5c7e;
  font-style: italic;
  font-size: 1rem;
`

const TextHeader = styled.h2`
  font-size: 1.25rem;
  color: #00163a;
  font-weight: bold;
`

const TextBody = styled.p`
  font-size: 0.75rem;
  color: #9f9f9f;
  line-height: 1rem;
`
export default ProjectModal
