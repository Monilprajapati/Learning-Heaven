import React, { createContext, useContext, useState, useEffect } from "react";
import {
  addUser,
  findUserByEmail,
  validateUser,
} from "../utils/data/d/data";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [watchLater, setWatchLater] = useState(() => {
    const savedWatchLater = localStorage.getItem("watchLater");
    return savedWatchLater ? JSON.parse(savedWatchLater) : [];
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("watchLater", JSON.stringify(watchLater));
  }, [watchLater]);

  const login = (userData) => {
    const validUser = validateUser(userData.email, userData.password);
    if (validUser) {
      setUser(validUser);
      return true;
    }
    return false;
  };

  const register = (userData) => {
    const existingUser = findUserByEmail(userData.email);
    if (existingUser) {
      return false;
    }
    const newUser = addUser(userData);
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
    setWishlist([]);
    setWatchLater([]);
    localStorage.removeItem("user");
    localStorage.removeItem("wishlist");
    localStorage.removeItem("watchLater");
  };

  const toggleWishlist = (courseId) => {
    setWishlist((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const toggleWatchLater = (courseId) => {
    setWatchLater((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        wishlist,
        watchLater,
        toggleWishlist,
        toggleWatchLater,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
