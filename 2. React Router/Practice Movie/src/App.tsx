import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import DetailPage from "./Pages/DetailPage";
import HomePage from "./Pages/HomePage";
import NowPlayingPage from "./Pages/NowPlayingPage";
import SearchPage from "./Pages/SearchPage";
import UpcomingPage from "./Pages/UpcomingPage";

const RouterParamsAndQuery = () => {
  return (
    <BrowserRouter>
      <header>
        <h1>Movie Catalogue</h1>
        <Navigation/>
      </header>
      <main>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/now-playing" element={<NowPlayingPage/>}/>
            <Route path="/upcoming" element={<UpcomingPage/>}/>
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/detail/:id" element={<DetailPage/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default RouterParamsAndQuery;
