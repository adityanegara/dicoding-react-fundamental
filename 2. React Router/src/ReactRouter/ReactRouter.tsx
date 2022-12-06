import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import AboutPage from "../Pages/AboutPage";
import FAQPage from "../Pages/FAQPage";
import HomePage from "../Pages/HomePage";

const ReactRouter = () => {
  return (
    <BrowserRouter>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/faq" element={<FAQPage/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default ReactRouter;
