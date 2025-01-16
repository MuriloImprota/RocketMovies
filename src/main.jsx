import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import { Routes } from './routes';
import theme from "./styles/theme";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <Routes/>
    </ThemeProvider>
  </StrictMode>
)
