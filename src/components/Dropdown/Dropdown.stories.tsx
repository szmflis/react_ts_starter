import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'

import { Flex } from '../Flex/Flex'
import { Title } from '../Typography/Typography'
import { Dropdown } from './Dropdown'
import { DropdownList } from './DropdownList'

storiesOf('Base/Components', module).add('Dropdown', () => {
  return (
    <Flex p={5} flexDirection="column" width="100vw">
      <Dropdown icon="menu">this is a child</Dropdown>
    </Flex>
  )
})

// more of this
