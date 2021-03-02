import React from 'react'

import { storiesOf } from '@storybook/react'

import { Flex } from '../Flex/Flex'
import { ListElementLinkWrapper } from './ListElementLinkWrapper'
import { ListContainer } from '../ListContainer/ListContainer'
import { Paragraph, Title } from '../Typography/Typography'

storiesOf('Base/Components', module).add('ListElement', () => {
  return (
    <Flex width="100vw" centerContent>
      <Flex p={5} flexDirection="column" boxShadow="mdShadow_1">
        <Title my={5}>List Element Link Wrapper</Title>
        <ListContainer width={8}>
          <ListElementLinkWrapper href="https://www.github.com" icon="github" reverse>
            Link to github
          </ListElementLinkWrapper>

          <ListElementLinkWrapper href="https://www.google.com" icon="google" reverse>
            Link to google
          </ListElementLinkWrapper>

          <ListElementLinkWrapper href="https://www.amazon.com" icon="amazon" reverse>
            Link to amazon
          </ListElementLinkWrapper>
          <ListElementLinkWrapper href="https://www.amazon.com" icon="amazon">
            Link to amazon reversed order
          </ListElementLinkWrapper>
          <ListElementLinkWrapper href="https://www.amazon.com">Link to amazon without icon</ListElementLinkWrapper>
          <Paragraph my={5}>
            This element is mostly supposed to represent links to external sites in Dropdown component.
          </Paragraph>
        </ListContainer>
      </Flex>
    </Flex>
  )
})
