import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
import { Flex } from '../Flex/Flex'
import { Caption } from '../Typography/Typography'
import { Icon } from '../Icon/Icon'

export interface ProgressbarProps {
  bgColor: string
  percentCompleted: number
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
  text-align: center;
  background-color: ${({ completed }) => (completed == 100 ? theme.colors.success : theme.colors.primary)};

  transition: all 0.5s;
`

const LoadingCircle = styled.div<{ completed: boolean }>`
  animation: ${theme.keyframes.rotationClockwise} 2s forwards linear infinite;
  border: 5px solid #fff;
  border-radius: 50%;
  border-top-color: ${theme.colors.primaryLight};

  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  ${({ completed }) =>
    completed
      ? css`
          border-color: ${theme.colors.success};
        `
      : css``}

  transition: .5s all;

  ${Icon} {
    opacity: ${({ completed }) => (completed ? 1 : 0)};
    font-size: ${({ completed }) => (completed ? theme.fontSizes[6] : theme.fontSizes[5])};
    transition: 0.5s all;
    animation: ${theme.keyframes.rotationCounterclockwise} 2s forwards linear infinite;
  }
`

export const Progressbar: React.FC<ProgressbarProps> = (props: ProgressbarProps) => {
  return (
    <Flex width={6} flexDirection="column" centerContent>
      {props.circle && (
        <LoadingCircle completed={props.percentCompleted == 100}>
          <Icon type="doneAll" fontSize={5} textColor="success" />
        </LoadingCircle>
      )}
      <ProgressBar>
        <Filler completed={props.percentCompleted} />
      </ProgressBar>
      <Flex width="100%" justifyContent="space-between" py={2}>
        <Caption letterSpacing={1} fontWeight={5}>
          Loading ...
        </Caption>
        <Caption letterSpacing={1} fontWeight={5}>
          {props.percentCompleted}%
        </Caption>
      </Flex>
    </Flex>
  )
}
