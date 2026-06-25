import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0044cc',
      light: 'rgba(0, 68, 204, 0.08)',
      dark: '#0033aa',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ff4444',
      light: 'rgba(255, 68, 68, 0.06)',
      border: 'rgba(255, 68, 68, 0.15)',
    },
    success: {
      main: '#00cc88',
      light: 'rgba(0, 204, 136, 0.06)',
      border: 'rgba(0, 204, 136, 0.15)',
    },
    background: {
      card: 'rgba(255, 255, 255, 0.3)',
      cardStrong: 'rgba(255, 255, 255, 0.4)',
      cardHover: 'rgba(255, 255, 255, 0.45)',
      glassBorder: 'rgba(255, 255, 255, 0.6)',
      glassBorderStrong: 'rgba(255, 255, 255, 0.8)',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  shadows: [
    ...createTheme().shadows,
    '0 20px 40px rgba(0, 70, 120, 0.02)',
    '0 25px 50px rgba(0, 70, 120, 0.02)',
    '0 40px 80px rgba(0, 70, 120, 0.03)',
  ]
});

export default theme;