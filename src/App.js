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
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <UserProvider>
      <Router>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            // Default options for all toasts
            duration: 3000,
            style: {
              borderRadius: '8px',
              padding: '16px',
              maxWidth: '400px',
            },
          }}
        />
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
