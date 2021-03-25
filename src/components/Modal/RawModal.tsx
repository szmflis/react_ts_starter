import React, { HTMLAttributes } from 'react'
import ReactDOM from 'react-dom'
import { Button } from '../Button/Button'
import { Flex } from '../Flex/Flex'
import { ModalOverlay } from './Modal'

export interface RawModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose: () => void
  hideOverlay?: boolean
}

export const RawModal: React.FC<RawModalProps> = (props: RawModalProps) => {
  if (!props.open) return null

  const portalDiv = document.getElementById('portal')

  return portalDiv
    ? ReactDOM.createPortal(
        <>
          <ModalOverlay />
          <Flex className={props.className} {...props} flexDirection="column">
            <Flex alignItems="center" justifyContent="flex-end">
              <Button icon="close" variant="cancel" onClick={props.onClose} />
            </Flex>
            {props.children}
          </Flex>
        </>,
        portalDiv
      )
    : null
}
