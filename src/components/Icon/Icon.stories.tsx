import React from 'react'

import { storiesOf } from '@storybook/react'

import { Icon } from './Icon'
import { Box } from '../Box/Box'
import { Flex } from '../Flex/Flex'
import { Caption, Paragraph, Subtitle, Title } from '../Typography/Typography'

storiesOf('Base/Assets', module).add('Icon', () => (
  <Flex p={5} flexDirection="column">
    <Title mb={6}>Icon example:</Title>
    <Flex>
      <Flex boxShadow="mdShadow_1" p="2rem" m={3} centerContent flexDirection="column">
        <Paragraph pb={2}>rocket</Paragraph>
        <Flex centerContent m={3}>
          <Icon type="rocket" fontSize={7} m={3} />
          <Icon type="rocket" fontSize={6} m={3} />
          <Icon type="rocket" fontSize={5} m={3} />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="rocket" fontSize={7} m={3} textColor="primary" />
          <Icon type="rocket" fontSize={6} m={3} textColor="primary" />
          <Icon type="rocket" fontSize={5} m={3} textColor="primary" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="rocket" fontSize={7} m={3} textColor="warning" />
          <Icon type="rocket" fontSize={6} m={3} textColor="warning" />
          <Icon type="rocket" fontSize={5} m={3} textColor="warning" />
        </Flex>
      </Flex>

      <Flex boxShadow="mdShadow_1" p="2rem" m={3} centerContent flexDirection="column">
        <Paragraph pb={2}>rocket hover</Paragraph>
        <Flex centerContent m={3}>
          <Icon type="rocket" fontSize={7} m={3} />
          <Icon type="rocket" fontSize={6} m={3} />
          <Icon type="rocket" fontSize={5} m={3} />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="rocket" fontSize={7} m={3} textColor="primary" />
          <Icon type="rocket" fontSize={6} m={3} textColor="primary" />
          <Icon type="rocket" fontSize={5} m={3} textColor="primary" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="rocket" fontSize={7} m={3} textColor="warning" />
          <Icon type="rocket" fontSize={6} m={3} textColor="warning" />
          <Icon type="rocket" fontSize={5} m={3} textColor="warning" />
        </Flex>
      </Flex>
    </Flex>
  </Flex>
))
