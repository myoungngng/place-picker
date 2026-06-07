import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { courses } from "../data/places";

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedCourse = courses[selectedIndex];

  const handlePrev = () => {
    setSelectedIndex((prevIndex: number) =>
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex: number) =>
      prevIndex === courses.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Page>
      <CardFrame>
        <Screen>
          <Title>오늘의 코스 카드 선택</Title>
          <SubTitle>상황에 맞는 카드를 고르면 추천 코스가 열려요.</SubTitle>

          <CardSelector>
            <ArrowButton type="button" onClick={handlePrev}>
              ←
            </ArrowButton>

            <MainCard>
              <ImageArea $image={selectedCourse.image} />

              <InfoArea>
                <CardText>
                  <CourseTitle>{selectedCourse.title}</CourseTitle>
                  <Summary>{selectedCourse.summary}</Summary>

                  <MoodList>
                    {selectedCourse.moodTags.map((tag) => (
                      <MoodTag key={tag}>#{tag}</MoodTag>
                    ))}
                  </MoodList>
                </CardText>

                <CardAction>
                  <StartLink to={`/recommend?courseId=${selectedCourse.id}`}>
                    코스 시작하기
                  </StartLink>
                </CardAction>
              </InfoArea>
            </MainCard>

            <ArrowButton type="button" onClick={handleNext}>
              →
            </ArrowButton>
          </CardSelector>

          <ThumbnailList>
            {courses.map((course, index) => (
              <ThumbnailButton
                key={course.id}
                type="button"
                $active={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {course.situation}
              </ThumbnailButton>
            ))}
          </ThumbnailList>
        </Screen>
      </CardFrame>
    </Page>
  );
};

export default Home;

const Page = styled.main`
  min-height: calc(100vh - 120px);
  padding: 24px 20px 40px;
  background: linear-gradient(180deg, #9dccff 0%, #eaf4ff 100%);
`;

const CardFrame = styled.section`
  width: min(100%, 860px);
  margin: 0 auto;
  padding: 28px;
  border: 4px solid #111;
  border-radius: 24px;
  background: #fffef4;
  box-shadow: 8px 8px 0 #111;
`;

const Screen = styled.section`
  padding: 0;
  background: transparent;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0 auto;
  max-width: 760px;
  padding: 12px 16px;
  border: 3px solid #111;
  border-radius: 14px;
  background: #fff242ad;
  color: #111;
  font-size: clamp(24px, 3vw, 34px);
  letter-spacing: 1px;
`;

const SubTitle = styled.p`
  margin: 14px 0 24px;
  color: #111;
  font-size: 15px;
`;

const CardSelector = styled.div`
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr) 52px;
  align-items: center;
  gap: 16px;
  margin: 14px auto 20px;

  @media (max-width: 640px) {
    grid-template-columns: 40px minmax(0, 1fr) 40px;
    gap: 8px;
  }
`;

const ArrowButton = styled.button`
  width: 52px;
  height: 52px;
  border: 2px solid #111;
  border-radius: 50%;
  background: #fffef4;
  color: #111;
  font-size: 24px;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 3px 3px 0 #111;
  transition: 0.15s ease;

  &:hover {
    background: #8dff83;
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0 #111;
  }

  &:active {
    transform: translate(3px, 3px);
    box-shadow: none;
  }

  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

const MainCard = styled.article`
  width: min(100%, 720px);
  min-height: 280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 320px 1fr;
  border: 3px solid #111;
  border-radius: 20px;
  background: #fffef4;
  box-shadow: 6px 6px 0 #111;
  overflow: hidden;
  text-align: left;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const ImageArea = styled.div<{ $image?: string }>`
  min-height: 280px;
  background: ${({ $image }) =>
    $image ? `url(${$image}) center/cover no-repeat` : "#fffef4"};
  border-right: 3px solid #111;

  @media (max-width: 720px) {
    aspect-ratio: 4 / 3;
    min-height: 0;
    border-right: none;
    border-bottom: 3px solid #111;
  }
`;

const InfoArea = styled.div`
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fffef4;
`;

const CardText = styled.div`
  width: 100%;
`;

const CourseTitle = styled.h3`
  margin: 0 0 8px;
  color: #111;
  font-size: clamp(22px, 2.2vw, 30px);
  line-height: 1.2;
`;

const Summary = styled.p`
  margin: 0 0 10px;
  color: #111;
  font-size: 14px;
  line-height: 1.45;
`;

const MoodList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

const MoodTag = styled.span`
  color: #111;
  font-size: 14px;
  font-weight: 700;
`;

const CardAction = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 18px;
`;

const StartLink = styled(Link)`
  display: inline-block;
  padding: 12px 20px;
  border: 2px solid #111;
  border-radius: 999px;
  background: #ff8b55c9;
  color: #111;
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
  box-shadow: 4px 4px 0 #111;
  transition: 0.15s ease;

  &:hover {
    background: #ff5100c9;
    transform: translate(1px, 1px);
    box-shadow: 3px 3px 0 #111;
  }

  &:active {
    transform: translate(4px, 4px);
    box-shadow: none;
  }
`;

const ThumbnailList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;

  @media (max-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ThumbnailButton = styled.button<{ $active: boolean }>`
  min-height: 50px;
  padding: 6px 5px;
  border: 2px solid #111;
  border-radius: 12px;
  background: ${({ $active }) => ($active ? "#d8d8d8" : "#fffef4")};
  color: #111;
  font-size: 13px;
  font-weight: 700;
  cursor: ${({ $active }) => ($active ? "default" : "pointer")};
  box-shadow: ${({ $active }) =>
    $active ? "inset 2px 2px 0 #aaa" : "2px 2px 0 #111"};
  transform: ${({ $active }) => ($active ? "translate(2px, 2px)" : "none")};
  transition: 0.15s ease;

  &:hover {
    background: ${({ $active }) => ($active ? "#d8d8d8" : "#8dff83")};
    box-shadow: ${({ $active }) =>
      $active ? "inset 2px 2px 0 #aaa" : "1px 1px 0 #111"};
    transform: ${({ $active }) =>
      $active ? "translate(2px, 2px)" : "translate(1px, 1px)"};
  }

  span {
    display: block;
    margin-bottom: 2px;
    font-size: 11px;
  }
`;