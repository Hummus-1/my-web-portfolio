import '@mantine/core/styles.css';
import './App.css';
import { MantineProvider } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Router } from './Router';
import { PrimaryColors, resolver, theme } from './theme';
import { PrimaryColorContext } from './PrimaryColorContext';

export default function App() {
  const [primaryColor, setPrimaryColor] = useState<PrimaryColors>('highViolet');
  const [actualTheme, setActualTheme] = useState(theme);

  useEffect(() => {
    setActualTheme((prev) => ({
      ...prev,
      primaryColor,
    }));
  }, [primaryColor, setActualTheme]);

  return (
    <PrimaryColorContext.Provider value={setPrimaryColor}>
      <MantineProvider theme={actualTheme} cssVariablesResolver={resolver}>
        <Router />
        <Analytics />
        <SpeedInsights />
      </MantineProvider>
    </PrimaryColorContext.Provider>
  );
}
