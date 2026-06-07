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
  min-height: 200px;
  padding: 16px;
  border: 3px solid #111;
  border-radius: 14px;
  background: #fffdf8;
  box-shadow: 5px 5px 0 #111;
  text-align: left;
  transition: transform 0.2s ease;

  &:hover {
    transform: translate(-2px, -2px);
  }
`;

const Tag = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 999px;
  background: #f1e7d8;
  color: #7a5c3f;
  font-size: 12px;
  font-weight: 600;
`;

const Title = styled.h3`
  margin: 0 0 8px;
  color: #2f2924;
  font-size: 18px;
  line-height: 1.35;
`;

const Summary = styled.p`
  margin: 0 0 12px;
  color: #6f6760;
  font-size: 13px;
  line-height: 1.5;
`;

const MoodList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
`;

const MoodTag = styled.span`
  padding: 5px 8px;
  border-radius: 999px;
  background: #f7f3ed;
  color: #7c756f;
  font-size: 12px;
`;

const ViewLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 13px;
  border-radius: 999px;
  background: #2f2924;
  color: white;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    background: #4a3b32;
  }
`;