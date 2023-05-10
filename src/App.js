import ScrollToTopButton from "./components/Scroll";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/Privacy";
import Recipe from "./pages/Recipe";
import Recipes from "./pages/Recipes";
import Nav from "./components/Nav";
import Occasions from "./pages/Occasions";
import Quick from "./pages/Quick";
import Trends from "./pages/Trends";
function App() {
  return (
    <Router>
      <div className="App bg-gray-100 dark:bg-dark dark:text-white">
        <Nav />
        <ScrollToTopButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/occasions" element={<Occasions />} />
          <Route path="/quick" element={<Quick />} />
          <Route path="/trends" element={<Trends />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
