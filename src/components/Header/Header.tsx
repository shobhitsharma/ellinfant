import styled from 'styled-components';

const StyledHeader = styled.header`
  margin-top: ${({ theme }: { theme: ITheme }) => `${theme.spacing[8]}px`};
  margin-bottom: ${({ theme }: { theme: ITheme }) => `${theme.spacing[8]}px`};
`;

export default function Header() {
  return (
    <StyledHeader>
      <img height="100" src="/ellinfant_logo_long.svg" />
    </StyledHeader>
  );
}
