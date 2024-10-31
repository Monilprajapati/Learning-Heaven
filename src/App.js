import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import All from "./components/All";
import Explore from "./Pages/Explore/Explore";
import Likedvideos from "./Pages/LikedVideos/Likedvideos";
import Watchlater from "./Pages/Watchlater/Watchlater";
import { UserProvider } from './context/UserProvider';
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
import PrivateRoute from './components/PrivateRoute';
import VideoPage from './Pages/VideoPage/VideoPage';
import Message from './components/Message';

function App() {
  return (
    <UserProvider>
      <Router>
        <Message />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/explore" element={
            <PrivateRoute>
              <Explore />
            </PrivateRoute>
          } />
          <Route path="/likedvideos" element={
            <PrivateRoute>
              <Likedvideos />
            </PrivateRoute>
          } />
          <Route path="/watchlater" element={
            <PrivateRoute>
              <Watchlater />
            </PrivateRoute>
          } />
          <Route path="/explore/video/:id" element={
            <PrivateRoute>
              <VideoPage />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
