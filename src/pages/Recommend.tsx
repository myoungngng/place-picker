import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { courses, places } from "../data/places";

const Recommend = () => {
  const [searchParams] = useSearchParams();
  const courseId = Number(searchParams.get("courseId"));

  const selectedCourse = courses.find((course) => course.id === courseId);

  if (!selectedCourse) {
    return (
      <Page>
        <Panel>
          <Title>코스를 찾을 수 없습니다.</Title>
          <BackLink to="/">처음으로 돌아가기</BackLink>
        </Panel>
      </Page>
    );
  }

  const selectedPlaces = selectedCourse.placeIds
    .map((placeId) => places.find((place) => place.id === placeId))
    .filter((place) => place !== undefined);

  const getCategoryLabel = (category: string) => {
    if (category === "restaurant") return "식사";
    if (category === "cafe") return "카페";
    return "산책";
  };

  return (
    <Page>
      <Panel>
        <Header>
          <BackLink to="/">← 다시 선택하기</BackLink>
          <Badge>{selectedCourse.situation}</Badge>
        </Header>

        <Hero>
          <Title>{selectedCourse.situation} 코스</Title>
          <Summary>{selectedCourse.summary}</Summary>
        </Hero>

        <StageList>
          {selectedPlaces.map((place, index) => (
            <StageCard key={place.id}>
              <StageTop>
                <StageLabel>STAGE {index + 1}</StageLabel>
                <Category>{getCategoryLabel(place.category)}</Category>
              </StageTop>

              <PlaceName>{place.name}</PlaceName>
              <Description>{place.description}</Description>

              <TagList>
                {place.tags.map((tag) => (
                  <Tag key={tag}>#{tag}</Tag>
                ))}
              </TagList>

              <DetailLink to={`/place/${place.id}`}>장소 자세히 보기</DetailLink>
            </StageCard>
          ))}
        </StageList>
      </Panel>
    </Page>
  );
};

export default Recommend;

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

const Header = styled.div`
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

const Badge = styled.span`
  padding: 9px 16px;
  border: 3px solid #111;
  border-radius: 999px;
  background: #d8d8d8a4;
  color: #111;
  font-size: 15px;
  font-weight: 900;
`;

const Hero = styled.section`
  margin-bottom: 24px;
  padding: 18px 20px;
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

const Summary = styled.p`
  margin: 0;
  color: #111;
  font-size: 15px;
  line-height: 1.5;
`;

const StageList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const StageCard = styled.article`
  min-height: 260px;
  padding: 18px;
  border: 3px solid #111;
  border-radius: 18px;
  background: #fffaf0;
  box-shadow: 4px 4px 0 #111;
  text-align: left;

  display: flex;
  flex-direction: column;
`;

const StageTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
`;

const StageLabel = styled.span`
  display: inline-block;
  padding: 6px 10px;
  color: #45ae3b;
  font-size: 13px;
  font-weight: 900;
`;

const Category = styled.span`
  color: #45ae3b;
  font-size: 13px;
  font-weight: 900;
`;

const PlaceName = styled.h2`
  margin: 0 0 8px;
  color: #111;
  font-size: 24px;
  line-height: 1.25;
`;

const Description = styled.p`
  margin: 0 0 14px;
  color: #111;
  font-size: 14px;
  line-height: 1.5;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 0 0 18px;
`;

const Tag = styled.span`
  color: #111;
  font-size: 13px;
  font-weight: 700;
`;

const DetailLink = styled(Link)`
  display: inline-block;
  align-self: flex-start;
  margin-top: auto;
  padding: 10px 15px;
  border: 2px solid #111;
  border-radius: 999px;
  background: #8dff83cb;
  color: #111;
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
  box-shadow: 3px 3px 0 #111;
  transition: 0.15s ease;

  &:hover {
    background: #6ed367;
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0 #111;
  }

  &:active {
    transform: translate(3px, 3px);
    box-shadow: none;
  }
`;