declare interface IColors {
  primary: string;
  secondary: string;
  textColor: string;
  backgroundColor: string;
}

declare interface IFontFamily {
  primary: string;
  secondary: string;
}

declare interface IFontSize {
  xlarge: string;
  large: string;
  normal: string;
  small: string;
  xsmall: string;
}

declare interface IFontWeight {
  normal: number;
  bold: number;
  lighter: number;
}

declare interface ILineHeight {
  large: number;
  medium: number;
  small: number;
}

declare interface ITheme {
  fontFamily: IFontFamily;
  fontSize: IFontSize;
  fontWeight: IFontWeight;
  lineHeight: ILineHeight;
  colors: IColors;
  spacing: number[];
}
