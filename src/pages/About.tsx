import { Link } from "react-router-dom";
import styled from "styled-components";

const About = () => {
  return (
    <Page>
      <Panel>
        <Header>
          <BackLink to="/">← 메인으로</BackLink>
          <Badge>ABOUT</Badge>
        </Header>

        <Hero>
          <Title>ABOUT PLACE PICKER</Title>
          <Description>
            Place Picker는 사용자의 상황에 맞춰
          </Description>
          <Description>
            맛집, 카페, 산책 장소를 하나의 코스로
          </Description>
          <Description>
            추천하는 과제용 웹사이트입니다.
          </Description>
        </Hero>

        <SectionGrid>
          <Section>
            <SectionTitle>MAIN FEATURES</SectionTitle>
            <List>
              <li>상황별 추천 코스 필터링</li>
              <li>맛집 · 카페 · 산책 장소를 연결한 코스 제공</li>
              <li>장소 상세 정보 확인</li>
              <li>찜한 장소 저장</li>
              <li>장소별 리뷰 작성 및 삭제</li>
            </List>
          </Section>

          <Section>
            <SectionTitle>TECH STACK</SectionTitle>
            <List>
              <li>React</li>
              <li>TypeScript</li>
              <li>React Router</li>
              <li>Context API</li>
              <li>styled-components</li>
              <li>localStorage</li>
            </List>
          </Section>
        </SectionGrid>
      </Panel>
    </Page>
  );
};

export default About;

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
  text-align: left;
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
  background: #cacaca9b;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0 0 8px;
  color: #111;
  font-size: clamp(26px, 3vw, 36px);
  line-height: 1.2;
`;

const Description = styled.p`
  max-width: 620px;
  margin: 0 auto;
  color: #111;
  font-size: 15px;
  line-height: 1.5;
`;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.section`
  min-height: 230px;
  padding: 18px;
  border: 3px solid #111;
  border-radius: 18px;
  background: #fffaf0;
  box-shadow: 4px 4px 0 #111;
`;

const SectionTitle = styled.h2`
  margin: 0 0 14px;
  color: #45ae3b;
  font-size: 18px;
  font-weight: 900;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 20px;
  color: #111;
  font-size: 14px;
  line-height: 1.6;

  li {
    margin-bottom: 7px;
  }
`;