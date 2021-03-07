import styled from 'styled-components'
import { layout, LayoutProps, space, SpaceProps } from 'styled-system'
import { theme } from '../../styles/theme'
import { RawDropdown, RawDropdownProps } from './RawDropdown'

export interface DropdownProps extends RawDropdownProps, SpaceProps, LayoutProps {}

export const Dropdown = styled(RawDropdown)<DropdownProps>`
  position: relative;

  .content-container {
    position: absolute;
    top: 100%; // container always begins at the bottom of a button
    left: 0;
    z-index: 2;

    background-color: white;
    box-shadow: ${theme.shadows.mdShadow_1};
    animation: ${theme.keyframes.fadeInTranslateY} 0.3s;

    ${layout};
  }

  .buttonContainer {
    display: inline-block;
  }

  ${space};
`

/*
  This component provides a button and container for dropdown content.
  Content should be supplied as children of this component and styled separate.
*/
