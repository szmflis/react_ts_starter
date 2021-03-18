import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'

import { Flex } from '../Flex/Flex'
import { Input } from './Input'
import { Button } from '../Button/Button'
import { Paragraph, Title } from '../Typography/Typography'
import { Space } from '../../../.storybook/properties'
import { Notification } from '../Notification/Notification'

storiesOf('Base/Components', module).add('Input', () => {
  const [input1, setInput1] = useState('')
  const [touched, setTouched] = useState(false)
  const [valid, setValid] = useState(false)
  const [notification, setNotification] = useState<null | string>(null)

  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    console.log('On Change in input: ', value)
    setInput1(event.target.value)

    if (value.length > 3 && value.length < 10) {
      setValid(true)
      setNotification(null)
    } else {
      setValid(false)
      if (touched) {
        setNotification('Input value must be betweeen 3 and 10 characters')
      }
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
          The input element color can be changed accordingly to weather or not input is valid. In this case if the input
          is of length 4-9 its valid. Colors are changed by passing valid/touched prop to Input component.
        </Paragraph>
        <Paragraph py={2}>In this case the color change is visible after touching (onBlur).</Paragraph>
        <Paragraph py={2}>Additionally rendering Notification component depending on validity of inputs.</Paragraph>
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
          {notification && <Notification variant="warning">{notification}</Notification>}
          {/*<Input*/}
          {/*  value={input1}*/}
          {/*  onChange={handleInputChange1}*/}
          {/*  touched={touched}*/}
          {/*  valid={valid}*/}
          {/*  py={5}*/}
          {/*  placeholder="Disabled"*/}
          {/*  onBlur={() => setTouched(true)}*/}
          {/*  disabled*/}
          {/*/>*/}
          <Button type="submit" variant="primary" small icon="doneAll">
            Submit!
          </Button>
        </form>
      </Flex>
      <Title mt={6}>Input properties:</Title>
      <Flex flexWrap="wrap">
        <Space />
      </Flex>
    </Flex>
  )
})
