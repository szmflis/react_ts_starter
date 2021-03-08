import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import { Progressbar } from './Progressbar'
import { Flex } from '../Flex/Flex'

storiesOf('Base/Components', module).add('Progressbar', () => {
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    // setInterval(() => {
    //   setCompleted(completed + 10)
    // }, 2000)

    const progressbarFunc = () => {
      if (completed != 100) {
        setCompleted(completed + 25)
      } else {
        setCompleted(0)
      }
    }

    setTimeout(progressbarFunc, 2000)
  }, [completed])

  return (
    <Flex width="100%" centerContent minHeight={9} flexDirection="column">
      <Progressbar percentCompleted={completed} bgColor={'tomato'} circle />
    </Flex>
  )
})
