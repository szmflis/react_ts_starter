import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'
import parse from 'html-react-parser'

import { Flex } from '../Flex/Flex'
import { Title } from '../Typography/Typography'
import { RichTextEditor } from './RichTextEditor'

storiesOf('Base/Components', module).add('RichTextEditor', () => {
  const [richTextEditorValue, setRichTextEditorValue] = useState('')

  const handleRichTextEditorChange = (value: string) => {
    setRichTextEditorValue(value)
  }

  return (
    <Flex width="100vw" centerContent>
      <Flex p={5} flexDirection="column" boxShadow="mdShadow_1" width={8} minHeight={8} m={2}>
        <Title my={5}>Quill Editor</Title>
        <RichTextEditor value={richTextEditorValue} onChange={handleRichTextEditorChange} />
      </Flex>
      <Flex p={5} flexDirection="column" boxShadow="mdShadow_1" width={8} minHeight={8} m={2}>
        {parse(richTextEditorValue)}
      </Flex>
    </Flex>
  )
})
