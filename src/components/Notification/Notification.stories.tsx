/* eslint-disable */
import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { Flex } from '../Flex/Flex'
import { Paragraph, SectionTitle, Title } from '../Typography/Typography'
import { Notification } from './Notification'
import { Button } from '../Button/Button'

storiesOf('Base/Components', module).add('Notification', () => {
  const [showNot1, setShowNot1] = useState(false)
  const [showNot2, setShowNot2] = useState(false)
  const [showNot3, setShowNot3] = useState(false)
  const [showNot4, setShowNot4] = useState(false)
  const [showNot5, setShowNot5] = useState(false)

  return (
    <Flex p={5} flexDirection="column" width="100vw" alignItems="center">
      <Flex flexDirection="column" mt={5} p={5} bg="white" maxWidth={10} boxShadow="mdShadow_1">
        <Title mt={2} mb={5}>
          Notification Element
        </Title>
        <Paragraph>Notification.tsx is pretty much just some text with animation on load.</Paragraph>

        <SectionTitle my={5}>How to use</SectionTitle>
        <Paragraph my={3}>
          Usage mainly by conditionally rendering Notification component and specifying its variant to change text color
          - it&apos;s not required but makes sense.
        </Paragraph>
        <Paragraph my={3}>For example:</Paragraph>
        <Flex my={4} flexDirection="column">
          <Flex mb={5} centerContent flexDirection="column">
            <Button variant="primary" small onClick={() => setShowNot1(!showNot1)}>
              {showNot1 ? 'Hide' : 'Show'}
            </Button>
            {showNot1 && <Notification mt={3}> This is a default notification.</Notification>}
          </Flex>
          <SyntaxHighlighter language="javascript" style={darcula}>
            {'const [showNot1, setShowNot1] = useState(false)\n' +
              'return (\n' +
              '  <Flex>\n' +
              '      <Button variant="primary" small onClick={() => setShowNot1(!showNot1)}>\n' +
              "        {showNot1 ? 'Hide' : 'Show'}\n" +
              '      </Button>\n' +
              '      {showNot1 && <Notification mt={3} ml={2}>This is a default notification.</Notification>}\n' +
              '  </Flex>\n' +
              ')'}
          </SyntaxHighlighter>
        </Flex>

        <SectionTitle my={3}>Different variants:</SectionTitle>

        <Flex my={4} flexDirection="column">
          <Flex mb={5} centerContent flexDirection="column">
            <Button variant="primary" small onClick={() => setShowNot2(!showNot2)}>
              {showNot2 ? 'Hide' : 'Show'}
            </Button>
            {showNot2 && (
              <Notification mt={3} variant="primary" fontSize={5}>
                This is a primary notification with increased fontsize.
              </Notification>
            )}
          </Flex>
        </Flex>

        <Flex my={4} flexDirection="column">
          <Flex mb={5} centerContent flexDirection="column">
            <Button variant="primary" small onClick={() => setShowNot3(!showNot3)}>
              {showNot3 ? 'Hide' : 'Show'}
            </Button>
            {showNot3 && (
              <Notification mt={3} fontWeight={3}>
                This is a default notification with lowered weight.
              </Notification>
            )}
          </Flex>
        </Flex>

        <Flex my={4} flexDirection="column">
          <Flex mb={5} centerContent flexDirection="column">
            <Button variant="primary" small onClick={() => setShowNot4(!showNot4)}>
              {showNot4 ? 'Hide' : 'Show'}
            </Button>
            {showNot4 && (
              <Notification mt={3} variant="success">
                This is a success notification bold.
              </Notification>
            )}
          </Flex>
        </Flex>

        <Flex my={4} flexDirection="column">
          <Flex mb={5} centerContent flexDirection="column">
            <Button variant="primary" small onClick={() => setShowNot5(!showNot5)}>
              {showNot5 ? 'Hide' : 'Show'}
            </Button>
            {showNot5 && (
              <Notification mt={3} variant="warning" fontWeight={5}>
                This is a warning notification bold.
              </Notification>
            )}
          </Flex>
        </Flex>

        <SectionTitle my={5}>Typical use case:</SectionTitle>
        <Paragraph my={3}>TODO</Paragraph>
      </Flex>
    </Flex>
  )
})
export {}
