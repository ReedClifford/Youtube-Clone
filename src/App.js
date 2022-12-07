import { Route, Routes } from "react-router-dom";
import useDarkMode from "./hooks/useToggles";
import Navbar from "./routes/Navbar";
import Anime from "./routes/pages/Anime";
import Code from "./routes/pages/Code";
import Dota from "./routes/pages/Dota";
import Education from "./routes/pages/Education";
import Fashion from "./routes/pages/Fashion";
import Gaming from "./routes/pages/Gaming";
import Home from "./routes/pages/Home";
import Movies from "./routes/pages/Movies";
import Music from "./routes/pages/Music";
import News from "./routes/pages/News";
import Sports from "./routes/pages/Sports";
import Tof from "./routes/pages/Tof";

const App = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark" : ""}>
      <section className="min-h-screen bg-white  text-black dark:bg-gradient-to-tr dark:from-black dark:to-neutral-900">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="coding" element={<Code />} />
            <Route path="dota" element={<Dota />} />
            <Route path="tof" element={<Tof />} />
            <Route path="anime" element={<Anime />} />
            <Route path="gaming" element={<Gaming />} />
            <Route path="music" element={<Music />} />
            <Route path="education" element={<Education />} />
            <Route path="movies" element={<Movies />} />
            <Route path="sports" element={<Sports />} />
            <Route path="news" element={<News />} />
            <Route path="fashion" element={<Fashion />} />
          </Route>
        </Routes>
      </section>
    </div>
  );
};
export default App;
