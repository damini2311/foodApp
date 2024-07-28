// utils/UserContext.js
import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [LoggedInUser, setLoggedInUser] = useState("");

  return (
    <UserContext.Provider value={{ LoggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
