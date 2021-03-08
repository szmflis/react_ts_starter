import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import { Progressbar } from './Progressbar'
import { Flex } from '../Flex/Flex'
import { Paragraph, Title } from '../Typography/Typography'
import { Layout, Space } from '../../../.storybook/properties'

storiesOf('Base/Components', module).add('Progressbar', () => {
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    const progressbarFunc = () => {
      if (completed != 100) {
        setCompleted(completed + 25)
      } else {
        setCompleted(0)
      }
    }

    setTimeout(progressbarFunc, 1000)
  }, [completed])

  return (
    <Flex width="100%" centerContent minHeight={9} flexDirection="column" justifyContent="space-around">
      <Flex boxShadow="mdShadow_1" p={5} flexDirection="column" maxWidth={9}>
        <Title>Default progress bar</Title>

        <Flex centerContent py={8}>
          <Progressbar percentCompleted={completed} width={6} />
        </Flex>

        <Paragraph my={3}>
          Progressbar takes the current state of some loading process as a number ranging from 0 to 100, which is then
          translated into % width of the filler element inside progressbar.
        </Paragraph>

        <Paragraph my={3}>
          Progressbar can also take bgColor prop to change color on every step of the loading process.
        </Paragraph>

        <Paragraph my={3}>Apart from that Progressbar takes SpaceProps and LayoutProps for pads, sizing etc.</Paragraph>

        <Title mt={3}>Progress bar with circle prop</Title>

        <Flex centerContent py={8}>
          <Progressbar percentCompleted={completed} circle width={6} />
        </Flex>
      </Flex>

      <Title mt={6}>Progress bar properties:</Title>
      <Flex flexWrap="wrap">
        <Space />
        <Layout />
      </Flex>
    </Flex>
  )
})

// TODO bgColor
