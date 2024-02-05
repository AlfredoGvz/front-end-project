import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Nav from "./components/Nav";
import ArticleGallery from "./components/Article-Gallery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/api/articles" element={<ArticleGallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
