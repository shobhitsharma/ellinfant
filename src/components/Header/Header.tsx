import styled from 'styled-components';

const StyledHeader = styled.header`
  margin-top: ${({ theme }: { theme: ITheme }) => `${theme.spacing[5]}px`};
  margin-bottom: ${({ theme }: { theme: ITheme }) => `${theme.spacing[5]}px`};
`;

const StyledBox = styled.div`
  margin: 0 auto;
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledBox>
        <img height="60" src="/ellinfant_logo_long.svg" />
      </StyledBox>
    </StyledHeader>
  );
}
