import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import FavoriteButton from "../components/FavoriteButton";
import ReviewSection from "../components/ReviewSection";
import { places } from "../data/places";

const PlaceDetail = () => {
  const { id } = useParams();
  const place = places.find((place) => place.id === Number(id));

  if (!place) {
    return <NotFound>장소를 찾을 수 없습니다.</NotFound>;
  }

  return (
    <Page>
      <Panel>
        <BackLink to="/">← 메인으로</BackLink>

        <PlaceCard>
          <PlaceMain>
            <Category>{place.category}</Category>
            <Title>{place.name}</Title>
            <Description>{place.description}</Description>
            <FavoriteButton placeId={place.id} />
          </PlaceMain>

          <InfoBox>
            <InfoItem>
              <strong>지역</strong>
              <span>{place.area}</span>
            </InfoItem>

            <InfoItem>
              <strong>주소</strong>
              <span>{place.address}</span>
            </InfoItem>

            <TagList>
              {place.tags.map((tag) => (
                <Tag key={tag}>#{tag}</Tag>
              ))}
            </TagList>

            <PlaceImage
              src={place.image}
              alt={place.name}
            />
          </InfoBox>
        </PlaceCard>

        <ReviewSection placeId={place.id} />
      </Panel>
    </Page>
  );
};

export default PlaceDetail;

const Page = styled.main`
  min-height: calc(100vh - 120px);
  padding: 18px 20px 32px;
  background: linear-gradient(180deg, #9dccff 0%, #ffffff 100%);
`;

const Panel = styled.section`
  width: min(100%, 860px);
  margin: 0 auto;
  padding: 22px 28px;
  border: 4px solid #111;
  border-radius: 24px;
  background: #fffef4;
  box-shadow: 8px 8px 0 #111;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 14px;
  color: #111;
  font-size: 15px;
  font-weight: 800;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const PlaceCard = styled.section`
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  border: 3px solid #111;
  border-radius: 20px;
  background: #fffef4;
  box-shadow: 5px 5px 0 #111;
  overflow: hidden;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const PlaceMain = styled.div`
  padding: 20px;
  border-right: 3px solid #111;
  text-align: center;

  @media (max-width: 760px) {
    border-right: none;
    border-bottom: 3px solid #111;
  }
`;

const Category = styled.span`
  display: inline-block;
  padding: 6px 13px;
  border: 2px solid #111;
  border-radius: 999px;
  background: #fff242ad;
  color: #111;
  font-size: 13px;
  font-weight: 900;
`;

const Title = styled.h1`
  margin: 10px 0 8px;
  color: #111;
  font-size: clamp(30px, 4vw, 35px);
  line-height: 1.05;
`;

const Description = styled.p`
  margin: 0 auto 12px;
  max-width: 420px;
  color: #111;
  font-size: 13px;
  line-height: 1.45;
`;

const InfoBox = styled.div`
  padding: 15px 15px;
  background: #fffaf0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoItem = styled.p`
  display: flex;
  gap: 10px;
  margin: 0 0 4px;
  color: #111;
  font-size: 14px;
  line-height: 1.35;

  strong {
    width: 40px;
    flex-shrink: 0;
    font-weight: 900;
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 2px;
  margin-bottom: 10px;
`;

const Tag = styled.span`
  color: #111;
  font-size: 13px;
  font-weight: 700;
`;

const NotFound = styled.h1`
  padding: 40px;
  color: #111;
`;

const PlaceImage = styled.img`
  width: 70%;
  height: 150px;
  object-fit: cover;
  border: 3px solid #111;
  border-radius: 16px;
  margin-top: 4px;
`;