import { useEffect, useState } from "react";
import styled from "styled-components";

import type { Review } from "../types/place";

interface ReviewSectionProps {
  placeId: number;
}

const ReviewSection = ({ placeId }: ReviewSectionProps) => {
  const storageKey = `reviews-${placeId}`;

  const [reviews, setReviews] = useState<Review[]>(() => {
    const savedReviews = localStorage.getItem(storageKey);
    return savedReviews ? JSON.parse(savedReviews) : [];
  });
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState("");

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(reviews));
  }, [reviews, storageKey]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!content.trim()) {
      alert("리뷰 내용을 입력해주세요.");
      return;
    }

    const newReview: Review = {
      id: Date.now(),
      placeId,
      rating,
      content,
      createdAt: new Date().toLocaleDateString(),
    };

    setReviews((prevReviews) => [newReview, ...prevReviews]);
    setRating(5);
    setContent("");
  };

  const handleDelete = (reviewId: number) => {
    setReviews((prevReviews) =>
      prevReviews.filter((review) => review.id !== reviewId)
    );
  };

  return (
    <Section>
      <Header>
        <Title>리뷰 기록</Title>
        <CountBadge>{reviews.length} REVIEW</CountBadge>
      </Header>

      <Form onSubmit={handleSubmit}>
        <Select
          value={rating}
          onChange={(event) => setRating(Number(event.target.value))}
        >
          <option value={5}>★★★★★ 5점</option>
          <option value={4}>★★★★☆ 4점</option>
          <option value={3}>★★★☆☆ 3점</option>
          <option value={2}>★★☆☆☆ 2점</option>
          <option value={1}>★☆☆☆☆ 1점</option>
        </Select>

        <Textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="이 장소에 대한 후기를 남겨보세요."
        />

        <SubmitButton type="submit">리뷰 등록</SubmitButton>
      </Form>

      <ReviewList>
        {reviews.length === 0 ? (
          <EmptyText>아직 등록된 리뷰가 없습니다.</EmptyText>
        ) : (
          reviews.slice(0, 2).map((review) => (
            <ReviewItem key={review.id}>
              <ReviewHeader>
                <RatingText>{"★".repeat(review.rating)}</RatingText>
                <DateText>{review.createdAt}</DateText>
              </ReviewHeader>

              <ReviewContent>{review.content}</ReviewContent>

              <DeleteButton
                type="button"
                onClick={() => handleDelete(review.id)}
              >
                삭제
              </DeleteButton>
            </ReviewItem>
          ))
        )}
      </ReviewList>
    </Section>
  );
};

export default ReviewSection;

const Section = styled.section`
  margin-top: 16px;
  padding: 16px 20px;
  border: 3px solid #111;
  border-radius: 20px;
  background: #fffaf0;
  box-shadow: 5px 5px 0 #111;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  gap: 12px;
`;

const Title = styled.h2`
  margin: 0;
  color: #111;
  font-size: 24px;
`;

const CountBadge = styled.span`
  padding: 7px 12px;
  border: 2px solid #111;
  border-radius: 999px;
  background: #d8d8d8a4;
  color: #111;
  font-size: 13px;
  font-weight: 900;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 160px 1fr auto;
  gap: 10px;
  margin-bottom: 12px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Select = styled.select`
  height: 44px;
  padding: 0 12px;
  border: 2px solid #111;
  border-radius: 12px;
  background: #fffef4;
  color: #111;
  font-size: 14px;
  font-weight: 700;
`;

const Textarea = styled.textarea`
  min-height: 44px;
  max-height: 70px;
  padding: 11px 12px;
  border: 2px solid #111;
  border-radius: 12px;
  background: #fffef4;
  color: #111;
  resize: none;
  font-size: 14px;
  line-height: 1.4;

  &::placeholder {
    color: #777;
  }
`;

const SubmitButton = styled.button`
  height: 44px;
  padding: 0 16px;
  border: 2px solid #111;
  border-radius: 999px;
  background: #ff8b55c9;
  color: #111;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
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

const ReviewList = styled.div`
  display: grid;
  gap: 8px;
`;

const EmptyText = styled.p`
  margin: 0;
  padding: 12px;
  border: 2px dashed #111;
  border-radius: 14px;
  background: #fffef4;
  color: #111;
  font-size: 14px;
`;

const ReviewItem = styled.article`
  padding: 10px 12px;
  border: 2px solid #111;
  border-radius: 14px;
  background: #fffef4;
  color: #111;
  text-align: left;
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 6px;
`;

const RatingText = styled.strong`
  color: #45ae3b;
  font-size: 13px;
`;

const DateText = styled.span`
  color: #555;
  font-size: 12px;
  font-weight: 700;
`;

const ReviewContent = styled.p`
  margin: 0;
  color: #111;
  font-size: 14px;
  line-height: 1.4;
`;

const DeleteButton = styled.button`
  margin-top: 8px;
  padding: 6px 11px;
  border: 2px solid #111;
  border-radius: 999px;
  background: #d8d8d8a4;
  color: #111;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 2px 2px 0 #111;
  transition: 0.15s ease;

  &:hover {
    background: #ff8b55c9;
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0 #111;
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }
`;