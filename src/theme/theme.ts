import { extendTheme, theme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

// Use https://openchakra.app/ to make experiments with ChakraUI components and props

const breakpoints = createBreakpoints({
  base: '320px',
  xs: '360px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  xxl: '1366px',
});

export const palette = {
  // FLAT COLORS
  BLACK: '#000',
  WHITE: '#fff',
  TORQUISE: '#1abc9c',
  EMERALD: '#2ecc71',
  GREE_SEA: '#16a085',
  NEPHRITIS: '#27ae60',
  SUN_FLOWER: '#f1c40f',
  ORANGE: '#f39c12',
  CARROT: '#e67e22',
  PUMPKIN: '#d35400',
  PETER_RIVER: '#3498db',
  BELIZE_HOLE: '#2980b9',
  ALIZARIN: '#e74c3c',
  POMEGRANATE: '#c0392b',
  AMETHYST: '#9b59b6',
  WISTERIA: '#8e44ad',
  WET_ASPHALT: '#34495e',
  MIDNIGHT_BLUE: '#2c3e50',
  ASBESTOS: '#7f8c8d',
  CONCRETE: '#95a5a6',
  SILVER: '#bdc3c7',
  CLOUDS: '#ecf0f1',
  BORANGE: '#ffb70d',
  BGREEN: '#009848',
  BRED: '#db2c2c',
  BBLUE: '#0b95ff',
  BPURPLE: '#6c1dff',
  BPUMPKIN: '#d35400',
};

// Let's say you want to add custom colors
const customTheme = extendTheme({
  ...theme,
  colors: {
    ...theme.colors,
    ...palette,
    rose: {
      50: '#ffe1e9',
      100: '#ffb1c0',
      200: '#ff7e98',
      300: '#ff4c6f',
      400: '#ff1a45',
      500: '#e6002c',
      600: '#b40021',
      700: '#810017',
      800: '#50000d',
      900: '#210003',
    },
  },
  breakpoints,
  fonts: {
    heading: "'Nunito Sans', sans-serif",
    body: "'Nunito Sans', sans-serif",
    mono: 'Menlo, monospace',
    content: 'Source Serif Pro, sans-serif',
  },
  fontWeights: {
    ...theme.fontWeights,
    thin: 200,
    light: 300,
    normal: 400,
    semiBold: 600,
    extraBold: 800,
  },
  fontSizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '4rem', // 64px
  },
  textStyles: {
    body: {
      color: palette.BLACK,
      fontFamily: "'Nunito Sans', sans-serif",
    },
    h1: {
      color: palette.BLACK,
      fontFamily: "'Eksell medium', sans-serif",
      fontSize: '48px',
    },
    h2: {
      color: palette.BLACK,
      fontFamily: "'Eksell medium', sans-serif",
      fontSize: '32px',
    },
    h3: {
      color: palette.BLACK,
      fontFamily: "'Eksell medium', sans-serif",
      fontSize: '24px',
    },
    h4: {
      color: palette.BLACK,
      fontFamily: "'Eksell medium', sans-serif",
      fontSize: '20px',
    },
    h5: {
      color: palette.BLACK,
      fontFamily: "'Nunito Sans', sans-serif",
      fontSize: '18px',
      fontWeight: 700,
    },
    h6: {
      color: palette.BLACK,
      fontFamily: "'Nunito Sans', sans-serif",
      fontSize: '16px',
      fontWeight: 600,
    },
    normalBlack: {
      color: palette.BLACK,
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 400,
    },
    normalClouds: {
      color: palette.CLOUDS,
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 400,
    },
    normalSilver: {
      color: palette.SILVER,
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 400,
    },
  },
  shadows: {
    xs: '0px 0px 0px 1px rgba(0, 0, 0, 0.05)',
    sm: '0px 1px 2px rgba(0, 0, 0, 0.05)',
    base: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
    md: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
    outline: `0px 0px 0px 3px rgba(63, 153, 225, 0.6)`,
    inner: `inset 0px 2px 4px rgba(0, 0, 0, 0.06)`,
    'dark-bg': '0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2), 0px 15px 40px rgba(0, 0, 0, 0.4)',
    none: `none`,
  },
  // components: {
  //   // Put here your custom component style
  // },
});

export default customTheme;
