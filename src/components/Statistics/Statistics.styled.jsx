import styled from 'styled-components';

export const Title = styled.h2`
  padding-top: ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  text-align: center;
`;

export const Text = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
`;
export const Numbers = styled.span`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.white};
`;
