import React from 'react'

import { storiesOf } from '@storybook/react'

import { Tag } from './Tag'
import { Flex } from '../Flex/Flex'
import { Title } from '../Typography/Typography'
import { useState } from 'react'

storiesOf('Base/Components', module).add('Tag', () => {
  const [tag1, setTag1] = useState(true)
  const [tag2, setTag2] = useState(true)
  const [tag3, setTag3] = useState(true)
  const [tag4, setTag4] = useState(true)
  const [tag5, setTag5] = useState(true)
  const [tag6, setTag6] = useState(true)

  return (
    <Flex p={5} flexDirection="column">
      <Title m={4}>Tags :</Title>

      <Flex flexWrap="wrap" p={3}>
        <Tag mr={3} variant="primary">
          Primary/default tag
        </Tag>
        <Tag mr={3} variant="secondary">
          Secondary tag
        </Tag>
        <Tag mr={3} variant="success">
          Success tag
        </Tag>
        <Tag mr={3} variant="warning">
          Warning tag
        </Tag>
        <Tag mr={3} variant="transparent">
          Transparent tag
        </Tag>
        <Tag mr={3} variant="cancel">
          Cancel tag
        </Tag>
      </Flex>

      <Title m={4}>Removable tags (onRemove prop):</Title>
      <Flex flexWrap="wrap" p={3}>
        {tag1 ? (
          <Tag mr={3} variant="primary" onRemove={() => setTag1(false)}>
            Primary/default tag
          </Tag>
        ) : null}
        {tag2 ? (
          <Tag mr={3} variant="secondary" onRemove={() => setTag2(false)}>
            Secondary tag
          </Tag>
        ) : null}
        {tag3 ? (
          <Tag mr={3} variant="success" onRemove={() => setTag3(false)}>
            Success tag
          </Tag>
        ) : null}
        {tag4 ? (
          <Tag mr={3} variant="transparent" onRemove={() => setTag4(false)}>
            Transparent tag
          </Tag>
        ) : null}
        {tag5 ? (
          <Tag mr={3} variant="warning" onRemove={() => setTag5(false)}>
            Warning tag
          </Tag>
        ) : null}
        {tag6 ? (
          <Tag mr={3} variant="cancel" onRemove={() => setTag6(false)}>
            Cancel tag
          </Tag>
        ) : null}
      </Flex>
    </Flex>
  )
})
