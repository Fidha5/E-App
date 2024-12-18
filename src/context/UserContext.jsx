import React, { createContext, useState,useContext } from 'react';

export const UserContext = createContext();


export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("username") || null); // Holds user data

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
