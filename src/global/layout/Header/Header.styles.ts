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

export const ShoppingCart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`;
