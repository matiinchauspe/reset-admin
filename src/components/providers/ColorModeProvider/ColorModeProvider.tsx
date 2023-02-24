import { PaletteMode } from '@mui/material';
import { useMemo, useState } from 'react';

import { ColorModeProvider as ColorModeContextProvider } from '@context/index';

interface ColorModeProviderProps {
  children: React.ReactNode;
}

const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
  const [mode, setMode] = useState<PaletteMode>('light');
  
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
      mode,
    }),
    [mode],
  );

  return <ColorModeContextProvider value={colorMode}>{children}</ColorModeContextProvider>;

};

export default ColorModeProvider;