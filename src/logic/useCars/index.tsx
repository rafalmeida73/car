import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from "react";

import * as SecureStore from "expo-secure-store";

import { api } from "../../services/api";
import {
  CarsContextType,
  CarsResponse,
  LoginProps,
  LoginResponse,
  UseCarsProvider,
} from "./types";

const CarsContext = createContext({} as CarsContextType);

const CarsProvider: React.FC<UseCarsProvider> = ({ children }) => {
  const [token, setToken] = useState("");
  const [cars, setCars] = useState<CarsResponse[]>();

  const login = useCallback(
    async ({ username, password, keepConnected }: LoginProps) => {
      try {
        const response = await api.post<LoginResponse>("/login", {
          username,
          password,
        });

        if (keepConnected) {
          await SecureStore.setItemAsync("token", response?.data?.token);
        }
        setToken(response?.data?.token);
      } catch (error) {
        console.error(error);
        throw new Error("Error on login");
      }
    },
    [],
  );

  const loadCars = useCallback(async () => {
    try {
      if (token) {
        const response = await api.get<CarsResponse[]>("/carros", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setCars(response?.data);
      }
    } catch (error) {
      throw new Error("Error on request cars");
    }
  }, [token]);

  const logout = useCallback(async () => {
    try {
      await SecureStore.deleteItemAsync("token");
      setToken(null);
    } catch (error) {
      throw new Error("Error on login");
    }
  }, []);

  useEffect(() => {
    SecureStore.getItemAsync("token").then((token) => {
      setToken(token);
    });
  }, []);

  const value = {
    login,
    token,
    setToken,
    logout,
    cars,
    loadCars,
  };

  return <CarsContext.Provider value={value}>{children}</CarsContext.Provider>;
};

const useCars = (): CarsContextType => {
  const context = useContext(CarsContext);
  if (context === undefined) {
    throw new Error("No context on CarsContext");
  }
  return context;
};

export { useCars };
export default CarsProvider;
