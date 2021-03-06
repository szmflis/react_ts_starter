import React, { HTMLAttributes, useState, useRef, useEffect } from 'react'
import { Button } from '../Button/Button'
import { IconType } from '../Icon/RawIcon'

export interface RawDropdownProps extends HTMLAttributes<HTMLDivElement> {
  icon: IconType
}

export const RawDropdown: React.FC<RawDropdownProps> = (props: RawDropdownProps) => {
  const [open, setOpen] = useState(false)
  const contentContainerRef = useRef<HTMLDivElement>(null)
  const buttonContainerRef = useRef<HTMLDivElement>(null)

  /*
    handleClickOutside gets mouseclick event, if that click happended outside of
    this component wrapper it will set open state to false - closing the dropdown.

    Since the button and dropdown element are both inside the container 
    clicking on them will not close the dropdown.
  */

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    const contentContainer = contentContainerRef.current
    const buttonContainer = buttonContainerRef.current

    if (contentContainer && buttonContainer) {
      if (!contentContainer.contains(event.target as Node) && !buttonContainer.contains(event.target as Node)) {
        setOpen(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={props.className}>
      <div className="buttonContainer" ref={buttonContainerRef}>
        <Button variant="transparent" icon={props.icon} onClick={() => setOpen(!open)} />
      </div>
      {open && (
        <div className="content-container" ref={contentContainerRef}>
          {props.children}
        </div>
      )}
    </div>
  )
}

/*
  This component provides a button and dropdown container.
  Should be used as a wrapper for some content (children prop) we want to appear in the dropdown.
*/
