import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Nav from "./components/Nav";
import ArticleGallery from "./components/Article-Gallery";
import ArticlePage from "./components/Article-Page";
import Home from "./components/Home";
import { createContext } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/articles" element={<ArticleGallery />} />
          <Route exact path="/articles/:article_id" element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
