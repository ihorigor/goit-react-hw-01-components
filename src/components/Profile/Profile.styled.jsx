import styled from 'styled-components';

export const Img = styled.img`
  width: ${p => p.theme.space[8]}px;
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.normal};
`;
export const UserName = styled.p`
  padding-top: ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  padding-top: ${p => p.theme.space[4]}px;
`;
export const Numbers = styled.span`
  padding-top: ${p => p.theme.space[5]}px;
`;
