import React from 'react'
import styled from '@emotion/styled'
import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core'
import { useEffect, useState } from 'react'
import useStorage from '../../../hooks/useStorage'
import api from '../../datams'
const Container = styled.div`
  margin-left: 3vw;
  margin-right: 3vw;
  margin-top: 3vh;
  display: flex;
  background-color: #0062d6;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem;
  border-radius: 1.5rem;
`
const TextDiv = styled.div`
  flex: 2;
  font-size: 28px;
  line-height: 36px;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  color: white;
  padding-left: 60px;
`
const _StyledButton = styled(Button)`
  background-color: white;
  border-radius: 30px;
  color: #0062d6;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  font-family: Montserrat, sans-serif;
  padding: 4px 20px;
  height: 42px;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(
  _StyledButton,
)
interface Props {
  dashClickHandler: Function
}
export default function SeeYourAnalysis({
  dashClickHandler
}: Props) {

  return (
    <Container>
      <TextDiv>
        We provide <span style={{ fontWeight: '500' }}>detailed analysis </span>
        of your <br />
        transactions and offer insights to help you <br /> make informed
        financial decisions.
      </TextDiv>
      <StyledButton
        variant="default"
        onClick={() => dashClickHandler()}
      >
        See your analysis
      </StyledButton>

    </Container>
  )
}

// export default SeeYourAnalysis
