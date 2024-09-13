/* eslint-disable no-unused-vars */
import { createTheme } from "@mui/material";
import { baseTheme } from './baseTheme'

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#3B82F6'
    },
    secondary: {
      main: '#6D28D9'
    },
    background: {
      default: '#F0F8FF',
      paper: '#e5e7ea'
    },
    text: {
      primary: '#111827',
      secondary: '#4B5563'
    },
    action: {
      active: '#3B82F6',
      hover: '#22D3EE'
    }
  }
})
export default lightTheme