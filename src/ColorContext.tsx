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
  setColor: Dispatch<any>; // generic type, from lecture
}

const ColorContext = createContext<Color>({
  color: '',
  setColor: () => {},
});

export var useColorContext = () => useContext(ColorContext);

export default function ColorContextProvider({ // higher order component
  children, // children passed as props
}: ColorContextProviderProps) {
  const [color, setColor] = useState('skyblue'); // state declaration

  return (  // property : state passed in. allows us to access anything wrapped here
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
}
