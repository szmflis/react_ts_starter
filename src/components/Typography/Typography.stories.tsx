import React from 'react'
import { StaticRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react'

import { Color, Space, Typography } from '../../../.storybook/properties'
import { Box } from '../Box/Box'
import { Flex } from '../Flex/Flex'
import { AnchorLink, Caption, Paragraph, RouterLink, SectionTitle, Subtitle, Title } from './Typography'

storiesOf('Base/Typography', module)
  .addDecorator((story) => <StaticRouter location="projects">{story()}</StaticRouter>)
  .add('Properties', () => (
    <Box m={4}>
      <Title m={4}>Typography properties:</Title>
      <Flex flexWrap="wrap">
        <Space />
        <Typography />
        <Color />
      </Flex>
    </Box>
  ))
  .add('Title', () => (
    <Box>
      <Box m={4} p={4}>
        <Title>H1 - Title</Title>
      </Box>
      <Box m={4} p={4} bg="primary">
        <Title textColor="white">H1 - Title</Title>
      </Box>
    </Box>
  ))
  .add('SectionTitle', () => (
    <Box>
      <Box m={4} p={4}>
        <SectionTitle>H2 - Section title</SectionTitle>
      </Box>
      <Box m={4} p={4} bg="primary">
        <SectionTitle textColor="white">H2 - Section title</SectionTitle>
      </Box>
    </Box>
  ))
  .add('Subtitle', () => (
    <Box>
      <Box m={4} p={4}>
        <Subtitle>H3 - Subtitle</Subtitle>
      </Box>
      <Box m={4} p={4} bg="primary">
        <Subtitle textColor="white">H3 - Subtitle</Subtitle>
      </Box>
    </Box>
  ))
  .add('Paragraph', () => (
    <Box>
      <Box m={4} p={4} maxWidth={400}>
        <Paragraph>
          P - As part of quarter 2’s target to increase conversion across the UK site we believe there are major gains
          to be found improving the basket. GA shows that basket has the highest dropout rate of any page. Some basket
          abandonment is invitable but we beleive can reduce friction on this page.
        </Paragraph>
      </Box>
      <Box m={4} p={4} bg="primary" maxWidth={400}>
        <Paragraph textColor="white">
          P - As part of quarter 2’s target to increase conversion across the UK site we believe there are major gains
          to be found improving the basket. GA shows that basket has the highest dropout rate of any page. Some basket
          abandonment is invitable but we beleive can reduce friction on this page.
        </Paragraph>
      </Box>
    </Box>
  ))
  .add('Caption', () => (
    <Box>
      <Box m={4} p={4} maxWidth={400}>
        <Caption>
          P - As part of quarter 2’s target to increase conversion across the UK site we believe there are major gains
          to be found improving the basket. GA shows that basket has the highest dropout rate of any page. Some basket
          abandonment is invitable but we beleive can reduce friction on this page.
        </Caption>
      </Box>
      <Box m={4} p={4} bg="primary" maxWidth={400}>
        <Caption textColor="white">
          P - As part of quarter 2’s target to increase conversion across the UK site we believe there are major gains
          to be found improving the basket. GA shows that basket has the highest dropout rate of any page. Some basket
          abandonment is invitable but we beleive can reduce friction on this page.
        </Caption>
      </Box>
    </Box>
  ))
  .add('RouterLink', () => (
    <Box>
      <Box m={4} p={4}>
        <RouterLink to="">Link - This is a router link</RouterLink>
      </Box>
      <Box m={4} p={4} bg="primary">
        <RouterLink reverse to="">
          Link - This is a router link
        </RouterLink>
      </Box>

      <Box m={4} p={4}>
        <RouterLink to="" noDecoration>
          Link - This is an undecorated router link
        </RouterLink>
      </Box>
      <Box m={4} p={4} bg="primary">
        <RouterLink reverse to="" noDecoration>
          Link - This is an undecorated router link
        </RouterLink>
      </Box>
    </Box>
  ))
  .add('AnchorLink', () => (
    <Box>
      <Box m={4} p={4}>
        <AnchorLink href="">A - This is an anchor link</AnchorLink>
      </Box>
      <Box m={4} p={4} bg="primary">
        <AnchorLink reverse href="">
          A - This is an anchor link
        </AnchorLink>
      </Box>
      <Box m={4} p={4}>
        <AnchorLink href="" noDecoration>
          A - This is an undecorated anchor link
        </AnchorLink>
      </Box>
      <Box m={4} p={4} bg="primary">
        <AnchorLink reverse href="" noDecoration>
          A - This is an undecorated anchor link
        </AnchorLink>
      </Box>
    </Box>
  ))
