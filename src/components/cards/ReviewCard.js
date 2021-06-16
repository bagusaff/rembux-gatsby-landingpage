import React from "react"
import styled from "styled-components"

const ReviewCard = ({ props }) => {
  return (
    <Wrapper>
      <ReviewText>{props.description}</ReviewText>
      <Avatar src={props.photo} />
      <Name>{props.clientName}</Name>
      <Status>({props.projectName})</Status>
    </Wrapper>
  )
}

export default ReviewCard

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ReviewText = styled.h3`
  font-size: 1.125rem;
  line-height: 1.125rem;
  text-align: center;
  color: #9f9f9f;

  @media (max-width: 480px) {
    font-size: 14px;
  }
  margin: 1.5rem 0;
`

const Avatar = styled.img`
  width: 50px !important;
  height: 50px;
  border-radius: 50%;
  margin: auto;
  margin: 1rem;
`

const Name = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 1.125rem;
  margin: 0.5rem;
  color: #00163a;
`

const Status = styled.h5`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 20px;

  color: #00163a;
`
