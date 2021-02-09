import React from 'react'

import { storiesOf } from '@storybook/react'

import { Border, Color, Layout, Position, Shadow, Space, Typography, Flexbox } from '../../../.storybook/properties'
import { Flex } from '../Flex/Flex'
import { Paragraph, Title } from '../Typography/Typography'
import { Box } from '../Box/Box'

storiesOf('Base/Layout', module).add('Flex', () => (
  <Box m={4}>
    <Title my={4}>Flex example:</Title>

    <Flex p="1rem" m="1rem" size={6} bg="greyLight" boxShadow="mdShadow_1">
      <Box bg="primary" size={1} />
      <Box bg="warning" size={1} />
      <Box bg="success" size={1} />
      <Box bg="danger" size={1} />
      <Box bg="black" size={1} />
      <Box bg="error" size={1} />
      <Box bg="blue" size={1} />
      <Box bg="greyDarkest" size={1} />
    </Flex>

    <Flex flexWrap="wrap"></Flex>

    <Flex flexWrap="wrap"></Flex>

    <Flex flexWrap="wrap"></Flex>

    <Title mt={6}>Box properties:</Title>
    <Flex flexWrap="wrap">
      <Border />
      <Space />
      <Layout />
      <Typography />
      <Position />
      <Color />
      <Shadow />
    </Flex>
    <Title mt={6}>Flex properties:</Title>
    <Flexbox />
  </Box>
))
