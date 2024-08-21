import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: relative;
`;

export const Input = styled.input<{ isExpanded: boolean }>`
  border-style: none;
  height: 45px;
  width: ${(props) => (props.isExpanded ? "190px" : "45px")};
  padding: 10px;
  outline: none;
  border-radius: ${(props) => (props.isExpanded ? "0px" : "50%")};
  transition: all 500ms;
  background-color: ${({ isExpanded, theme }) =>
    isExpanded ? "transparent" : theme.colors.tertiary};
  border-bottom: ${({ isExpanded, theme }) =>
    isExpanded ? `3px solid ${theme.colors.tertiary}` : "none"};
  color: ${({ isExpanded, theme }) =>
    !isExpanded ? "transparent" : theme.colors.dark};
  font-size: 17px;

  ::placeholder {
    color: #8f8f8f;
  }
`;

export const Icon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  cursor: pointer;
  width: 45px;
  height: 45px;
  outline: none;
  border-style: none;
  border-radius: 50%;
  background-color: transparent;
  transition: 0.2s linear;
`;
