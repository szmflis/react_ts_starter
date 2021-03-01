import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { theme } from '../../styles/theme'
import { RawDropdown, RawDropdownProps } from './RawDropdown'

export interface DropdownProps extends RawDropdownProps, SpaceProps {}

export const Dropdown = styled(RawDropdown)<DropdownProps>`
  position: relative;
  display: inline-block;

  .content-container {
    position: absolute;
    top: 100%; // container always begins at the bottom of a button
    left: 0;
    z-index: 2;
    box-shadow: ${theme.shadows.mdShadow_1};
  }

  ${space};
`

/*
  This component provides a button and container for dropdown content.
  Content should be supplied as children of this component and styled separate.
*/