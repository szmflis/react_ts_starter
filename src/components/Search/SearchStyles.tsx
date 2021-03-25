import styled, { css } from 'styled-components'
import { space } from 'styled-system'
import { theme } from '../../styles/theme'
/* TODO: change values to use theme in general */
export const SuggestionsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: -1px;
  z-index: 2;

  width: calc(100% + 2px);
  border: 1px solid ${theme.colors.primaryLightest};
  border-radius: 0px 0px 24px 24px;
  border-top: none;
  padding-top: 22px;
  animation: linear 0.3s ${theme.keyframes.fadeInTranslateY};
`

export const SearchContainer = styled.div<{ dropdownActive?: boolean }>`
  position: relative;

  visibility: hidden;

  display: flex;
  align-items: center;

  width: 90%;
  max-width: 584px;
  height: 44px;

  border: 1px solid #dfe1e5;
  border-radius: ${({ dropdownActive }) => (dropdownActive ? '24px 24px 0px 0px' : '24px')};
  padding: 0 1.5rem;
  background-color: ${theme.colors.white};

  &:focus-within {
    border-color: ${theme.colors.primaryLightest};
  }

  ${space};
`

export const StyledInput = styled.input`
  display: flex;
  flex: 100%;
  min-width: 0;

  border: none;
  font-size: 16px;
  margin: 0 1rem;

  &:focus {
    outline: none;
  }
`

export const StyledSuggestion = styled.div<{ isSelected?: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  z-index: 300;
  background-color: ${theme.colors.white};
  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${theme.colors.greyLightest};
    `}
`
