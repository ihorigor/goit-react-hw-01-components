import styled from 'styled-components';

export const Status = styled.span`
  width: ${p => p.theme.space[5]}px;
  height: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.round};

  position: absolute;
  top: 20px;
  left: -60px;

  background-color: ${p =>
    p.children ? p.theme.colors.isTrue : p.theme.colors.isFalse};
`;
export const Img = styled.img`
  width: ${p => p.theme.space[6]}px;
  height: ${p => p.theme.space[6]}px;
`;
