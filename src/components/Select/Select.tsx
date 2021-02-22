import React, { useState, SelectHTMLAttributes, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Flex } from '../Flex/Flex'
import { theme } from '../../styles/theme'
import { Icon } from '../Icon/Icon'

/*
  TODO
  add label option
  split into raw & styled
  figure out better usage (defaulting option etc..)
*/

const Wrapper = styled(Flex)`
  position: relative;
`

const RotatingChevron = styled(Icon)<{ isActive: boolean }>`
  transform: ${({ isActive }) => (isActive ? 'rotate(0deg)' : 'rotate(180deg)')};
`

const DropdownButton = styled.button<{ isActive: boolean }>`
  cursor: pointer;
  outline: none;
  font-family: inherit;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 150px;
  height: 35px;
  padding: 0.3rem 1rem;
  background-color: ${({ isActive }) => (isActive ? theme.colors.greyLight : theme.colors.white)};

  border: 1px solid ${theme.colors.primary};
  border-radius: 1rem;

  font-size: ${theme.fontSizes[3]};

  &:hover {
    background-color: ${theme.colors.primaryLightest};
  }

  transition: background-color 0.2s;
`

const Dropdown = styled.ul<{ isActive: boolean }>`
  position: absolute;
  top: 75%;
  min-width: 150px;
  list-style: none;
  padding: 0;

  border: 1px solid ${theme.colors.primaryLightest};

  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  transition: opacity 0.2s;

  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
`

const DropdownOption = styled.li<{ selectedOption: number; index: number }>`
  padding: 0.75rem;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.primaryLightest};
  }
`

export interface Option {
  display: string
  value: string
}

export interface RawSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  data: Array<Option>
  selectedOption: number
  setSelectedOption: any
  label?: string
}

const useOnClickOutside = (ref: React.RefObject<HTMLUListElement>, callback: any) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      callback(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, callback])
}

export const Select: React.FC<RawSelectProps> = ({ selectedOption, setSelectedOption, data }) => {
  const [isActive, setIsActive] = useState(false)
  const clickOutsideRef = useRef<HTMLUListElement>(null)

  useOnClickOutside(clickOutsideRef, () => setIsActive(false))

  const handleOptionClick = (index: number) => {
    setSelectedOption(index)
    setIsActive(false)
  }

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation()
    setIsActive(!isActive)
  }

  return (
    <Wrapper my={5}>
      <DropdownButton isActive={isActive} type="button" onMouseDown={handleButtonClick}>
        {data[selectedOption].display}
        <RotatingChevron type="chevron" textColor="primary" fontSize={4} isActive={isActive} />
      </DropdownButton>
      <Dropdown isActive={isActive} ref={clickOutsideRef}>
        {data.map((point: Option, index: number) => (
          <DropdownOption
            index={index}
            key={index}
            selectedOption={selectedOption}
            onClick={() => handleOptionClick(index)}
          >
            {point.display}
          </DropdownOption>
        ))}
      </Dropdown>
    </Wrapper>
  )
}
