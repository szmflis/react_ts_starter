import React from 'react'

import { storiesOf } from '@storybook/react'

import { Flex } from '../Flex/Flex'
import { Dropdown } from './Dropdown'
import { ListContainer } from '../ListContainer/ListContainer'
import { Paragraph, Title } from '../Typography/Typography'
import { Layout, Space } from '../../../.storybook/properties'
import { ListElementButton } from '../ListElement/ListElement'
import { Icon } from '../Icon/Icon'
import { Button, NavigationButton } from '../Button/Button'

storiesOf('Base/Components', module).add('Dropdown', () => {
  return (
    <Flex p={5} flexDirection="column" width="100vw" centerContent>
      <Flex p={3} maxWidth={9} flexDirection="column" boxShadow="mdShadow_1">
        <Title py={3}>Dropdown element</Title>
        <Paragraph py={3}>
          Dropdown is container attached to a button. Will display anything put inside it once button was clicked.
          Doesnt require parent component to handle its open/closed state.
        </Paragraph>

        <Flex justifyContent="center">
          <Dropdown icon="menu" width={6}>
            <ListContainer borderBottom="1px solid rgba(0,0,0,0.2)">
              <ListElementButton>
                Settings <Icon type="settings" />
              </ListElementButton>
              <ListElementButton>
                Profile <Icon type="profile" />
              </ListElementButton>
              <ListElementButton>
                Dashboard <Icon type="dashboard" />
              </ListElementButton>
              <ListElementButton>
                External Sites <Icon type="external" />
              </ListElementButton>
              <ListElementButton>
                Some other very long link <Icon type="doneAll" />
              </ListElementButton>
            </ListContainer>
            <ListContainer borderBottom="1px solid rgba(0,0,0,0.2)">
              <ListElementButton>
                Add <Icon type="done" />
              </ListElementButton>
              <ListElementButton>
                Check info <Icon type="info" />
              </ListElementButton>
              <ListElementButton>
                Some other link <Icon type="chevron" />
              </ListElementButton>
            </ListContainer>
          </Dropdown>

          <Dropdown icon="dashboard" width={7}>
            <ListContainer borderBottom="1px solid rgba(0,0,0,0.2)">
              <ListElementButton>
                Settings <Icon type="settings" />
              </ListElementButton>
              <ListElementButton>
                Profile <Icon type="profile" />
              </ListElementButton>
              <ListElementButton>
                Dashboard <Icon type="dashboard" />
              </ListElementButton>
              <ListElementButton>
                External Sites <Icon type="external" />
              </ListElementButton>
              <ListElementButton>
                Some other very long link <Icon type="doneAll" />
              </ListElementButton>
            </ListContainer>
            <Flex p={3} justifyContent="space-around">
              <NavigationButton icon="apple">Apple</NavigationButton>
              <NavigationButton icon="google">Google</NavigationButton>
              <NavigationButton icon="amazon">Amazon</NavigationButton>
            </Flex>
            <Flex p={3} justifyContent="space-around" borderBottom="1px solid rgba(0,0,0,0.2)">
              <NavigationButton icon="reddit">Reddit</NavigationButton>
              <NavigationButton icon="linkedin">Linkedin</NavigationButton>
            </Flex>
            <Flex p={3} flexDirection="column" borderBottom="1px solid rgba(0,0,0,0.2)">
              <Title mb={4}>Lorem ipsum</Title>
              <Paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </Paragraph>
            </Flex>
            <Flex justifyContent="space-around" p={3}>
              <Button icon="info" variant="primary" />
              <Button icon="dashboard" variant="success" />
              <Button icon="external" variant="warning" />
              <Button icon="settings" variant="cancel" />
            </Flex>
          </Dropdown>
        </Flex>

        <Title py={3}>Props</Title>
        <Paragraph py={3}>
          Dropdown contains props for layout - those apply to the container part of it. So styling width through props
          would change the width of the actual popup - not the button. Button is stylable through all typical props of
          the button - so different icons, variants etc.
        </Paragraph>
        <Paragraph py={3}>
          Dropdown also can be styled by space props - these apply to the button. So margins/paddings etc.
        </Paragraph>
      </Flex>

      <Title mt={6}>Dropdown properties:</Title>
      <Flex flexWrap="wrap">
        <Space />
        <Layout />
      </Flex>
    </Flex>
  )
})

export {}
