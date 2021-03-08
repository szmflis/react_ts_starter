import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
import { Flex } from '../Flex/Flex'
import { Caption } from '../Typography/Typography'
import { Icon } from '../Icon/Icon'
import { RotatingCircle } from '../Placeholders/RotatingCircle'
import { LayoutProps, SpaceProps } from 'styled-system'

export interface ProgressbarProps extends SpaceProps, LayoutProps {
  percentCompleted: number
  bgColor?: string
  circle?: boolean
}

const ProgressBar = styled.div`
  width: 100%;
  height: 25px;
  padding: 3px;

  background-color: ${theme.colors.grey};
  border-radius: 5px;
`

const Filler = styled.div<{ completed: number }>`
  height: 100%;
  width: ${({ completed }) => completed}%;

  border-radius: inherit;
  background-color: ${({ completed }) => (completed == 100 ? theme.colors.success : theme.colors.primary)};

  transition: all 0.5s;
`

const LoadingCircle = styled(RotatingCircle)<{ completed: boolean }>`
  ${({ completed }) =>
    completed
      ? css`
          border-color: ${theme.colors.success};
        `
      : css``}

  transition: .4s all;

  ${Icon} {
    opacity: ${({ completed }) => (completed ? 1 : 0)};
    font-size: ${({ completed }) => (completed ? theme.fontSizes[6] : theme.fontSizes[5])};
    animation: ${theme.keyframes.rotationCounterclockwise} 2s forwards linear infinite;
    transition: 0.4s all;
  }
`

export const Progressbar: React.FC<ProgressbarProps> = (props: ProgressbarProps) => {
  return (
    <Flex flexDirection="column" centerContent {...props}>
      {props.circle && (
        <LoadingCircle completed={props.percentCompleted == 100} marginBottom={5}>
          <Icon type="doneAll" fontSize={5} textColor="success" />
        </LoadingCircle>
      )}
      <ProgressBar>
        <Filler completed={props.percentCompleted} />
      </ProgressBar>
      <Flex width="100%" justifyContent="space-between" py={2}>
        <Caption letterSpacing={1} fontWeight={5}>
          {props.percentCompleted == 100 ? 'Finished' : 'Loading ...'}
        </Caption>
        <Caption letterSpacing={1} fontWeight={5}>
          {props.percentCompleted}%
        </Caption>
      </Flex>
    </Flex>
  )
}
