import { useSearchParams } from "react-router-dom";
import { courses, places } from "../data/places";

const Recommend = () => {
  // URL의 query string 읽기
  const [searchParams] = useSearchParams();

  const courseId = Number(searchParams.get("courseId"));

  // 선택된 코스 찾기
  const selectedCourse = courses.find(
    (course) => course.id === courseId
  );

  if (!selectedCourse) {
    return <p>선택한 코스를 찾을 수 없습니다.</p>;
  }

  const selectedPlaces = places.filter((place) =>
    selectedCourse.placeIds.includes(place.id)
  );

  return (
    <main>
      <h1>{selectedCourse.title}</h1>

      <p>{selectedCourse.summary}</p>

      <h2>추천 장소</h2>

      {selectedPlaces.map((place) => (
        <article key={place.id}>
          <h3>{place.name}</h3>
          <p>{place.description}</p>
        </article>
      ))}
    </main>
  );
};

export default Recommend;