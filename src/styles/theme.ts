export interface Colors {
  primary: string;
  secondary: string;
  textColor: string;
  backgroundColor: string;
}

export interface FontSize {
  xlarge: string;
  large: string;
  normal: string;
  small: string;
  xsmall: string;
}

export interface FontWeight {
  normal: number;
  bold: number;
  lighter: number;
}

export interface Theme {
  fontSize: FontSize;
  fontWeight: FontWeight;
  colors: Colors;
  spacing: number[];
}

const theme: Theme = {
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
  colors: {
    primary: '#FDD301',
    secondary: '#FE760A',
    textColor: '#233844',
    backgroundColor: '#EDF3F5'
  },
  spacing: [4, 8, 12, 16, 20, 24, 30, 36, 42]
};

export default theme;
