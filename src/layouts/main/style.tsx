import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${({ theme }: { theme: ITheme }) => theme.breakpoints.maxWidth};
`;

export const Content = styled.div`
  flex: 1;
`;
