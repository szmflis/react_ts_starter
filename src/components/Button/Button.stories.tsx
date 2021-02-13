import React from 'react'

import { storiesOf } from '@storybook/react'
import { Flex } from '../Flex/Flex'
import { Title } from '../Typography/Typography'
import { Box } from '../Box/Box'
import { Button } from './Button'

const onClick = (): void => {
  console.log('On click trigerred')
  return
}

storiesOf('Base/Components', module).add('Button', () => (
  <Flex m={4} p={4} flexDirection="column">
    <Flex flexWrap="wrap">
      <Button variant="primary" mx={4} onClick={onClick}>
        Primary
      </Button>
      <Button variant="secondary" mx={4} onClick={onClick}>
        Primary Light
      </Button>
      <Button variant="success" mx={4} onClick={onClick}>
        Success
      </Button>
      <Button variant="transparent" mx={4} onClick={onClick}>
        transparent
      </Button>
      <Button variant="warning" mx={4} onClick={onClick}>
        warning
      </Button>
      <Button variant="disabled" mx={4} onClick={onClick}>
        Disabled
      </Button>
      <Button variant="cancel" mx={4} onClick={onClick}>
        Cancel
      </Button>
      <Button variant="primary" mx={4} onClick={onClick}>
        Cancel
      </Button>
    </Flex>
    <Flex flexWrap="wrap">
      <Button variant="primary" mx={4} onClick={onClick} icon="github">
        Primary
      </Button>
      <Button variant="secondary" mx={4} onClick={onClick} icon="github">
        Primary Light
      </Button>
      <Button variant="success" mx={4} onClick={onClick} icon="github">
        Success
      </Button>
      <Button variant="transparent" mx={4} onClick={onClick} icon="github">
        transparent
      </Button>
      <Button variant="warning" mx={4} onClick={onClick} icon="github">
        warning
      </Button>
      <Button variant="disabled" mx={4} onClick={onClick} icon="github">
        Disabled
      </Button>
      <Button variant="cancel" mx={4} onClick={onClick} icon="github">
        Cancel
      </Button>
      <Button variant="primary" mx={4} onClick={onClick} icon="github">
        Cancel
      </Button>
    </Flex>
  </Flex>
))
