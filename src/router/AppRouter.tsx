import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Recommend from "../pages/Recommend";
import PlaceDetail from "../pages/PlaceDetail";
import Favorites from "../pages/Favorites";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recommend" element={<Recommend />} />
      <Route path="/place/:id" element={<PlaceDetail />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRouter;