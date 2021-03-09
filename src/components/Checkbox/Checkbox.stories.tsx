import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'

import { Checkbox } from './Checkbox'
import { Flex } from '../Flex/Flex'
import { Title } from '../Typography/Typography'
import { Space } from '../../../.storybook/properties'

storiesOf('Base/Components', module).add('Checkbox', () => {
  const [check1, setCheck1] = useState(true)
  const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)
  const [check4, setCheck4] = useState(true)
  const [check5, setCheck5] = useState(false)
  const [check6, setCheck6] = useState(false)

  return (
    <Flex p={5} flexDirection="column" width="100vw">
      <Title my={5}>Checkboxes default:</Title>
      <Flex flexDirection="column" p={2} maxWidth={9}>
        <Checkbox
          name="checked"
          checked={check1}
          onChange={() => {
            setCheck1(!check1)
          }}
          p={1}
          my={3}
        >
          Checked checkbox
        </Checkbox>
        <Checkbox
          name="disabled"
          checked={check2}
          disabled
          onChange={() => {
            setCheck2(!check2)
          }}
          p={1}
          my={3}
        >
          Disabled checkbox
        </Checkbox>
        <Checkbox
          name="unchecked"
          checked={check3}
          onChange={() => {
            setCheck3(!check3)
          }}
          p={1}
          my={3}
        >
          Unchecked checkbox
        </Checkbox>
      </Flex>
      <Flex flexDirection="column" p={2} maxWidth={9}>
        <Checkbox
          name="checked"
          checked={check4}
          onChange={() => {
            setCheck4(!check4)
          }}
          p={1}
          my={3}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Checkbox>
        <Checkbox
          name="disabled"
          checked={check5}
          disabled
          onChange={() => {
            setCheck5(!check5)
          }}
          p={1}
          my={3}
        >
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
          dolores eos qui ratione voluptatem sequi nesciunt.
        </Checkbox>
        <Checkbox
          name="unchecked"
          checked={check6}
          onChange={() => {
            setCheck6(!check6)
          }}
          p={1}
          my={3}
        >
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque.
        </Checkbox>
      </Flex>

      <Title mt={6}>Checkbox properties:</Title>
      <Flex flexWrap="wrap">
        <Space />
      </Flex>
    </Flex>
  )
})
