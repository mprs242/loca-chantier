import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  role: "loueur" | "locataire";
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // Charger utilisateur depuis localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const expiry = localStorage.getItem("expiry");

    if (storedUser && expiry) {
      if (Date.now() < Number(expiry)) {
        setUser(JSON.parse(storedUser));
      } else {
        localStorage.removeItem("user");
        localStorage.removeItem("expiry");
      }
    }
  }, []);

  const login = (newUser: User) => {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    localStorage.setItem("expiry", String(Date.now() + 5 * 60 * 60 * 1000)); // 5h
    if (newUser.role === "loueur") navigate("/espace-loueur");
    if (newUser.role === "locataire") navigate("/espace-locataire");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("expiry");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
