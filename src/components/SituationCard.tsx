import { Link } from "react-router-dom";
import styled from "styled-components";
import type { Course } from "../types/place";

interface SituationCardProps {
  course: Course;
}

const SituationCard = ({ course }: SituationCardProps) => {
  return (
    <Card>
      <Tag>{course.situation}</Tag>

      <Title>{course.title}</Title>
      <Summary>{course.summary}</Summary>

      <MoodList>
        {course.moodTags.map((tag) => (
          <MoodTag key={tag}>{tag}</MoodTag>
        ))}
      </MoodList>

      {/* 선택한 코스 id를 URL에 담아 추천 페이지로 이동 */}
      <ViewLink to={`/recommend?courseId=${course.id}`}>코스 보기</ViewLink>
    </Card>
  );
};

export default SituationCard;

const Card = styled.article`
  width: 100%;
  min-height: 240px;
  padding: 22px;
  border: 3px solid #111;
  border-radius: 18px;
  background: #fffdf8;
  box-shadow: 6px 6px 0 #111;
  text-align: left;
  transition: transform 0.2s ease;

  &:hover {
    transform: translate(-3px, -3px);
  }
`;

const Tag = styled.span`
  display: inline-block;
  margin-bottom: 14px;
  padding: 6px 12px;
  border-radius: 999px;
  background: #f1e7d8;
  color: #7a5c3f;
  font-size: 13px;
  font-weight: 600;
`;

const Title = styled.h3`
  margin: 0 0 12px;
  color: #2f2924;
  font-size: 22px;
  line-height: 1.35;
`;

const Summary = styled.p`
  margin: 0 0 18px;
  color: #6f6760;
  font-size: 15px;
  line-height: 1.7;
`;

const MoodList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 22px;
`;

const MoodTag = styled.span`
  padding: 6px 10px;
  border-radius: 999px;
  background: #f7f3ed;
  color: #7c756f;
  font-size: 13px;
`;

const ViewLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 11px 16px;
  border-radius: 999px;
  background: #2f2924;
  color: white;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    background: #4a3b32;
  }
`;