import React from 'react'

import { storiesOf } from '@storybook/react'

import { Flex } from '../Flex/Flex'
import { Title } from '../Typography/Typography'
import { Notification } from './Notification'

storiesOf('Base/Components', module).add('Notification', () => {
  return (
    <Flex p={5} flexDirection="column" width="100vw" alignItems="center">
      <Flex flexDirection="column" mt={5} p={5} bg="white" width={9} boxShadow="mdShadow_1">
        <Title mb={5} mt={2}>
          Notification Element
        </Title>
        <Notification text="This is default notification." my={3} visible />
        <Notification
          text="Notifications have modifiable typography."
          my={3}
          textColor="success"
          fontSize={3}
          fontWeight={6}
          visible
        />
        <Notification visible text="Success type notification" my={3} variant="success" />
        <Notification visible text="Info type notification" my={3} variant="info" />
        <Notification visible text="Primary type notification" my={3} variant="primary" />
        <Notification visible text="Warning type notification" my={3} variant="warning" fontWeight={3} />
        <Title my={5}>Use case in composite stories</Title>
      </Flex>
    </Flex>
  )
})
