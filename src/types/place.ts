// category에는 restaurant, cafe, walk 중 하나만 저장 가능(장소 유형을 제한하여 잘못된 문자열 입력을 방지)
export type PlaceCategory = "restaurant" | "cafe" | "walk";

// 장소 정보 저장
// interface를 사용해서 객체의 구조를 명확하게 정의
export interface Place {
  id: number;
  name: string;
  category: PlaceCategory; // 위에서 정의한 PlaceCategory 타입 사용
  area: string;
  address: string;
  description: string;
  tags: string[];
  image: string;
}

// 상황별 추천 코스
export interface Course {
  id: number;
  title: string;
  situation: string;
  summary: string;
  moodTags: string[];
  placeIds: number[]; // 코스에 포함된 장소들의 id 목록
  image?: string; // 코스 대표 이미지
}

// 장소별 리뷰 데이터
export interface Review {
  id: number;
  placeId: number;
  rating: number;
  content: string;
  createdAt: string;
}