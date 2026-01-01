import React from 'react';
import { DataProvider } from './context/DataContext';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <DataProvider>
        <Home />
      </DataProvider>
    </ThemeProvider>
  );
};

export default App;
