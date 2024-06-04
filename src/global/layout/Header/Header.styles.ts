import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  min-width: 960px;
  max-width: 100%;
  padding: 10px;
  margin-bottom: 25px;

  @media only screen and (max-width: 768px) {
    min-width: 343px;
  }
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
