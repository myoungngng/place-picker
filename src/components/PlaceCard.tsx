import { Link } from "react-router-dom";
import styled from "styled-components";

import type { Place } from "../types/place";

interface PlaceCardProps {
  place: Place;
}

const PlaceCard = ({ place }: PlaceCardProps) => {
  return (
    <Card>
      <TopLine>
        <Category>{place.category}</Category>
      </TopLine>

      <PlaceName>{place.name}</PlaceName>
      <Description>{place.description}</Description>

      <TagList>
        {place.tags.map((tag) => (
          <Tag key={tag}>#{tag}</Tag>
        ))}
      </TagList>

      <DetailLink to={`/place/${place.id}`}>상세 보기</DetailLink>
    </Card>
  );
};

export default PlaceCard;

const Card = styled.article`
  min-height: 230px;
  padding: 18px;
  border: 3px solid #111;
  border-radius: 18px;
  background: #fffaf0;
  box-shadow: 4px 4px 0 #111;
  text-align: left;

  display: flex;
  flex-direction: column;
`;

const TopLine = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
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
  margin: 0 0 12px;
  color: #111;
  font-size: 14px;
  line-height: 1.5;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 0 0 14px;
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