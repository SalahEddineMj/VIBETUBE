/* eslint-disable no-unused-vars */
import { createTheme } from "@mui/material";
import { baseTheme } from './baseTheme';

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#3B82F6'
    },
    secondary: {
      main: '#6D28D9'
    },
    background: {
      default: '#1E1E1E',
      paper: '#2D2D2D'
    },
    text: {
      primary: '#F5F5F5',
      secondary: '#4B5563'
    },
    action: {
      active: '#3B82F6',
      hover: '#22D3EE'
    }
  }
})
export default darkTheme