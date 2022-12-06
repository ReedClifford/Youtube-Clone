import { Route, Routes } from "react-router-dom";
import useDarkMode from "./hooks/useDarkMode";
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
          </Route>
        </Routes>
      </section>
    </div>
  );
};
export default App;
