import { useEffect } from "react";
import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(auth));
  }, [auth]);

  console.log(auth);
  console.log("localsrg" + JSON.parse(localStorage.getItem("items")));
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
