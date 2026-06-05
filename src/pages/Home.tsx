import { useState } from "react";
import styled from "styled-components";

import SituationCard from "../components/SituationCard";
import { courses } from "../data/places";

const situations = ["전체", "데이트", "가족", "친구", "혼자", "공부", "나들이"];

const Home = () => {
  const [selectedSituation, setSelectedSituation] = useState("전체");

  const filteredCourses =
    selectedSituation === "전체"
      ? courses
      : courses.filter((course) => course.situation === selectedSituation);

  return (
    <Page>
      <GameMachine>
        <Header>
          <HomeIcon>⌂</HomeIcon>
          <Logo>PLACE PICKER</Logo>
          <StatusLight />
        </Header>

        <Screen>
          <Title>Choose Your Situation</Title>
          <SubTitle>오늘의 상황을 고르면 어울리는 장소 코스를 추천해드릴게요.</SubTitle>

          <SituationPanel>
            {situations.map((situation, index) => (
              <SituationButton
                key={situation}
                type="button"
                $active={selectedSituation === situation}
                onClick={() => setSelectedSituation(situation)}
              >
                <NumberBox>{index + 1}</NumberBox>
                {situation}
              </SituationButton>
            ))}
          </SituationPanel>
        </Screen>

        <ResultTitle>RECOMMENDED COURSE</ResultTitle>

        <CardGrid>
          {filteredCourses.map((course) => (
            <SituationCard key={course.id} course={course} />
          ))}
        </CardGrid>
      </GameMachine>
    </Page>
  );
};

export default Home;

const Page = styled.main`
  min-height: 100vh;
  padding: 24px 20px;
  background:
    radial-gradient(circle at 20% 20%, #fff36d 0 6px, transparent 7px),
    radial-gradient(circle at 80% 10%, #7bdcff 0 8px, transparent 9px),
    linear-gradient(180deg, #9dccff 0%, #f8ecff 100%);
`;

const GameMachine = styled.section`
  max-width: 960px;
  margin: 0 auto;
  padding: 22px;
  border: 4px solid #111;
  border-radius: 24px;
  background: #e9f0ff;
  box-shadow: 8px 8px 0 #111;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  padding: 10px 14px;
  border: 3px solid #111;
  border-radius: 16px;
  background: #fff7a8;
`;

const HomeIcon = styled.div`
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border: 3px solid #111;
  border-radius: 50%;
  background: #fff;
  font-size: 22px;
  font-weight: 800;
`;

const Logo = styled.h1`
  margin: 0;
  color: #111;
  font-size: 28px;
  letter-spacing: 2px;
`;

const StatusLight = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid #111;
  border-radius: 50%;
  background: #42e66f;
  box-shadow: inset -4px -4px 0 rgba(0, 0, 0, 0.15);
`;

const Screen = styled.section`
  padding: 24px 22px;
  border: 4px solid #111;
  border-radius: 14px;
  background: #fffef4;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0;
  padding: 12px;
  border: 3px solid #111;
  background: #fff342;
  color: #111;
  font-size: 26px;
`;

const SubTitle = styled.p`
  margin: 16px 0 20px;
  color: #222;
  font-size: 16px;
`;

const SituationPanel = styled.div`
  max-width: 520px;
  margin: 0 auto;
  display: grid;
  gap: 10px;
`;

const SituationButton = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border: 3px solid #111;
  border-radius: 4px;
  background: ${({ $active }) => ($active ? "#75f06b" : "#ffffff")};
  color: #111;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  text-align: left;
  box-shadow: 4px 4px 0 #111;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 #111;
  }
`;

const NumberBox = styled.span`
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border: 2px solid #111;
  background: #f4f4f4;
  font-weight: 900;
`;

const ResultTitle = styled.h2`
  margin: 28px 0 18px;
  color: #111;
  font-size: 22px;
  letter-spacing: 1px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
`;