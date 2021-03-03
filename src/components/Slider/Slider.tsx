import { RawSlider, RawSliderProps } from './RawSlider'
import { SpaceProps } from 'styled-system'
import styled from 'styled-components'
import { theme } from '../../styles/theme'

export interface SliderProps extends RawSliderProps, SpaceProps {}

export const Slider = styled(RawSlider)<SliderProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;

    width: 100%;
    height: 10px;
    background-color: ${theme.colors.grey};

    outline: none;
    opacity: 0.7;
    border-radius: 1rem;

    -webkit-transition: 0.2s;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      cursor: pointer;

      width: 15px;
      height: 15px;

      background-color: ${theme.colors.primary};
      border-radius: 1rem;
    }

    &::-moz-range-thumb {
      cursor: pointer;

      width: 15px;
      height: 15px;

      background-color: ${theme.colors.primary};
      border-radius: 1rem;
    }
  }

  label {
    margin-bottom: ${theme.space[5]}px;
  }
`
