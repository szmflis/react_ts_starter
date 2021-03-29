import { RawModal, RawModalProps } from './RawModal'
import { FlexProps } from '../Flex/Flex'
import styled from 'styled-components'
import { border, color, flexbox, layout, position, shadow, space, typography } from 'styled-system'
import { theme } from '../../styles/theme'

export interface ModalProps extends RawModalProps, FlexProps {}

export const Modal = styled(RawModal)<ModalProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.colors.white};
  padding: 1rem;
  z-index: 1000;

  ${space};
  ${color};
  ${shadow};
  ${layout};
  ${border};
  ${flexbox};
  ${position};
  ${typography};
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;

  animation: 0.2s ${theme.keyframes.fadeIn};
`
