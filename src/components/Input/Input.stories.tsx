import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'

import { Flex } from '../Flex/Flex'
import { Input } from './Input'
import { Button } from '../Button/Button'
import { Paragraph } from '../Typography/Typography'

storiesOf('Base/Components', module).add('Input', () => {
  const [input1, setInput1] = useState('')
  const [touched, setTouched] = useState(false)
  const [valid, setValid] = useState(false)

  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    console.log('On Change in input: ', value)
    setInput1(event.target.value)

    if (value.length > 3 && value.length < 10) {
      setValid(true)
    } else {
      setValid(false)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setTouched(true)
    console.log('Valid: ', valid)
    console.log('Touched: ', touched)
  }

  return (
    <Flex p={5} flexDirection="column" width="100vw" alignItems="center">
      <Flex flexDirection="column" mt={5} p={5} minWidth={7} maxWidth={8} bg="white" boxShadow="mdShadow_1">
        <Paragraph py={2}>
          The input element color can be changed accordingly to wether or not input is valid. In this case if the input
          is of length 4-9 its valid. Colors are changed by passing valid/touched prop to Input component.
        </Paragraph>
        <Paragraph py={2}>In this case the color change is visible after submiting (touching).</Paragraph>
        <form onSubmit={handleSubmit}>
          <Input
            value={input1}
            onChange={handleInputChange1}
            touched={touched}
            valid={valid}
            py={5}
            placeholder="Login"
            onBlur={() => setTouched(true)}
          />
          <Button type="submit" variant="primary" small icon="doneAll">
            Submit!
          </Button>
        </form>
      </Flex>
    </Flex>
  )
})
