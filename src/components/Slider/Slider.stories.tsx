import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'
import { Flex } from '../Flex/Flex'
import { Paragraph, Title } from '../Typography/Typography'
import { Space } from '../../../.storybook/properties'
import { Slider } from './Slider'

storiesOf('Base/Components', module).add('Slider', () => {
  const [sliderValue1, setSliderValue1] = useState('50')
  const [sliderValue2, setSliderValue2] = useState('50')
  const [sliderValue3, setSliderValue3] = useState('50')

  const handleSlide1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue1(event.target.value)
  }

  const handleSlide2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue2(event.target.value)
  }

  const handleSlide3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue3(event.target.value)
  }

  return (
    <Flex m={4} p={4} flexDirection="column">
      <Title mt={5} mb={3}>
        Default Slider
      </Title>
      <Flex py={3} my={3} flexDirection="column" maxWidth={6}>
        <Slider min={0} max={100} value={sliderValue1} onChange={handleSlide1} />
      </Flex>

      <Title mt={5} mb={3}>
        Labeled slider
      </Title>
      <Flex py={3} my={3} flexDirection="column" maxWidth={6}>
        <Slider
          min={0}
          max={100}
          value={sliderValue2}
          onChange={handleSlide2}
          label={`Default slider value: ${sliderValue2}`}
        />
      </Flex>

      <Title mt={5} mb={3}>
        Labeled slider step any
      </Title>
      <Flex py={3} my={3} flexDirection="column" maxWidth={6}>
        <Slider
          min="0"
          max="100"
          value={sliderValue3}
          onChange={handleSlide3}
          label={`Default slider value: ${sliderValue3}`}
          step="0.01"
        />
      </Flex>

      <Flex py={3} my={3} flexDirection="column" maxWidth={6}>
        <Paragraph>Tickmarks are not implemented due to lack of support for it from all major browsers</Paragraph>
      </Flex>

      <Title mt={6}>Button properties:</Title>
      <Flex flexWrap="wrap">
        <Space />
      </Flex>
    </Flex>
  )
})
