import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 305px;
  width: 309px;
  padding: ${({ theme }) => theme.paddings.xxs} 11px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.border.radius.small};

  @media only screen and (max-width: 768px) {
    width: 343px;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.sm};
`;

export const ImageFilm = styled.img`
  width: 147px;
  height: 188px;
`;

export const ItemAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
