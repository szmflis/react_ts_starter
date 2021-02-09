import React from 'react'

import { storiesOf } from '@storybook/react'

import { Border, Color, Layout, Position, Shadow, Space, Typography } from '../../../.storybook/properties'
import { Flex } from '../Flex/Flex'
import { Paragraph, Title } from '../Typography/Typography'
import { Box } from './Box'

storiesOf('Base/Layout', module).add('Box', () => (
  <Box m={4}>
    <Title my={4}>Box example:</Title>

    <Flex flexWrap="wrap">
      <Box p="3rem" m="1rem" bg="primaryDarkest">
        <Title textColor="white">Primary Darkest Box</Title>
      </Box>
      <Box p="3rem" m="1rem" bg="primaryDark">
        <Title textColor="white">Primary Dark Box</Title>
      </Box>
      <Box p="3rem" m="1rem" bg="primary">
        <Title textColor="white">Primary Box</Title>
      </Box>
      <Box p="3rem" m="1rem" bg="primaryLight">
        <Title color="primary">Primary Light Box</Title>
      </Box>
      <Box p="3rem" m="1rem" bg="primaryLightest">
        <Title>Primary Lightest Box</Title>
      </Box>
    </Flex>

    <Flex flexWrap="wrap">
      <Box p="3rem" m="1rem" borderWidth={2} borderStyle="solid" borderColor="primaryDarkest">
        <Title>Primary Darkest Border box</Title>
      </Box>
      <Box p="3rem" m="1rem" borderWidth={2} borderStyle="solid" borderColor="primaryDark">
        <Title>Primary Dark Border box</Title>
      </Box>
      <Box p="3rem" m="1rem" borderWidth={2} borderStyle="solid" borderColor="primary">
        <Title>Primary Border box</Title>
      </Box>
      <Box p="3rem" m="1rem" borderWidth={2} borderStyle="solid" borderColor="primaryLight">
        <Title>Primary Light Border box</Title>
      </Box>
      <Box p="3rem" m="1rem" borderWidth={2} borderStyle="solid" borderColor="primaryLightest">
        <Title>Primary Lightest Border box</Title>
      </Box>
    </Flex>

    <Flex flexWrap="wrap">
      <Box p="3rem" m="1rem" borderRadius={3} bg="greyDarkest">
        <Title>GreyDarkest Radius box</Title>
      </Box>
      <Box p="3rem" m="1rem" borderRadius={3} bg="greyDark">
        <Title>GreyDark Radius box</Title>
      </Box>
      <Box p="3rem" m="1rem" borderRadius={3} bg="grey">
        <Title>Grey Radius box</Title>
      </Box>
      <Box p="3rem" m="1rem" borderRadius={3} bg="greyLight">
        <Title>GreyLight Radius box</Title>
      </Box>
      <Box p="3rem" m="1rem" borderRadius={3} bg="greyLightest">
        <Title>GreyLightest Radius box</Title>
      </Box>
    </Flex>

    <Flex flexWrap="wrap">
      <Flex size={6} m="1rem" boxShadow="mdShadow_1" centerContent>
        <Paragraph>Material Design Shadow 1</Paragraph>
      </Flex>
      <Flex size={6} m="1rem" boxShadow="mdShadow_2" centerContent>
        <Paragraph>Material Design Shadow 2</Paragraph>
      </Flex>
      <Flex size={6} m="1rem" boxShadow="mdShadow_3" centerContent>
        <Paragraph>Material Design Shadow 3</Paragraph>
      </Flex>
      <Flex size={6} m="1rem" boxShadow="mdShadow_4" centerContent>
        <Paragraph>Material Design Shadow 4</Paragraph>
      </Flex>
      <Flex size={6} m="1rem" boxShadow="mdShadow_5" centerContent>
        <Paragraph>Material Design Shadow 5</Paragraph>
      </Flex>
    </Flex>

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
  </Box>
))
