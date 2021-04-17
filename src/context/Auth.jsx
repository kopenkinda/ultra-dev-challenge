import { createContext, useEffect, useState } from 'react';

const USER_STRING = 'app-user';

export const authContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(USER_STRING));
    setUser(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem(USER_STRING, JSON.stringify(user));
  }, [user]);

  return (
    <authContext.Provider value={[user, setUser]}>
      {children}
    </authContext.Provider>
  );
};
