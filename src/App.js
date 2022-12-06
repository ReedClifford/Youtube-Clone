import { Route, Routes } from "react-router-dom";
import useDarkMode from "./hooks/useToggles";
import Navbar from "./routes/Navbar";
import Home from "./routes/pages/Home";
const App = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark" : ""}>
      <section className="min-h-screen bg-white  text-black dark:bg-gradient-to-tr dark:from-black dark:to-neutral-900">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="coding" element={"coding"} />
            <Route path="dota" element={"coding"} />
            <Route path="tof" element={"coding"} />
            <Route path="anime" element={"coding"} />
            <Route path="gaming" element={"gaming"} />
            <Route path="music" element={"music"} />
            <Route path="education" element={"education"} />
            <Route path="movies" element={"movies"} />
            <Route path="sports" element={"sports"} />
            <Route path="news" element={"news"} />
            <Route path="fashion" element={"fashion"} />
          </Route>
        </Routes>
      </section>
    </div>
  );
};
export default App;
