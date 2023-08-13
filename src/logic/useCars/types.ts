export interface LoginProps {
  username: string;
  password: string;
  keepConnected: boolean;
}

export interface CarsResponse {
  id: number;
  nome: string;
  tipo: string;
  descricao: string;
  urlFoto: string;
  urlVideo: string;
  latitude: string;
  longitude: string;
}

export type CarsContextType = {
  login: ({ username, password }: LoginProps) => Promise<void>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  logout: () => Promise<void>;
  loadCars: () => Promise<void>;
  cars: CarsResponse[];
};

export interface UseCarsProvider {
  children: React.ReactNode;
}

export interface LoginResponse {
  id: number;
  login: string;
  nome: string;
  email: string;
  urlFoto: string;
  token: string;
  roles: Array<string>;
}
