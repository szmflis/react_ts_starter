import React from 'react'

import { Box } from '../src/components/Box/Box'
import { AnchorLink, Paragraph } from '../src/components/Typography/Typography'

export const boxProperties = {
  m: 20,
  p: 20,
  borderRadius: 20,
  border: '2px solid #333',
  minWidth: 300,
  height: 'fit-content',
}

export const Space = () => (
  <Box {...boxProperties}>
    <Box>
      <AnchorLink fontWeight="bold" href="https://styled-system.com/api/#space">
        Space
      </AnchorLink>
    </Box>
    <ul>
      <li>
        <Paragraph>margin / m</Paragraph>
      </li>
      <li>
        <Paragraph>marginTop / mt</Paragraph>
      </li>
      <li>
        <Paragraph>marginRight / mr</Paragraph>
      </li>
      <li>
        <Paragraph>marginBottom / mb</Paragraph>
      </li>
      <li>
        <Paragraph>marginLeft / ml</Paragraph>
      </li>
      <li>
        <Paragraph>marginX / mx</Paragraph>
      </li>
      <li>
        <Paragraph>marginY / my</Paragraph>
      </li>
      <li>
        <Paragraph>padding / p</Paragraph>
      </li>
      <li>
        <Paragraph>paddingTop / pt</Paragraph>
      </li>
      <li>
        <Paragraph>paddingRight / pr</Paragraph>
      </li>
      <li>
        <Paragraph>paddingBottom / pb</Paragraph>
      </li>
      <li>
        <Paragraph>paddingLeft / pl</Paragraph>
      </li>
      <li>
        <Paragraph>paddingX / px</Paragraph>
      </li>
      <li>
        <Paragraph>paddingY / py</Paragraph>
      </li>
    </ul>
  </Box>
)

export const Color = () => (
  <Box {...boxProperties}>
    <Box>
      <AnchorLink fontWeight="bold" href="https://styled-system.com/api/#color">
        Color
      </AnchorLink>
    </Box>
    <ul>
      <li>
        <Paragraph>color</Paragraph>
      </li>
      <li>
        <Paragraph>bg</Paragraph>
      </li>
      <li>
        <Paragraph>backgroundColor</Paragraph>
      </li>
      <li>
        <Paragraph>opacity</Paragraph>
      </li>
    </ul>
  </Box>
)

export const Typography = () => (
  <Box {...boxProperties}>
    <Box>
      <AnchorLink fontWeight="bold" href="https://styled-system.com/api/#typography">
        Typography
      </AnchorLink>
    </Box>
    <ul>
      <li>
        <Paragraph>fontFamily</Paragraph>
      </li>
      <li>
        <Paragraph>fontSize</Paragraph>
      </li>
      <li>
        <Paragraph>fontWeight</Paragraph>
      </li>
      <li>
        <Paragraph>lineHeight</Paragraph>
      </li>
      <li>
        <Paragraph>letterSpacing</Paragraph>
      </li>
      <li>
        <Paragraph>textAlign</Paragraph>
      </li>
      <li>
        <Paragraph>fontStyle</Paragraph>
      </li>
    </ul>
  </Box>
)

export const Layout = () => (
  <Box {...boxProperties}>
    <Box>
      <AnchorLink fontWeight="bold" href="https://styled-system.com/api/#layout">
        Layout
      </AnchorLink>
    </Box>
    <ul>
      <li>
        <Paragraph>width</Paragraph>
      </li>
      <li>
        <Paragraph>height</Paragraph>
      </li>
      <li>
        <Paragraph>display</Paragraph>
      </li>
      <li>
        <Paragraph>minWidth</Paragraph>
      </li>
      <li>
        <Paragraph>minHeight</Paragraph>
      </li>
      <li>
        <Paragraph>maxWidth</Paragraph>
      </li>
      <li>
        <Paragraph>maxHeight</Paragraph>
      </li>
      <li>
        <Paragraph>size</Paragraph>
      </li>
      <li>
        <Paragraph>verticalAlign</Paragraph>
      </li>
      <li>
        <Paragraph>overflow</Paragraph>
      </li>
      <li>
        <Paragraph>overflowX</Paragraph>
      </li>
      <li>
        <Paragraph>overflowY</Paragraph>
      </li>
    </ul>
  </Box>
)

