import { createContext } from "react";

export const AuthContext = createContext();
const storeTokenInLS = (serverToken) => {
  return localStorage.setItem("token", serverToken);
};
export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ storeTokenInLS }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = createContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth user outside of the provider");
  }
  return authContextValue;
};
