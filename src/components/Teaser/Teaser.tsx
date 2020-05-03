import Link from 'next/link';
import styled from 'styled-components';

const Block = styled.div`
  margin: 0 auto;
  /* background-color: ${({ theme }: { theme: ITheme }) => theme.colors.primary}; */
  padding: ${({ theme }: { theme: ITheme }) => `${theme.spacing[5]}px`};
  border-radius: ${({ theme }: { theme: ITheme }) => `${theme.radii[3]}px`};
  min-height: 400px;
`;

export default function Teaser() {
  return <Block>Teaser</Block>;
}
