import { ThemeOptions } from '@mui/material/styles';

export const plantTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#5ab53f',
      light: '#b3e6a5',
      dark: '#3b6931',
    },
    secondary: {
      main: '#00f551',
    },
    error: {
      main: '#afce18',
    },
    text: {
      primary: 'rgba(43,40,40,0.87)',
    },
    background: {
      default: '#2a5c39',
    },
    warning: {
      main: '#a9c92a',
    },
  },
  typography: {
    h2: {
      fontFamily: 'Droid Sans',
    },
  },
  shape: {
    borderRadius: 4,
  },
};