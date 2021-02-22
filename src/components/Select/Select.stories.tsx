import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'

import { Flex } from '../Flex/Flex'
import { Select } from './Select'
import { Title } from '../Typography/Typography'
import { Option } from './Select'

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
]

storiesOf('Base/Components', module).add('Select', () => {
  const [value1, setValue1] = useState(0)

  return (
    <Flex p={5} flexDirection="column" width="100vw" alignItems="center">
      <Flex flexDirection="column" mt={5} p={5} bg="white" width={9} centerContent boxShadow="mdShadow_1">
        <Title mb={5} mt={2}>
          Select element
        </Title>

        <Select data={CarsData} selectedOption={value1} setSelectedOption={setValue1} />
      </Flex>
    </Flex>
  )
})
