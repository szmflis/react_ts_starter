import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'

import { Flex } from '../Flex/Flex'
import { Select } from './Select'
import { Paragraph, Title } from '../Typography/Typography'
import { Option } from './RawSelect'

const CarsData: Array<Option> = [
  {
    value: 'mercedes',
    display: 'Mercedes',
  },
  {
    value: 'toyota',
    display: 'Toyota',
  },
  {
    value: 'audi',
    display: 'Audi',
  },
  {
    value: 'volkswagen',
    display: 'Volkswagen',
  },
  {
    value: 'volvo',
    display: 'Volvo',
  },
  {
    value: 'nissan',
    display: 'Nissan',
  },
]

const CountryData: Array<Option> = [
  {
    value: 'poland',
    display: 'Poland',
  },
  {
    value: 'france',
    display: 'France',
  },
  {
    value: 'germany',
    display: 'Germany',
  },
  {
    value: 'finland',
    display: 'Finland',
  },
  {
    value: 'norway',
    display: 'Norway',
  },
]

storiesOf('Base/Components', module).add('Select', () => {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(1)
  const [value3, setValue3] = useState(0)
  const [value4, setValue4] = useState(1)

  return (
    <Flex p={5} flexDirection="column" width="100vw" alignItems="center">
      <Flex flexWrap="wrap">
        <Flex boxShadow="mdShadow_1" p={6} m={2} flexDirection="column" centerContent>
          <Title mb={6} mt={2}>
            Default Select element
          </Title>

          <Select data={CarsData} selectedOption={value1} setSelectedOption={setValue1} my={3} />
          <Select data={CarsData} selectedOption={value2} setSelectedOption={setValue2} my={3} />
        </Flex>

        <Flex boxShadow="mdShadow_1" p={5} m={2} flexDirection="column" justifyContent="center">
          <Paragraph my={3}>Selected value at top select: </Paragraph>
          <Paragraph mb={3} textColor="primaryDarkest" fontWeight="600">
            {CarsData[value1].display}
          </Paragraph>
          <Paragraph my={3}>Selected value at bottom select:</Paragraph>
          <Paragraph textColor="primaryDarkest" fontWeight="600">
            {CarsData[value2].display}
          </Paragraph>
        </Flex>
      </Flex>

      <Flex flexWrap="wrap">
        <Flex boxShadow="mdShadow_1" p={6} m={2} flexDirection="column" centerContent>
          <Title mb={6} mt={2}>
            Default Select element
          </Title>

          <Select data={CountryData} selectedOption={value3} setSelectedOption={setValue3} my={3} rect />
          <Select data={CountryData} selectedOption={value4} setSelectedOption={setValue4} my={3} rect />
        </Flex>

        <Flex boxShadow="mdShadow_1" p={5} m={2} flexDirection="column" justifyContent="center">
          <Paragraph my={3}>Selected value at top select: </Paragraph>
          <Paragraph mb={3} textColor="primaryDarkest" fontWeight="600">
            {CountryData[value3].display}
          </Paragraph>
          <Paragraph my={3}>Selected value at bottom select:</Paragraph>
          <Paragraph textColor="primaryDarkest" fontWeight="600">
            {CountryData[value4].display}
          </Paragraph>
        </Flex>
      </Flex>
    </Flex>
  )
})
