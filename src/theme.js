import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#7C4DFF' }, // neon purple
    secondary: { main: '#00E5FF' }, // cyber teal
    background: { default: '#0B0F12', paper: '#0F1418' },
    divider: '#1E2A33',
    text: { primary: '#E6EEF3', secondary: '#B4C0C8' },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: [
      'Inter',
      'system-ui',
      'Segoe UI',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    fontSize: 14,
  },
  components: {
    MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
    MuiAppBar: { styleOverrides: { root: { backgroundImage: 'none', backdropFilter: 'blur(6px)' } } },
    MuiButton: { defaultProps: { disableRipple: true } },
    MuiChip: { styleOverrides: { root: { fontWeight: 600 } } },
  },
})

export default theme

