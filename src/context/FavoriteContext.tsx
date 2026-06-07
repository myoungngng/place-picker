import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

interface FavoriteContextValue {
  favoriteIds: number[];
  toggleFavorite: (placeId: number) => void;
  isFavorite: (placeId: number) => boolean;
}

const FavoriteContext = createContext<FavoriteContextValue | null>(null);

interface FavoriteProviderProps {
  children: ReactNode;
}

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
  const [favoriteIds, setFavoriteIds] = useState<number[]>(() => {
    const savedFavorites = localStorage.getItem("favoriteIds");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // 찜 목록이 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("favoriteIds", JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const toggleFavorite = (placeId: number) => {
    setFavoriteIds((prevIds) =>
      prevIds.includes(placeId)
        ? prevIds.filter((id) => id !== placeId)
        : [...prevIds, placeId]
    );
  };

  const isFavorite = (placeId: number) => {
    return favoriteIds.includes(placeId);
  };

  return (
    <FavoriteContext.Provider value={{ favoriteIds, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error("useFavorite must be used within FavoriteProvider");
  }

  return context;
};