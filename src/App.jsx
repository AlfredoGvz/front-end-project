import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Nav from "./components/Nav";
import ArticleGallery from "./components/Article-Gallery";
import ArticlePage from "./components/Article-Page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/api/articles" element={<ArticleGallery />} />
          <Route
            exact
            path="/api/articles/:article_id"
            element={<ArticlePage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
