import './App.css'
import UserList from "./UserList.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home.tsx";
import NotFound from "./NotFound.tsx";
import PostList from "./PostList.tsx";
import PostDetail from "./PostDetail.tsx";
import About from "./About.tsx";

function App() {
  return (
      <>
          <p>Exercice 1</p>
          <br/>
          <UserList/>
          <br/>
          <p>Exercice 2</p>
          <br/>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/posts" element={<PostList />} />
                  <Route path="/posts/:id" element={<PostDetail />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
