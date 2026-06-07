import { Link } from "react-router-dom";
import styled from "styled-components";
import { useFavorite } from "../context/FavoriteContext";
import { places } from "../data/places";
import PlaceCard from "../components/PlaceCard";

const Favorites = () => {
  const { favoriteIds } = useFavorite();

  const favoritePlaces = places.filter((place) => favoriteIds.includes(place.id));

  return (
    <Page>
      <Panel>
        <TopBar>
          <BackLink to="/">← 메인으로</BackLink>
          <CountBadge>{favoritePlaces.length} PICK</CountBadge>
        </TopBar>

        <Hero>
          <Title>MY PICK LIST</Title>
          <Description>찜한 장소를 모아두고 다시 확인할 수 있어요.</Description>
        </Hero>

        {favoritePlaces.length === 0 ? (
          <EmptyBox>
            <p>아직 찜한 장소가 없습니다.</p>
            <EmptyLink to="/">장소 추천 받으러 가기</EmptyLink>
          </EmptyBox>
        ) : (
          <PlaceGrid>
            {favoritePlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </PlaceGrid>
        )}
      </Panel>
    </Page>
  );
};

export default Favorites;

const Page = styled.main`
  min-height: calc(100vh - 120px);
  padding: 24px 20px 48px;
  background: linear-gradient(180deg, #9dccff 0%, #ffffff 100%);
`;

const Panel = styled.section`
  width: min(100%, 860px);
  margin: 0 auto;
  padding: 28px;
  border: 4px solid #111;
  border-radius: 24px;
  background: #fffef4;
  box-shadow: 8px 8px 0 #111;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
`;

const BackLink = styled(Link)`
  color: #111;
  font-size: 15px;
  font-weight: 800;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CountBadge = styled.span`
  padding: 9px 16px;
  border: 3px solid #111;
  border-radius: 999px;
  background: #d8d8d8a4;
  color: #111;
  font-size: 15px;
  font-weight: 900;
`;

const Hero = styled.section`
  margin-bottom: 20px;
  padding: 16px 20px;
  border: 3px solid #111;
  border-radius: 18px;
  background: #fff242ad;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0 0 8px;
  color: #111;
  font-size: clamp(26px, 3vw, 36px);
  line-height: 1.2;
`;

const Description = styled.p`
  margin: 0;
  color: #111;
  font-size: 15px;
  line-height: 1.5;
`;

const EmptyBox = styled.div`
  padding: 24px;
  border: 3px dashed #111;
  border-radius: 18px;
  background: #fffaf0;
  text-align: center;

  p {
    margin: 0 0 14px;
    color: #111;
    font-size: 15px;
    font-weight: 700;
  }
`;

const EmptyLink = styled(Link)`
  display: inline-block;
  padding: 10px 15px;
  border: 2px solid #111;
  border-radius: 999px;
  background: #ff8b55c9;
  color: #111;
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
  box-shadow: 3px 3px 0 #111;
  transition: 0.15s ease;

  &:hover {
    background: #ff5100c9;
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0 #111;
  }

  &:active {
    transform: translate(3px, 3px);
    box-shadow: none;
  }
`;

const PlaceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
`;