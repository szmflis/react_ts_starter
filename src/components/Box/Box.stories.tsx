import React from 'react'

import { storiesOf } from '@storybook/react'

import { Border, Color, Layout, Position, Shadow, Space, Typography } from '../../../.storybook/properties'
import { Flex } from '../Flex/Flex'
import { Title } from '../Typography/Typography'
import { Box } from './Box'

storiesOf('Base/Layout', module).add('Box', () => (
  <Box m={4}>
    <Title my={4}>Box example:</Title>
    <Flex flexWrap="wrap">
      <Box p="3rem" m="1rem" bg="primaryLight">
        <Title>Primary Light box</Title>
      </Box>
      <Box p="3rem" m="1rem" bg="primary" borderRadius={2}>
        <Title>Primary Radius box</Title>
      </Box>
      <Box p="3rem" m="1rem" borderRadius={2} borderWidth={2} borderStyle="solid" borderColor="primaryDark">
        <Title>Primary Radius Border box</Title>
      </Box>
    </Flex>
    <Title my={4}>Box properties:</Title>
    <Flex flexWrap="wrap">
      <Border />
      <Space />
      <Layout />
      <Typography />
      <Position />
      <Color />
      <Shadow />
    </Flex>
  </Box>
))
