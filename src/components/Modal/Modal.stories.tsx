import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'

import { Flex } from '../Flex/Flex'
import { Modal } from './Modal'
import { Button } from '../Button/Button'
import { Paragraph, SectionTitle, Title } from '../Typography/Typography'
import { ListContainer } from '../ListContainer/ListContainer'
import { ListElement } from '../ListElement/ListElement'
import Layout from '../../layout/Layout'
import { Border, Color, Position, Shadow, Space, Typography } from '../../../.storybook/properties'

storiesOf('Base/Components', module).add('Modal', () => {
  const [isOpen, setIsOpen] = useState(false)

  /*
    TODO find out why storybook does not render #portal defined in index.html
    remove temporary hack below.
  */
  const newNode = document.createElement('div')
  newNode.setAttribute('id', 'portal')
  const rootNode = document.getElementById('root')
  if (rootNode) rootNode.after(newNode)

  return (
    <Flex p={5} flexDirection="column" width="100vw" centerContent>
      <Button onClick={() => setIsOpen(true)} variant="primary" icon="menu">
        Open modal
      </Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} width="90%">
        <Flex flexDirection="column" p={3}>
          <Title my={3}>Modal component</Title>
          <Paragraph my={3}>
            By default has min width of 360px and a button to close the modal. Anything can be put into the modal, its
            practically just a container.
          </Paragraph>
          <Paragraph my={3}>
            Available parameters:
            <ListContainer ml={5}>
              <ListElement>open: boolean - weather or not to render the modal.</ListElement>
              <ListElement>
                {'onClose: () => void - pretty much always a useState function setting ' +
                  'the open: boolean parameter to false.'}
              </ListElement>
              <ListElement>{'hideOverlay?: boolean - weather or not to render the modal overlay.'}</ListElement>
              <ListElement>
                {'All the other styled-system props listed in this story - they apply' +
                  ' to the modal container - not modal overlay'}
              </ListElement>
            </ListContainer>
          </Paragraph>
          <Flex justifyContent="center" py={4}>
            <Button icon="doneAll" variant="success" onClick={() => setIsOpen(false)}>
              close
            </Button>
          </Flex>
        </Flex>
      </Modal>

      <SectionTitle mt={6}>Modal properties:</SectionTitle>
      <Flex flexWrap="wrap">
        <Border />
        <Space />
        <Layout />
        <Typography />
        <Position />
        <Color />
        <Shadow />
      </Flex>
    </Flex>
  )
})
