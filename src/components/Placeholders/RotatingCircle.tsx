import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { layout, LayoutProps, space, SpaceProps } from 'styled-system'

interface RotatingCircleProps extends SpaceProps, LayoutProps {}

export const RotatingCircle = styled.div<RotatingCircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 70px;
  width: 70px;

  border: 5px solid #fff;
  border-radius: 50%;
  border-top-color: ${theme.colors.primaryLight};

  animation: ${theme.keyframes.rotationClockwise} 2s forwards linear infinite;

  ${layout};
  ${space};
`
