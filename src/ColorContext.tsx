import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
} from 'react';

interface ColorContextProviderProps {
  children: ReactNode;
}

interface Color {
  color: string;
  setColor: Dispatch<any>;
}

const ColorContext = createContext<Color>({
  color: '',
  setColor: () => {},
});

export const useColorContext = () => useContext(ColorContext);

export default function ColorContextProvider({
  children,
}: ColorContextProviderProps) {
  const [color, setColor] = useState('skyblue');

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
}
