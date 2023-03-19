import { ThemeOptions } from '@mui/material/styles';

export const waterTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#8adde8',
      contrastText: 'rgba(63,58,58,0.87)',
      light: '#25b0b9',
      dark: '#294c50',
    },
    secondary: {
      main: '#3170dc',
    },
    background: {
      default: '#0acae6',
    },
    error: {
      main: '#d32f2f',
    },
    success: {
      main: '#2e547d',
    },
  },
  typography: {
    fontFamily: 'Droid Serif',
  },
};