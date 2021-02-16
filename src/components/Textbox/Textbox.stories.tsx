import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'
import { Textarea } from './Textbox'
import { Box } from '../Box/Box'
import { Title } from '../Typography/Typography'
import { Button } from '../Button/Button'

storiesOf('Base/Components', module).add('Textbox', () => {
  const [touched, setTouched] = useState(false)
  const [valid, setValid] = useState(false)

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const value = event.target.value
    console.log('On Change in textbox: ', value)

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
    <Box m={4}>
      <form onSubmit={handleSubmit}>
        <Title my={4}>Textbox no label</Title>
        <Textarea placeholder="Input text" onChange={onChange} touched={touched} valid={valid} />
        <Button type="submit" variant="primary" small icon="doneAll">
          Submit!
        </Button>
      </form>
    </Box>
  )
})
