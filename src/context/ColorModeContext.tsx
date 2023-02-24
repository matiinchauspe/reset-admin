import { createContext } from 'react';

interface ColorModeContextProps {
  mode: 'light' | 'dark';
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextProps>({
  mode: 'light',
  toggleColorMode: () => {},
});

export const ColorModeProvider = ColorModeContext.Provider;