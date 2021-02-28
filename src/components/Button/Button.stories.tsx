import React from 'react'

import { storiesOf } from '@storybook/react'
import { Flex } from '../Flex/Flex'
import { Title } from '../Typography/Typography'
import { Button } from './Button'

const onClick = (): void => {
  console.log('On click trigerred')
  return
}

storiesOf('Base/Components', module).add('Button', () => (
  <Flex m={4} p={4} flexDirection="column">
    <Title mt={5} mb={3}>
      Default Buttons
    </Title>
    <Flex flexWrap="wrap" py={3} my={3}>
      <Button variant="primary" mx={4} onClick={onClick}>
        Primary
      </Button>
      <Button variant="secondary" mx={4} onClick={onClick}>
        Primary Light
      </Button>
      <Button variant="success" mx={4} onClick={onClick}>
        Success
      </Button>
      <Button variant="warning" mx={4} onClick={onClick}>
        warning
      </Button>
      <Button variant="cancel" mx={4} onClick={onClick}>
        Cancel
      </Button>
      <Button variant="transparent" mx={4} onClick={onClick}>
        transparent
      </Button>
      <Button variant="disabled" mx={4} onClick={onClick}>
        Disabled
      </Button>
    </Flex>

    <Title mt={5} mb={3}>
      Icon&text Buttons
    </Title>
    <Flex flexWrap="wrap" py={3} my={3}>
      <Button variant="primary" mx={4} onClick={onClick} icon="info">
        Primary
      </Button>
      <Button variant="secondary" mx={4} onClick={onClick} icon="launch">
        Primary Light
      </Button>
      <Button variant="success" mx={4} onClick={onClick} icon="done">
        Success
      </Button>
      <Button variant="warning" mx={4} onClick={onClick} icon="doneAll">
        warning
      </Button>
      <Button variant="cancel" mx={4} onClick={onClick} icon="delete">
        Cancel
      </Button>
      <Button variant="transparent" mx={4} onClick={onClick} icon="github">
        transparent
      </Button>
      <Button variant="disabled" mx={4} onClick={onClick} icon="microchip">
        Disabled
      </Button>
    </Flex>

    <Title mt={5} mb={3}>
      Small Buttons
    </Title>
    <Flex flexWrap="wrap" py={3} my={3}>
      <Button variant="primary" mx={4} onClick={onClick} small>
        Primary
      </Button>
      <Button variant="secondary" mx={4} onClick={onClick} small>
        Primary Light
      </Button>
      <Button variant="success" mx={4} onClick={onClick} small>
        Success
      </Button>
      <Button variant="warning" mx={4} onClick={onClick} small>
        warning
      </Button>
      <Button variant="cancel" mx={4} onClick={onClick} small>
        Cancel
      </Button>
      <Button variant="transparent" mx={4} onClick={onClick} small>
        transparent
      </Button>
      <Button variant="disabled" mx={4} onClick={onClick} small>
        Disabled
      </Button>
    </Flex>

    <Title mt={5} mb={3}>
      Small Buttons With Icons
    </Title>
    <Flex flexWrap="wrap" py={3} my={3}>
      <Button variant="primary" mx={4} onClick={onClick} icon="arrowRepeat" small>
        Primary
      </Button>
      <Button variant="secondary" mx={4} onClick={onClick} icon="done" small>
        Primary Light
      </Button>
      <Button variant="success" mx={4} onClick={onClick} icon="doneAll" small>
        Success
      </Button>
      <Button variant="warning" mx={4} onClick={onClick} icon="launch" small>
        warning
      </Button>
      <Button variant="cancel" mx={4} onClick={onClick} icon="delete" small>
        Cancel
      </Button>
      <Button variant="transparent" mx={4} onClick={onClick} icon="info" small>
        transparent
      </Button>
      <Button variant="disabled" mx={4} onClick={onClick} icon="microchip" small>
        Disabled
      </Button>
    </Flex>

    <Title mt={5} mb={3}>
      Icons only buttons
    </Title>
    <Flex flexWrap="wrap" py={3} my={3}>
      <Button variant="primary" mx={4} onClick={onClick} icon="arrowRepeat" />
      <Button variant="secondary" mx={4} onClick={onClick} icon="checkedSquare" />
      <Button variant="success" mx={4} onClick={onClick} icon="doneAll" />
      <Button variant="warning" mx={4} onClick={onClick} icon="microchip" />
      <Button variant="cancel" mx={4} onClick={onClick} icon="delete" />
      <Button variant="transparent" mx={4} onClick={onClick} icon="launch" />
      <Button variant="disabled" mx={4} onClick={onClick} icon="square" />
    </Flex>
  </Flex>
))
