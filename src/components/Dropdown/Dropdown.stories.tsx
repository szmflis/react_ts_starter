import React from 'react'

import { storiesOf } from '@storybook/react'

import { Flex } from '../Flex/Flex'
import { AnchorLink } from '../Typography/Typography'
import { Dropdown } from './Dropdown'

storiesOf('Base/Components', module).add('Dropdown', () => {
  return (
    <Flex p={5} flexDirection="column" width="100vw">
      <Dropdown icon="menu">
        <ul>
          <li>
            <AnchorLink href="https://www.google.com" noDecoration>
              This is some google link
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="https://www.amazon.com" noDecoration>
              This is some amazon link
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="https://www.reddit.com" noDecoration>
              This is some reddit link
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="https://www.github.com" noDecoration p="1rem">
              This is some really long github link
            </AnchorLink>
          </li>
        </ul>
      </Dropdown>
    </Flex>
  )
})
