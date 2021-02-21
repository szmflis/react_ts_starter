import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'

import { Flex } from '../Flex/Flex'
import { Switch } from './Switch'
import { Paragraph, Title } from '../Typography/Typography'

storiesOf('Base/Components', module).add('Switch', () => {
  const [input1, setInput1] = useState(false)
  const [input2, setInput2] = useState(false)
  const [input3, setInput3] = useState(false)
  const [input4, setInput4] = useState(false)
  const [input5, setInput5] = useState(false)

  return (
    <Flex p={5} flexDirection="column" width="100vw" alignItems="center">
      <Flex flexDirection="column" mt={5} p={5} bg="white" width={9} boxShadow="mdShadow_1">
        <Title mb={5} mt={2}>
          Switch element
        </Title>

        <Switch checked={input1} onChange={() => setInput1(!input1)} my={4} />
        <Switch checked={input2} onChange={() => setInput2(!input2)} my={4} label="Switch with label" />
        <Switch
          checked={input3}
          onChange={() => setInput3(!input3)}
          my={4}
          label="Switch with bold label "
          fontWeight={700}
        />
        <Switch
          checked={input4}
          onChange={() => setInput4(!input4)}
          my={4}
          label="Switch with bigger text"
          fontSize={3}
        />
        <Switch
          checked={input5}
          onChange={() => setInput5(!input5)}
          my={4}
          label="Switch with bigger bold text"
          fontSize={3}
          fontWeight={700}
        />

        <Paragraph mt={5} mb={2}>
          The switch itself is unmodifiable - its alaways a white ball inside greyed background. The spacing between
          other elements is modifiable via space props.
        </Paragraph>
        <Paragraph my={2}>The label is modifiable via all of typography props.</Paragraph>
        <Paragraph my={2}>
          Usage of switch element (while making no apparent sense) is possible without corresponding label.
        </Paragraph>
      </Flex>
    </Flex>
  )
})
