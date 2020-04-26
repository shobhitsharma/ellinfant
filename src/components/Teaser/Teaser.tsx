import Link from 'next/link';
import styled from 'styled-components';

const Block = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  background-color: ${({ theme }: { theme: ITheme }) => theme.colors.primary};
  padding: ${({ theme }: { theme: ITheme }) => `${theme.spacing[3]}px`};
  border-radius: ${({ theme }: { theme: ITheme }) => `${theme.radii[3]}px`};
  margin-bottom: ${({ theme }: { theme: ITheme }) => `${theme.spacing[4]}px`};
  box-shadow: ${({ theme }: { theme: ITheme }) => `${theme.shadows.large}`};
`;

export default function Teaser() {
  return <Block>Teaser</Block>;
}
