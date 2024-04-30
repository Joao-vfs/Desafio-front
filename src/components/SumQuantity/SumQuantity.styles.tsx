import styled from "styled-components";

export const Input = styled.input`
  width: 62px;
  height: 26px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.colors.assistText};
  padding: ${({ theme }) => theme.paddings.md};
`;
