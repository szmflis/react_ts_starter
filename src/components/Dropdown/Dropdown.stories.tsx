import React from 'react'

import { storiesOf } from '@storybook/react'

import { Flex } from '../Flex/Flex'
import { Dropdown } from './Dropdown'
import { ListContainer } from '../ListContainer/ListContainer'
import { ListElementLinkWrapper } from '../ListElement/ListElementLinkWrapper'
import { Paragraph, Title } from '../Typography/Typography'
import { Layout, Space } from '../../../.storybook/properties'
import { theme } from '../../styles/theme'
import { AnchorButton } from '../Button/AnchorButton'

storiesOf('Base/Components', module).add('Dropdown', () => {
  return (
    <Flex p={5} flexDirection="column" width="100vw">
      <Title my={4}>Button with a dropdown menu.</Title>
      <Dropdown icon="menu">
        <ListContainer>
          <ListElementLinkWrapper href="https://www.google.com" noDecoration icon="google">
            Link to google
          </ListElementLinkWrapper>
          <ListElementLinkWrapper href="https://www.amazon.com" noDecoration icon="amazon">
            Link to amazon
          </ListElementLinkWrapper>
          <ListElementLinkWrapper href="https://www.github.com" noDecoration icon="github">
            Link to github
          </ListElementLinkWrapper>
          <ListElementLinkWrapper href="https://www.google.com" noDecoration icon="google">
            A very long link to google
          </ListElementLinkWrapper>
        </ListContainer>
      </Dropdown>

      <Title my={4}>With reversed icon-link order:</Title>
      <Dropdown icon="menu">
        <ListContainer>
          <ListElementLinkWrapper href="https://www.google.com" noDecoration icon="google" reverse>
            Link to google
          </ListElementLinkWrapper>
          <ListElementLinkWrapper href="https://www.amazon.com" noDecoration icon="amazon" reverse>
            Link to amazon
          </ListElementLinkWrapper>
          <ListElementLinkWrapper href="https://www.github.com" noDecoration icon="github" reverse>
            Link to github
          </ListElementLinkWrapper>
          <ListElementLinkWrapper href="https://www.google.com" noDecoration icon="google" reverse>
            A very long link to google
          </ListElementLinkWrapper>
        </ListContainer>
      </Dropdown>

      <Title my={4}>Additional elements</Title>
      <Dropdown icon="settings" maxWidth={7}>
        <ListContainer>
          <ListElementLinkWrapper href="https://www.google.com" noDecoration icon="google" reverse>
            Link to google
          </ListElementLinkWrapper>
          <ListElementLinkWrapper href="https://www.amazon.com" noDecoration icon="amazon" reverse>
            Link to amazon
          </ListElementLinkWrapper>
          <ListElementLinkWrapper href="https://www.github.com" noDecoration icon="github" reverse>
            Link to github
          </ListElementLinkWrapper>
          <ListElementLinkWrapper href="https://www.google.com" noDecoration icon="google" reverse>
            A very long link to google
          </ListElementLinkWrapper>
        </ListContainer>
        <Flex p={3} borderTop={`1px solid ${theme.colors.grey}`} justifyContent={'space-evenly'}>
          <AnchorButton href="https://www.reddit.com" icon="reddit" />
          <AnchorButton href="https://www.linkedin.com" icon="linkedin" />
          <AnchorButton href="https://www.apple.com" icon="apple" />
        </Flex>
        <Flex p={3} borderTop={`1px solid ${theme.colors.grey}`} flexDirection="column">
          <Paragraph p={3}>Anything can be put inside of the dropdown.</Paragraph>
          <Paragraph p={3}>
            Dropdown component is practically a button, with a container that becomes visible on click.
          </Paragraph>
        </Flex>
      </Dropdown>

      <Title mt={6}>Dropdown properties:</Title>
      <Flex flexWrap="wrap">
        <Space />
        <Layout />
      </Flex>
    </Flex>
  )
})
