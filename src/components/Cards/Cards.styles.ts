import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  width: 509px;
  height: 289px;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  position: relative;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  box-shadow: 0px 4px 15px rgba(31, 41, 55, 0.8);
  margin-bottom: 100px;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0px 10px 20px rgba(31, 41, 55, 0.8);
  }

  @media (max-width: 800px) {
    width: 80%;
    height: auto;
    margin-bottom: 1rem;
    max-width: 509px;
    transition: none;
    box-shadow: 0px 4px 15px rgba(31, 41, 55, 0.8);
    margin-bottom: 1rem;
  }
`;

export const ImagePlaceholder = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
  bottom: -2.5rem;
  right: -2.5rem;
  background-color: #009edd;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0px 2px 10px rgba(31, 41, 55, 0.8);
  transition: transform 0.7s ease;
  border: 2px solid ${({ theme }) => theme.colors.quaternary};

  img {
    width: "100%";
    height: "100%";
    object-fit: "cover";
    border-radius: "50%";
  }

  ${CardContainer}:hover & {
    transform: translateY(-1rem) translateX(-1rem);
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: 100px;
    transform: translateY(-45px) translateX(-50px);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ${CardContainer}:hover & {
      transform: translateY(-45px) translateX(-50px);
    }
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #000;
`;

export const CardText = styled.p`
  color: #000;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 0.875rem;
  overflow: hidden;
`;

export const CardButton = styled.button`
  margin-top: 1.5rem;
  background-color: #009edd;
  color: #f3f4f6;
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4b5563;
  }
`;

export const PlayButton = styled.button<{ addedMovie: boolean }>`
  cursor: pointer;
  transition: all 0.5s ease;
  padding: 1px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${({ addedMovie, theme }) =>
    addedMovie
      ? `linear-gradient(to right, ${theme.colors.success}, #13b6da)`
      : `linear-gradient(to right, #009edd, #13b6da)`};

  &:hover {
    box-shadow: 0 15px 50px -15px ${({ addedMovie, theme }) => (addedMovie ? theme.colors.success : "#13b6da")};
  }

  @media (max-width: 768px) {
    width: 100%;
    transition: none;
    padding: 0.5rem;
    gap: 0.5rem;
  }
`;

export const PlayIcon = styled.div`
  height: 50px;
  width: 50px;
  background-color: #0a0a0a;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  padding: 0.75rem;
`;

export const ButtonText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: white;
  padding-right: 10px;
`;
