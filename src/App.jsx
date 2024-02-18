import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Nav from "./components/Nav";
import ArticleGallery from "./components/Article-Gallery";
import ArticlePage from "./components/Article-Page";
import PostNewArticle from "./components/Post-Article";
import Home from "./components/Home";
import UserContext from "./components/UserContext";
import { useState } from "react";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("tickle122");

  return (
    <>
      <UserContext.Provider value={loggedInUser}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route
              exact
              path={"/post_new_article"}
              element={<PostNewArticle />}
            />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/articles" element={<ArticleGallery />} />
            <Route
              exact
              path="/articles/:article_id"
              element={<ArticlePage />}
            />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
