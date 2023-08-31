import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import All from "./components/All";
import Explore from "./Pages/Explore/Explore";
import Likedvideos from "./Pages/LikedVideos/Likedvideos";
import Watchlater from "./Pages/Watchlater/Watchlater";
import CourseList from "./components/Courses/CourseList/Courselist";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<All />}></Route>
        <Route path="#categories" element = {<CourseList/>}></Route>
        <Route path="/explore" element = {<Explore/>}></Route>
        <Route path="/likedvideos" element = {<Likedvideos/>}></Route>
        <Route path="/watchlater" element = {<Watchlater/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
