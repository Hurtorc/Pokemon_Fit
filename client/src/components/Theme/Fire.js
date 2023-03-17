import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#c70f0f',
      dark: '#ffffff',
      light: '#716565',
      contrastText: '#fbf5f5',
    },
    secondary: {
      main: '#dab2b2',
    },
    background: {
      default: '#e43f25',
      paper: '#f3ecec',
    },
    success: {
      main: '#0a0c0e',
    },
    info: {
      main: '#7d6c3d',
    },
    warning: {
      main: '#a2a09d',
    },
    error: {
      main: '#947d7d',
    },
  },
  typography: {
    h2: {
      fontFamily: 'Montserrat',
    },
  },
};