export const Border = () => (
  <Box {...boxProperties}>
    <Box>
      <AnchorLink fontWeight="bold" href="https://styled-system.com/api/#border">
        Border
      </AnchorLink>
    </Box>
    <ul>
      <li>
        <Paragraph>border</Paragraph>
      </li>
      <li>
        <Paragraph>borderRadius</Paragraph>
      </li>
      <li>
        <Paragraph>borderTopLeftRadius</Paragraph>
      </li>
      <li>
        <Paragraph>borderTopRightRadius</Paragraph>
      </li>
      <li>
        <Paragraph>borderBottomLeftRadius</Paragraph>
      </li>
      <li>
        <Paragraph>borderBottomRightRadius</Paragraph>
      </li>
      <li>
        <Paragraph>borderWidth</Paragraph>
      </li>
      <li>
        <Paragraph>borderTopWidth</Paragraph>
      </li>
      <li>
        <Paragraph>borderRightWidth</Paragraph>
      </li>
      <li>
        <Paragraph>borderBottomWidth</Paragraph>
      </li>
      <li>
        <Paragraph>borderLeftWidth</Paragraph>
      </li>
      <li>
        <Paragraph>borderColor</Paragraph>
      </li>
      <li>
        <Paragraph>borderTopColor</Paragraph>
      </li>
      <li>
        <Paragraph>borderRightColor</Paragraph>
      </li>
      <li>
        <Paragraph>borderBottomColor</Paragraph>
      </li>
      <li>
        <Paragraph>borderLeftColor</Paragraph>
      </li>
      <li>
        <Paragraph>borderStyle</Paragraph>
      </li>
      <li>
        <Paragraph>borderTopStyle</Paragraph>
      </li>
      <li>
        <Paragraph>borderRightStyle</Paragraph>
      </li>
      <li>
        <Paragraph>borderBottomStyle</Paragraph>
      </li>
      <li>
        <Paragraph>borderLeftStyle</Paragraph>
      </li>
      <li>
        <Paragraph>borderTop</Paragraph>
      </li>
      <li>
        <Paragraph>borderRight</Paragraph>
      </li>
      <li>
        <Paragraph>borderBottom</Paragraph>
      </li>
      <li>
        <Paragraph>borderLeft</Paragraph>
      </li>
      <li>
        <Paragraph>borderX</Paragraph>
      </li>
      <li>
        <Paragraph>borderY</Paragraph>
      </li>
    </ul>
  </Box>
)

export const Position = () => (
  <Box {...boxProperties}>
    <Box>
      <AnchorLink fontWeight="bold" href="https://styled-system.com/api/#position">
        Position
      </AnchorLink>
    </Box>
    <ul>
      <li>
        <Paragraph>position</Paragraph>
      </li>
      <li>
        <Paragraph>zIndex</Paragraph>
      </li>
      <li>
        <Paragraph>top</Paragraph>
      </li>
      <li>
        <Paragraph>right</Paragraph>
      </li>
      <li>
        <Paragraph>bottom</Paragraph>
      </li>
      <li>
        <Paragraph>left</Paragraph>
      </li>
    </ul>
  </Box>
)

export const Flexbox = () => (
  <Box {...boxProperties}>
    <Box>
      <AnchorLink fontWeight="bold" href="https://styled-system.com/api/#flexbox">
        Flexbox
      </AnchorLink>
    </Box>
    <ul>
      <li>
        <Paragraph>alignItems</Paragraph>
      </li>
      <li>
        <Paragraph>alignContent</Paragraph>
      </li>
      <li>
        <Paragraph>justifyItems</Paragraph>
      </li>
      <li>
        <Paragraph>justifyContent</Paragraph>
      </li>
      <li>
        <Paragraph>flexWrap</Paragraph>
      </li>
      <li>
        <Paragraph>flexDirection</Paragraph>
      </li>
      <li>
        <Paragraph>flex</Paragraph>
      </li>
      <li>
        <Paragraph>flexGrow</Paragraph>
      </li>
      <li>
        <Paragraph>flexShrink</Paragraph>
      </li>
      <li>
        <Paragraph>flexBasis</Paragraph>
      </li>
      <li>
        <Paragraph>justifySelf</Paragraph>
      </li>
      <li>
        <Paragraph>alignSelf</Paragraph>
      </li>
      <li>
        <Paragraph>order</Paragraph>
      </li>
    </ul>
  </Box>
)

export const Shadow = () => (
  <Box {...boxProperties}>
    <Box>
      <AnchorLink fontWeight="bold" href="https://styled-system.com/api/#shadow">
        Shadow
      </AnchorLink>
    </Box>
    <ul>
      <li>
        <Paragraph>textShadow</Paragraph>
      </li>
      <li>
        <Paragraph>boxShadow</Paragraph>
      </li>
    </ul>
  </Box>
)

export const GridLayout = () => (
  <Box {...boxProperties}>
    <Box>
      <AnchorLink fontWeight="bold" href="https://styled-system.com/api/#grid-layout">
        Grid Layout
      </AnchorLink>
    </Box>
    <ul>
      <li>
        <Paragraph>gridGap</Paragraph>
      </li>
      <li>
        <Paragraph>gridColumnGap</Paragraph>
      </li>
      <li>
        <Paragraph>gridRowGap</Paragraph>
      </li>
      <li>
        <Paragraph>gridColumn</Paragraph>
      </li>
      <li>
        <Paragraph>gridRow</Paragraph>
      </li>
      <li>
        <Paragraph>gridAutoFlow</Paragraph>
      </li>
      <li>
        <Paragraph>gridAutoColumns</Paragraph>
      </li>
      <li>
        <Paragraph>gridAutoRows</Paragraph>
      </li>
      <li>
        <Paragraph>gridTemplateColumns</Paragraph>
      </li>
      <li>
        <Paragraph>gridTemplateRows</Paragraph>
      </li>
      <li>
        <Paragraph>gridTemplateAreas</Paragraph>
      </li>
      <li>
        <Paragraph>gridArea</Paragraph>
      </li>
    </ul>
  </Box>
)
