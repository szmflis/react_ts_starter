import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'

import { Checkbox } from './Checkbox'
import { Flex } from '../Flex/Flex'
import { Title } from '../Typography/Typography'

storiesOf('Base/Components', module).add('Checkbox', () => {
  const [check1, setCheck1] = useState(true)
  const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)
  const [check4, setCheck4] = useState(true)
  const [check5, setCheck5] = useState(false)
  const [check6, setCheck6] = useState(false)

  return (
    <Flex p={5} flexDirection="column" width="100vw">
      <Title>Checkboxes example:</Title>
      <Flex
        flexDirection="column"
        mt={5}
        border="2px solid"
        borderColor="primaryLight"
        borderRadius={1}
        p={2}
        maxWidth={5}
      >
        <Checkbox
          name="checked"
          checked={check1}
          onChange={() => {
            setCheck1(!check1)
          }}
          label="Checked checkbox"
          p={1}
          my={1}
        />
        <Checkbox
          name="disabled"
          checked={check2}
          disabled
          onChange={() => {
            setCheck2(!check2)
          }}
          label="Disabled checkbox"
          p={1}
          my={1}
        />
        <Checkbox
          name="unchecked"
          checked={check3}
          onChange={() => {
            setCheck3(!check3)
          }}
          label="Unchecked checkbox"
          p={1}
          my={1}
        />
      </Flex>
      <Flex
        flexDirection="column"
        mt={5}
        border="2px solid"
        borderColor="primaryLight"
        borderRadius={1}
        p={2}
        maxWidth={9}
      >
        <Checkbox
          name="checked"
          checked={check4}
          onChange={() => {
            setCheck4(!check4)
          }}
          label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          p={1}
          my={1}
        />
        <Checkbox
          name="disabled"
          checked={check5}
          disabled
          onChange={() => {
            setCheck5(!check5)
          }}
          label="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
          p={1}
          my={1}
        />
        <Checkbox
          name="unchecked"
          checked={check6}
          onChange={() => {
            setCheck6(!check6)
          }}
          label="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque."
          p={1}
          my={1}
        />
      </Flex>
    </Flex>
  )
})
