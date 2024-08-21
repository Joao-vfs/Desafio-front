import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  z-index: 1000;
  height: 90px;
  width: 100%;
  margin-bottom: 25px;
  background-color: #fff;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.gaps.sm};
`;

export const ShoppingCartInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
