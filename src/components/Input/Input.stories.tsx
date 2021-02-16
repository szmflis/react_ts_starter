import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'

import { Flex } from '../Flex/Flex'
import { Title } from '../Typography/Typography'
import { Input } from './Input'
import { Button } from '../Button/Button'
import { Checkbox } from '../Checkbox/Checkbox'

storiesOf('Base/Components', module).add('Input', () => {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')

  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setInput1(event.target.value)
  }
  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setInput2(event.target.value)
  }
  const handleInputChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setInput3(event.target.value)
  }

  return (
    <Flex p={5} flexDirection="column" width="100vw" alignItems="center">
      <Flex flexDirection="column" mt={5} p={5} minWidth={7} maxWidth={8} bg="white" boxShadow="mdShadow_1">
        <Input value={input1} onChange={handleInputChange1} py={5} placeholder="Login" />
        <Input value={input2} onChange={handleInputChange2} py={5} placeholder="Password" type="Password" />
        <Input value={input3} onChange={handleInputChange3} py={5} placeholder="Repeat password" type="Password" />
      </Flex>
    </Flex>
  )
})
