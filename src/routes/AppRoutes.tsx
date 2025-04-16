import { Routes, Route } from "react-router";
import { ROUTES } from "./routes";
import HomePage from "./HomePage.tsx";
import About from "./About.tsx";
import NotFound from "./NotFound.tsx";
import Counter from "./Counter.tsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      <Route path={ROUTES.COUNTER} element={<Counter />} />
    </Routes>
  );
}
