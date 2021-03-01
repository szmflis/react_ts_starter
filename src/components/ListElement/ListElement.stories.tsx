import React from 'react'

import { storiesOf } from '@storybook/react'

import { Flex } from '../Flex/Flex'
import { ListElementLinkWrapper } from './ListElementLinkWrapper'
import { ListContainer } from '../ListContainer/ListContainer'

storiesOf('Base/Components', module).add('ListElement', () => {
  return (
    <Flex p={5} flexDirection="column" width="100vw">
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
      </ListContainer>
    </Flex>
  )
})
