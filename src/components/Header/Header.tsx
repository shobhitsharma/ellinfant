import styled from 'styled-components';

const StyledHeader = styled.header`
  margin-top: ${({ theme }: { theme: ITheme }) => `${theme.spacing[7]}px`};
  margin-bottom: ${({ theme }: { theme: ITheme }) => `${theme.spacing[7]}px`};
`;

const StyledBox = styled.div`
  max-width: ${({ theme }: { theme: ITheme }) => theme.breakpoints.maxWidth};
  margin: 0 auto;
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledBox>
        <img height="100" src="/ellinfant_logo_long.svg" />
      </StyledBox>
    </StyledHeader>
  );
}
