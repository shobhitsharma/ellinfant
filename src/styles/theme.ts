const theme: ITheme = {
  fontFamily: {
    primary: `-apple-system, BlinkMacSystemFont, "Rubik", sans-serif`,
    secondary: `-apple-system, BlinkMacSystemFont, "Rubik", sans-serif`
  },
  fontSize: {
    xlarge: '2.0em',
    large: '1.5em',
    normal: '1.25em',
    small: '1.0em',
    xsmall: '0.75em'
  },
  fontWeight: {
    normal: 500,
    bold: 600,
    lighter: 300
  },
  lineHeight: {
    large: 1.6,
    medium: 1.5,
    small: 1.2
  },
  colors: {
    primary: '#FDD301',
    secondary: '#FE760A',
    textColor: '#233844',
    bodyBgColor: '#FFFFFF',
    boxBgColor: '#F9F8F8'
  },
  spacing: [8, 16, 20, 24, 30, 42, 60, 85, 100],
  breakpoints: {
    maxWidth: '1320px'
  },
  radii: [0, 10, 15, 20, 25, 30, 40, 50, 99999],
  shadows: {
    large: `11px 10px 31px -6px rgb(162 162 162 / 0.55)`,
    medium: ``,
    small: ``
  }
};

export default theme;
