import React from 'react'

import { storiesOf } from '@storybook/react'

import { Icon } from './Icon'
import { Flex } from '../Flex/Flex'
import { Paragraph, Title } from '../Typography/Typography'

storiesOf('Base/Assets', module).add('Icon', () => (
  <Flex p={5} flexDirection="column">
    <Title mb={6}>Icon example:</Title>
    <Flex>
      <Flex boxShadow="mdShadow_1" p="2rem" m={3} centerContent flexDirection="column">
        <Paragraph pb={2}>microchip (Box Icons)</Paragraph>
        <Flex centerContent m={3}>
          <Icon type="microchip" fontSize={7} m={3} />
          <Icon type="microchip" fontSize={6} m={3} />
          <Icon type="microchip" fontSize={5} m={3} />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="microchip" fontSize={7} m={3} textColor="success" />
          <Icon type="microchip" fontSize={6} m={3} textColor="success" />
          <Icon type="microchip" fontSize={5} m={3} textColor="success" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="microchip" fontSize={7} m={3} textColor="warning" />
          <Icon type="microchip" fontSize={6} m={3} textColor="warning" />
          <Icon type="microchip" fontSize={5} m={3} textColor="warning" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="microchip" fontSize={7} m={3} textColor="error" />
          <Icon type="microchip" fontSize={6} m={3} textColor="error" />
          <Icon type="microchip" fontSize={5} m={3} textColor="error" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="microchip" fontSize={7} m={3} textColor="primary" />
          <Icon type="microchip" fontSize={6} m={3} textColor="primary" />
          <Icon type="microchip" fontSize={5} m={3} textColor="primary" />
        </Flex>
      </Flex>

      <Flex boxShadow="mdShadow_1" p="2rem" m={3} centerContent flexDirection="column">
        <Paragraph pb={2}>arrowRepeat (Bootstrap Icons) </Paragraph>
        <Flex centerContent m={3}>
          <Icon type="arrowRepeat" fontSize={7} m={3} />
          <Icon type="arrowRepeat" fontSize={6} m={3} />
          <Icon type="arrowRepeat" fontSize={5} m={3} />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="arrowRepeat" fontSize={7} m={3} textColor="success" />
          <Icon type="arrowRepeat" fontSize={6} m={3} textColor="success" />
          <Icon type="arrowRepeat" fontSize={5} m={3} textColor="success" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="arrowRepeat" fontSize={7} m={3} textColor="warning" />
          <Icon type="arrowRepeat" fontSize={6} m={3} textColor="warning" />
          <Icon type="arrowRepeat" fontSize={5} m={3} textColor="warning" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="arrowRepeat" fontSize={7} m={3} textColor="error" />
          <Icon type="arrowRepeat" fontSize={6} m={3} textColor="error" />
          <Icon type="arrowRepeat" fontSize={5} m={3} textColor="error" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="arrowRepeat" fontSize={7} m={3} textColor="primary" />
          <Icon type="arrowRepeat" fontSize={6} m={3} textColor="primary" />
          <Icon type="arrowRepeat" fontSize={5} m={3} textColor="primary" />
        </Flex>
      </Flex>

      <Flex boxShadow="mdShadow_1" p="2rem" m={3} centerContent flexDirection="column">
        <Paragraph pb={2}>github (Vsc Icons) </Paragraph>
        <Flex centerContent m={3}>
          <Icon type="github" fontSize={7} m={3} />
          <Icon type="github" fontSize={6} m={3} />
          <Icon type="github" fontSize={5} m={3} />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="github" fontSize={7} m={3} textColor="success" />
          <Icon type="github" fontSize={6} m={3} textColor="success" />
          <Icon type="github" fontSize={5} m={3} textColor="success" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="github" fontSize={7} m={3} textColor="warning" />
          <Icon type="github" fontSize={6} m={3} textColor="warning" />
          <Icon type="github" fontSize={5} m={3} textColor="warning" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="github" fontSize={7} m={3} textColor="error" />
          <Icon type="github" fontSize={6} m={3} textColor="error" />
          <Icon type="github" fontSize={5} m={3} textColor="error" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="github" fontSize={7} m={3} textColor="primary" />
          <Icon type="github" fontSize={6} m={3} textColor="primary" />
          <Icon type="github" fontSize={5} m={3} textColor="primary" />
        </Flex>
      </Flex>

      <Flex boxShadow="mdShadow_1" p="2rem" m={3} centerContent flexDirection="column">
        <Paragraph pb={2}>settings (Md Icons) </Paragraph>
        <Flex centerContent m={3}>
          <Icon type="settings" fontSize={7} m={3} />
          <Icon type="settings" fontSize={6} m={3} />
          <Icon type="settings" fontSize={5} m={3} />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="settings" fontSize={7} m={3} textColor="success" />
          <Icon type="settings" fontSize={6} m={3} textColor="success" />
          <Icon type="settings" fontSize={5} m={3} textColor="success" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="settings" fontSize={7} m={3} textColor="warning" />
          <Icon type="settings" fontSize={6} m={3} textColor="warning" />
          <Icon type="settings" fontSize={5} m={3} textColor="warning" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="settings" fontSize={7} m={3} textColor="error" />
          <Icon type="settings" fontSize={6} m={3} textColor="error" />
          <Icon type="settings" fontSize={5} m={3} textColor="error" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="settings" fontSize={7} m={3} textColor="primary" />
          <Icon type="settings" fontSize={6} m={3} textColor="primary" />
          <Icon type="settings" fontSize={5} m={3} textColor="primary" />
        </Flex>
      </Flex>
    </Flex>

    <Title my={6}>Icon example with hover:</Title>
    <Flex>
      <Flex boxShadow="mdShadow_1" p="2rem" m={3} centerContent flexDirection="column">
        <Paragraph pb={2}>bgFade</Paragraph>
        <Flex centerContent m={3}>
          <Icon type="microchip" fontSize={7} m={3} variant="bgFade" />
          <Icon type="microchip" fontSize={6} m={3} variant="bgFade" />
          <Icon type="microchip" fontSize={5} m={3} variant="bgFade" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="microchip" fontSize={7} m={3} textColor="success" variant="bgFade" />
          <Icon type="microchip" fontSize={6} m={3} textColor="success" variant="bgFade" />
          <Icon type="microchip" fontSize={5} m={3} textColor="success" variant="bgFade" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="microchip" fontSize={7} m={3} textColor="warning" variant="bgFade" />
          <Icon type="microchip" fontSize={6} m={3} textColor="warning" variant="bgFade" />
          <Icon type="microchip" fontSize={5} m={3} textColor="warning" variant="bgFade" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="microchip" fontSize={7} m={3} textColor="error" variant="bgFade" />
          <Icon type="microchip" fontSize={6} m={3} textColor="error" variant="bgFade" />
          <Icon type="microchip" fontSize={5} m={3} textColor="error" variant="bgFade" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="microchip" fontSize={7} m={3} textColor="primary" variant="bgFade" />
          <Icon type="microchip" fontSize={6} m={3} textColor="primary" variant="bgFade" />
          <Icon type="microchip" fontSize={5} m={3} textColor="primary" variant="bgFade" />
        </Flex>
      </Flex>

      <Flex boxShadow="mdShadow_1" p="2rem" m={3} centerContent flexDirection="column">
        <Paragraph pb={2}>spin</Paragraph>
        <Flex centerContent m={3}>
          <Icon type="arrowRepeat" fontSize={7} m={3} variant="spin" />
          <Icon type="arrowRepeat" fontSize={6} m={3} variant="spin" />
          <Icon type="arrowRepeat" fontSize={5} m={3} variant="spin" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="arrowRepeat" fontSize={7} m={3} textColor="success" variant="spin" />
          <Icon type="arrowRepeat" fontSize={6} m={3} textColor="success" variant="spin" />
          <Icon type="arrowRepeat" fontSize={5} m={3} textColor="success" variant="spin" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="arrowRepeat" fontSize={7} m={3} textColor="warning" variant="spin" />
          <Icon type="arrowRepeat" fontSize={6} m={3} textColor="warning" variant="spin" />
          <Icon type="arrowRepeat" fontSize={5} m={3} textColor="warning" variant="spin" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="arrowRepeat" fontSize={7} m={3} textColor="error" variant="spin" />
          <Icon type="arrowRepeat" fontSize={6} m={3} textColor="error" variant="spin" />
          <Icon type="arrowRepeat" fontSize={5} m={3} textColor="error" variant="spin" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="arrowRepeat" fontSize={7} m={3} textColor="primary" variant="spin" />
          <Icon type="arrowRepeat" fontSize={6} m={3} textColor="primary" variant="spin" />
          <Icon type="arrowRepeat" fontSize={5} m={3} textColor="primary" variant="spin" />
        </Flex>
      </Flex>

      <Flex boxShadow="mdShadow_1" p="2rem" m={3} centerContent flexDirection="column">
        <Paragraph pb={2}>scale 1.2</Paragraph>
        <Flex centerContent m={3}>
          <Icon type="github" fontSize={7} m={3} variant="scale" />
          <Icon type="github" fontSize={6} m={3} variant="scale" />
          <Icon type="github" fontSize={5} m={3} variant="scale" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="github" fontSize={7} m={3} textColor="success" variant="scale" />
          <Icon type="github" fontSize={6} m={3} textColor="success" variant="scale" />
          <Icon type="github" fontSize={5} m={3} textColor="success" variant="scale" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="github" fontSize={7} m={3} textColor="warning" variant="scale" />
          <Icon type="github" fontSize={6} m={3} textColor="warning" variant="scale" />
          <Icon type="github" fontSize={5} m={3} textColor="warning" variant="scale" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="github" fontSize={7} m={3} textColor="error" variant="scale" />
          <Icon type="github" fontSize={6} m={3} textColor="error" variant="scale" />
          <Icon type="github" fontSize={5} m={3} textColor="error" variant="scale" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="github" fontSize={7} m={3} textColor="primary" variant="scale" />
          <Icon type="github" fontSize={6} m={3} textColor="primary" variant="scale" />
          <Icon type="github" fontSize={5} m={3} textColor="primary" variant="scale" />
        </Flex>
      </Flex>

      <Flex boxShadow="mdShadow_1" p="2rem" m={3} centerContent flexDirection="column">
        <Paragraph pb={2}>scaleRotate</Paragraph>
        <Flex centerContent m={3}>
          <Icon type="settings" fontSize={7} m={3} variant="scaleRotate" />
          <Icon type="settings" fontSize={6} m={3} variant="scaleRotate" />
          <Icon type="settings" fontSize={5} m={3} variant="scaleRotate" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="settings" fontSize={7} m={3} textColor="success" variant="scaleRotate" />
          <Icon type="settings" fontSize={6} m={3} textColor="success" variant="scaleRotate" />
          <Icon type="settings" fontSize={5} m={3} textColor="success" variant="scaleRotate" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="settings" fontSize={7} m={3} textColor="warning" variant="scaleRotate" />
          <Icon type="settings" fontSize={6} m={3} textColor="warning" variant="scaleRotate" />
          <Icon type="settings" fontSize={5} m={3} textColor="warning" variant="scaleRotate" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="settings" fontSize={7} m={3} textColor="error" variant="scaleRotate" />
          <Icon type="settings" fontSize={6} m={3} textColor="error" variant="scaleRotate" />
          <Icon type="settings" fontSize={5} m={3} textColor="error" variant="scaleRotate" />
        </Flex>
        <Flex centerContent m={3}>
          <Icon type="settings" fontSize={7} m={3} textColor="primary" variant="scaleRotate" />
          <Icon type="settings" fontSize={6} m={3} textColor="primary" variant="scaleRotate" />
          <Icon type="settings" fontSize={5} m={3} textColor="primary" variant="scaleRotate" />
        </Flex>
      </Flex>
    </Flex>
  </Flex>
))
