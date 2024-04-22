import React, { createContext, useState, useEffect } from "react";

export interface CurrentUser {
  id:number;
  fullName: string;
  role:string;
  email:string;
  phoneNumber:string,
}

export interface UserContextProps {
  currentUser: CurrentUser | null;
  setCurrentUser: (user: CurrentUser | null) => void;
}

export const UserContext = createContext<UserContextProps>({
  currentUser: null,
  setCurrentUser: () => {},
});

const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(() => {
    const storedUser = localStorage.getItem("currentUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;