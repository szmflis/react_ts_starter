import { storiesOf } from '@storybook/react'
import React, { FormEvent, useRef, useState } from 'react'
import { Flex } from '../Flex/Flex'
import { Search } from './Search'
import { getAutocomplete } from '../../api/autocomplete'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`

storiesOf('Base/Components', module).add('Search', () => {
  const [input, setInput] = useState<string | null>(null)
  const [formResult, setFormResult] = useState<string | null>(null)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setFormResult(`Form submit handled\ngot input: ${input}`)
  }

  return (
    <Flex p={5} flexDirection="column" width="100vw" centerContent>
      <StyledForm onSubmit={handleSubmit}>
        <Search apiCb={getAutocomplete} my={5} icon="google" placeholder="Name of location..." setValue={setInput} />
        {formResult}
        <Flex width="100px" height="100px" backgroundColor="blue"></Flex>
      </StyledForm>
    </Flex>
  )
})
