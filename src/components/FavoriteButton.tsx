import styled from "styled-components";

import { useFavorite } from "../context/FavoriteContext";

interface FavoriteButtonProps {
  placeId: number;
}

const FavoriteButton = ({ placeId }: FavoriteButtonProps) => {
  const { toggleFavorite, isFavorite } = useFavorite();

  const favorite = isFavorite(placeId);

  return (
    <Button
      type="button"
      onClick={() => toggleFavorite(placeId)}
      $favorite={favorite}
    >
      {favorite ? "❤️ 찜 완료" : "🤍 찜하기"}
    </Button>
  );
};

export default FavoriteButton;

const Button = styled.button<{ $favorite: boolean }>`
  padding: 10px 10px;
  border: 3px solid #111;
  border-radius: 999px;
  background: ${({ $favorite }) =>
    $favorite ? "#ffb6c1" : "#ffffff"};

  color: #111;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 2px 2px 0 #111;

  &:hover {
    transform: translate(-2px, -2px);
  }
`;