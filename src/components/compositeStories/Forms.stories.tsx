import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'

import { Flex } from '../Flex/Flex'
import { Title } from '../Typography/Typography'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { Checkbox } from '../Checkbox/Checkbox'

storiesOf('Composites/Forms', module).add('Form1', () => {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  const [check1, setCheck1] = useState(true)
  const [check2, setCheck2] = useState(false)

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
        <Title>Some kind of form</Title>

        <Input value={input1} onChange={handleInputChange1} py={5} placeholder="Login" />
        <Input value={input2} onChange={handleInputChange2} py={5} placeholder="Password" type="Password" />
        <Input value={input3} onChange={handleInputChange3} py={5} placeholder="Repeat password" type="Password" />
        <Checkbox
          label="This would say something about accepting some other thing"
          py={5}
          checked={check1}
          onChange={() => setCheck1(!check1)}
        />
        <Checkbox
          label="This would be extreamly long and noone would ever read it. Most modern browsers support this, but for older browsers, vendor prefixes will be required."
          py={5}
          checked={check2}
          onChange={() => setCheck2(!check2)}
        />
        <Flex py={4}>
          <Button variant="primary" icon="doneAll" type="submit" />
          <Button variant="cancel" icon="delete" type="reset" />
        </Flex>
      </Flex>
    </Flex>
  )
})
