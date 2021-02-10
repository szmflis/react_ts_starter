import React from 'react'

import { storiesOf } from '@storybook/react'

import { Border, Color, Layout, Position, Shadow, Space, Typography, Flexbox } from '../../../.storybook/properties'
import { Flex } from '../Flex/Flex'
import { SectionTitle } from '../Typography/Typography'
import { Box } from '../Box/Box'

storiesOf('Base/Layout', module).add('Flex', () => (
  <Box m={4}>
    <Flex flexWrap="wrap">
      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex default</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          alignContent="flex-start"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>

      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex align center</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          alignContent="center"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>

      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex align end</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          alignContent="flex-end"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>

      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex align stretch</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          alignContent="stretch"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>

      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex align space-between</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          alignContent="space-between"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>

      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex align space-around</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          alignContent="space-around"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>

      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex justify center</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          justifyContent="center"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>

      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex justify flex-end</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          justifyContent="flex-end"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>

      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex justify space-around</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          justifyContent="space-around"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>
      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex justify space-between</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>
      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex justify space-evenly</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          justifyContent="space-evenly"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>

      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex centerContent</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          centerContent
          alignContent="center"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>

      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex column default</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          alignContent="flex-start"
          flexDirection="column"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>

      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex column align center</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          alignContent="center"
          flexDirection="column"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>

      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex column align end</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          alignContent="flex-end"
          flexDirection="column"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>

      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex column align stretch</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          alignContent="stretch"
          flexDirection="column"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>

      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex column align space-between</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          alignContent="space-between"
          flexDirection="column"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>

      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex column align space-around</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          alignContent="space-around"
          flexDirection="column"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>

      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex column justify center</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          justifyContent="center"
          flexDirection="column"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>

      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex column justify flex-end</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          justifyContent="flex-end"
          flexDirection="column"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>

      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex column justify space-around</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          justifyContent="space-around"
          flexDirection="column"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>
      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex column justify space-between</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          justifyContent="space-between"
          flexDirection="column"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>
      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex column justify space-evenly</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          justifyContent="space-evenly"
          flexDirection="column"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>

      <Flex flexDirection="column" centerContent>
        <SectionTitle mt={4}>Flex column centerContent</SectionTitle>
        <Flex
          p="1rem"
          m="1rem"
          width={7}
          height={6}
          bg="greyLight"
          boxShadow="mdShadow_1"
          flexWrap="wrap"
          centerContent
          alignContent="center"
          flexDirection="column"
        >
          <Box bg="primary" size={2} />
          <Box bg="warning" size={2} />
          <Box bg="success" size={2} />
          <Box bg="danger" size={2} />
          <Box bg="black" size={2} />
          <Box bg="error" size={2} />
          <Box bg="yellow" size={2} />
          <Box bg="cyan" size={2} />
          <Box bg="blue" size={2} />
          <Box bg="chocolate" size={2} />
          <Box bg="darkgreen" size={2} />
          <Box bg="dodgerblue" size={2} />
          <Box bg="gold" size={2} />
        </Flex>
      </Flex>
    </Flex>

    <SectionTitle mt={6}>Box properties:</SectionTitle>
    <Flex flexWrap="wrap">
      <Border />
      <Space />
      <Layout />
      <Typography />
      <Position />
      <Color />
      <Shadow />
    </Flex>
    <SectionTitle mt={6}>Flex properties:</SectionTitle>
    <Flexbox />
  </Box>
))
