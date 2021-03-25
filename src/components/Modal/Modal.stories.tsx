import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'

import { Flex } from '../Flex/Flex'
import { Modal } from './Modal'
import { Button } from '../Button/Button'
storiesOf('Base/Components', module).add('Modal', () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Flex p={5} flexDirection="column" width="100vw" centerContent>
      <Button onClick={() => setIsOpen(true)} variant="primary" icon="menu" />
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Modal children
      </Modal>
    </Flex>
  )
})
