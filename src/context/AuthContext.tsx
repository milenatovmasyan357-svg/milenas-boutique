import React, { createContext, useContext, useState, useEffect } from "react";
import { User, Order } from "@/types";
import { toast } from "sonner";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string, phone?: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for demo
const mockUser: User = {
  id: 1,
  name: "Ցուցադրական օգտատեր",
  email: "demo@milenasboutique.com",
  phone: "096220983",
  address: "Տերյան 105, Երևան"
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("milenas-user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isAuthenticated = !!user;

  useEffect(() => {
    if (user) {
      localStorage.setItem("milenas-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("milenas-user");
    }
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock login - in production, this would be an API call
    if (email && password) {
      setUser(mockUser);
      toast.success("Մուտքը հաջողությամբ կատարվեց։");
      return true;
    }
    toast.error("Անվավեր տվյալներ");
    return false;
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    phone?: string
  ): Promise<boolean> => {
    // Mock registration - in production, this would be an API call
    if (name && email && password) {
      const newUser: User = {
        id: Date.now(),
        name,
        email,
        phone,
        address: ""
      };
      setUser(newUser);
      toast.success("Գրանցումը հաջողությամբ կատարվեց։");
      return true;
    }
    toast.error("Գրանցումը ձախողվեց");
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("milenas-user");
    toast.success("Դուրս եկաք համակարգից");
  };

  const updateProfile = (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      toast.success("Էջը թարմացվեց հաջողությամբ");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        updateProfile,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
