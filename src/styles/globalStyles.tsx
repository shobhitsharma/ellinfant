import { createGlobalStyle } from 'styled-components';
import resetCSS from './resetCSS';

const GlobalStyles = createGlobalStyle`
    ${resetCSS}

    html {
        height: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    body {
        font-family: ${({ theme }: { theme: ITheme }) => theme.fontFamily.primary};
        font-size: ${({ theme }: { theme: ITheme }) => theme.fontSize.normal};
        line-height: ${({ theme }: { theme: ITheme }) => theme.lineHeight.medium};
        color: ${({ theme }: { theme: ITheme }) => theme.colors.textColor};
        background-color: ${({ theme }: { theme: ITheme }) => theme.colors.bgColor};
        -webkit-text-size-adjust: 100%;
        -webkit-font-kerning: normal;
        font-kerning: normal;
    }
`;

export default GlobalStyles;
