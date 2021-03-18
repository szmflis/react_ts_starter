import React, { ChangeEvent, InputHTMLAttributes, KeyboardEventHandler, useEffect, useRef, useState } from 'react'
import { IconType } from '../Icon/RawIcon'
import { Icon } from '../Icon/Icon'
import { SearchContainer, StyledInput, StyledSuggestion, SuggestionsContainer } from './SearchStyles'
import { SpaceProps } from 'styled-system'
import { Flex } from '../Flex/Flex'
import { Button } from '../Button/Button'

export interface RawSearchProps extends InputHTMLAttributes<HTMLInputElement>, SpaceProps {
  apiCb: (query: string) => Promise<any>
  setValue: (param: string) => void
  icon?: IconType
}

export interface Suggestion {
  value: string
  additionalInfo?: string
}
export const Search: React.FC<RawSearchProps> = (props: RawSearchProps) => {
  /* TODO: add onscreen keyboard and speech to text */
  const [query, setQuery] = useState<string>('')
  const [suggestions, setSuggestions] = useState<Array<Suggestion>>([])
  const [selectedSuggestion, setSelectedSuggestion] = useState<number>(0)

  const containerRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    const container = containerRef.current
    if (container && !container.contains(event.target as Node)) {
      setSuggestions([])
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const setQueries = (newValue: string) => {
    setQuery(newValue)
    props.setValue(newValue)
  }

  const handleQueryChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setQueries(newValue)

    if (newValue.length > 2) {
      const apiSuggestionsResponse = await props.apiCb(newValue)
      setSuggestions(apiSuggestionsResponse)
    } else setSuggestions([])
  }

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setQueries(suggestion.value)
    setSuggestions([])
  }

  const handleKeyPress: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (suggestions.length === 0) return
    if (suggestions.length === 1) {
      setSelectedSuggestion(0)
      return
    }

    const keyCode = event.key
    const currentSuggestion = selectedSuggestion /* avoidance of selecting array element based on async value */

    if (keyCode === 'ArrowUp' && currentSuggestion !== 0) {
      setSelectedSuggestion(currentSuggestion - 1)
      setQueries(suggestions[currentSuggestion - 1].value)
    } else if (keyCode === 'ArrowDown' && currentSuggestion !== suggestions.length - 1) {
      setSelectedSuggestion(currentSuggestion + 1)
      setQueries(suggestions[currentSuggestion + 1].value)
    } else if (keyCode === 'Enter') {
      setQueries(suggestions[currentSuggestion].value)
      setSuggestions([])
    } else if (keyCode === 'Escape') {
      setSuggestions([])
    }
  }

  const clearInput = () => {
    setSuggestions([])
    setQueries('')
  }

  return (
    <SearchContainer ref={containerRef} onKeyDown={handleKeyPress} {...props} dropdownActive={suggestions.length !== 0}>
      {props.icon && <Icon type={props.icon} fontSize="inherit" />}
      <StyledInput
        type={props.type || 'text'}
        name={props.name}
        value={query}
        onChange={handleQueryChange}
        onKeyPress={props.onKeyPress}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        autoFocus={props.autoFocus}
        disabled={props.disabled}
        onBlur={props.onBlur}
        title={props.title}
        required={props.required}
        pattern={props.pattern}
        maxLength={props.maxLength}
        minLength={props.minLength}
      />
      {suggestions && suggestions.length > 0 ? (
        <SuggestionsContainer>
          {suggestions.map((suggestion: Suggestion, index) => (
            <StyledSuggestion
              className="suggestion"
              key={suggestion.value}
              id={suggestion.value}
              onClick={() => handleSuggestionClick(suggestion)}
              onMouseOver={() => setSelectedSuggestion(index)}
              isSelected={index === selectedSuggestion}
            >
              {suggestion.value}
            </StyledSuggestion>
          ))}
          <Flex p={3} centerContent>
            <Flex width="40%" justifyContent="space-evenly">
              <Button icon="search" variant="success" type="submit" />
              <Button icon="undo" variant="cancel" onClick={clearInput} />
              <Button icon="bug" variant="warning" />
              {/* TODO bug button handler*/}
            </Flex>
          </Flex>
        </SuggestionsContainer>
      ) : null}
    </SearchContainer>
  )
}
