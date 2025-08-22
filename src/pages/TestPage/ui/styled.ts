import styled from 'styled-components';

export const Div = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.text};
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 4px;
`;
