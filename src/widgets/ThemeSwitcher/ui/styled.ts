import styled from 'styled-components';

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  border: ${({ theme }) => `1px solid ${theme.colors.text}`};
`;
