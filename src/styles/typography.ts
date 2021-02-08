import nunito300 from '../assets/fonts/nunito300.woff2'
import nunito400 from '../assets/fonts/nunito400.woff2'
import nunito600 from '../assets/fonts/nunito600.woff2'
import nunito700 from '../assets/fonts/nunito700.woff2'
import nunito800 from '../assets/fonts/nunito800.woff2'
import colors from './colors'

export const montVariants = {
  nunito300,
  nunito400,
  nunito600,
  nunito700,
  nunito800,
}

export default {
  fontSizeBase: '62.5%',
  fontSizeBaseRem: '1.4rem',
  fontColorBase: colors.black,
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  fontSizes: [10, 12, 14, 16, 20, 24, 36, 48, 60, 96].map((n: number) => n / 10 + 'rem'),
  lineHeights: [12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56].map((n: number) => n / 10 + 'rem'),
  fontSizeResp: {},
  letterSpacings: {
    extraTight: '0.15px',
    tight: '0.47px',
    normal: '0.53px',
    extra: '0.67px',
    mega: '0.8px',
  },
  fonts: {
    nunito: 'Nunito, Helvetica',
  },
}
