import React from 'react'

import { storiesOf } from '@storybook/react'

import { Flex } from '../Flex/Flex'
import { ListElement, ListElementButton } from './ListElement'
import { ListContainer } from '../ListContainer/ListContainer'
import { Icon } from '../Icon/Icon'
import { Paragraph, Title } from '../Typography/Typography'

storiesOf('Base/Components', module).add('ListElement', () => {
  return (
    <Flex width="100vw" centerContent>
      <Flex p={3} maxWidth={9} flexDirection="column" boxShadow="mdShadow_1">
        <Title p={3}>List element</Title>
        <Paragraph p={3}>
          ListElement and ListContainer are respectively li and ul element with added props of all sorts for paddings,
          margins, sizes, layouts and so on. The whole list of props is at the bottom of the page.
        </Paragraph>
        <Paragraph p={3}>
          Additionally there is ListElementButton which is a list element styled to look like a button, used for
          navigation or other onClick actions.
        </Paragraph>
        <Title p={3}>Examples:</Title>
        <Paragraph p={4}>Default ListContainer with default ListElements</Paragraph>
        <ListContainer width={6} p={3} ml={4}>
          <ListElement>This is a list element 1</ListElement>
          <ListElement>This is a list element 2</ListElement>
          <ListElement>This is a list element 3</ListElement>
          <ListElement>This is a list element 4</ListElement>
          <ListElement>This is a list element 5</ListElement>
          <ListElement>This is a list element 6</ListElement>
        </ListContainer>
        <Paragraph p={4}>ListContainer with list-style none with default ListElements</Paragraph>
        <ListContainer width={6} p={3} listStyle="none" ml={4}>
          <ListElement>This is a list element 1</ListElement>
          <ListElement>This is a list element 2</ListElement>
          <ListElement>This is a list element 3</ListElement>
          <ListElement>This is a list element 4</ListElement>
          <ListElement>This is a list element 5</ListElement>
          <ListElement>This is a list element 6</ListElement>
        </ListContainer>
        <Paragraph p={4}>ListContainer with some added styling with default ListElements</Paragraph>
        <ListContainer width={6} p={3} boxShadow="mdShadow_1" listStyle="none" ml={4}>
          <ListElement>This is a list element 1</ListElement>
          <ListElement>This is a list element 2</ListElement>
          <ListElement>This is a list element 3</ListElement>
          <ListElement>This is a list element 4</ListElement>
          <ListElement>This is a list element 5</ListElement>
          <ListElement>This is a list element 6</ListElement>
        </ListContainer>
        <Paragraph p={4}>Default ListContainer with styled ListElements</Paragraph>
        <ListContainer width={6} p={3} ml={4}>
          <ListElement fontWeight={5}>This is a list element 1</ListElement>
          <ListElement fontWeight={5}>This is a list element 2</ListElement>
          <ListElement fontWeight={5}>This is a list element 3</ListElement>
          <ListElement fontWeight={5}>This is a list element 4</ListElement>
          <ListElement fontWeight={5}>This is a list element 5</ListElement>
          <ListElement fontWeight={5}>This is a list element 6</ListElement>
        </ListContainer>

        <Paragraph p={4}>Default ListContainer with ListElementButtons</Paragraph>
        <ListContainer width={6} p={3}>
          <ListElementButton>This is a list element button 1</ListElementButton>
          <ListElementButton>This is a list element button 2</ListElementButton>
          <ListElementButton>This is a list element button 3</ListElementButton>
          <ListElementButton>This is a list element button 4</ListElementButton>
          <ListElementButton>This is a list element button 5</ListElementButton>
          <ListElementButton>This is a list element button 6</ListElementButton>
        </ListContainer>

        <Paragraph p={4}>Default ListContainer with ListElementButtons with icons</Paragraph>
        <ListContainer maxWidth={7} p={3}>
          <ListElementButton>
            This is a list element button 1 <Icon type="settings" />
          </ListElementButton>
          <ListElementButton>
            This is a list element button 2 <Icon type="settings" />
          </ListElementButton>
          <ListElementButton>
            This is a list element button 3 <Icon type="settings" />
          </ListElementButton>
          <ListElementButton>
            This is a list element button 4 <Icon type="settings" />
          </ListElementButton>
          <ListElementButton>
            This is a list element button 5 <Icon type="settings" />
          </ListElementButton>
          <ListElementButton>
            This is a list element button 6 <Icon type="settings" />
          </ListElementButton>
        </ListContainer>

        <Paragraph p={4}>Default ListContainer with ListElementButtons with icons reversed</Paragraph>
        <ListContainer maxWidth={7} p={3}>
          <ListElementButton reverse>
            This is a list element button 1 <Icon type="settings" />
          </ListElementButton>
          <ListElementButton reverse>
            This is a list element button 2 <Icon type="settings" />
          </ListElementButton>
          <ListElementButton reverse>
            This is a list element button 3 <Icon type="settings" />
          </ListElementButton>
          <ListElementButton reverse>
            This is a list element button 4 <Icon type="settings" />
          </ListElementButton>
          <ListElementButton reverse>
            This is a list element button 5 <Icon type="settings" />
          </ListElementButton>
          <ListElementButton reverse>
            This is a list element button 6 <Icon type="settings" />
          </ListElementButton>
        </ListContainer>
      </Flex>
    </Flex>
  )
})
