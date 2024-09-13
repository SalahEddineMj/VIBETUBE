/* eslint-disable react/prop-types */
import { IconButton} from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
function SwitchTheme({toggleTheme, isDarkMode}) {
  return (
    <IconButton aria-label="toggle" onClick={toggleTheme}  sx={{ transition: '0.3s', rotate: isDarkMode ? '-90deg' : '0',}}>
      { isDarkMode ? <LightModeIcon/> : <DarkModeIcon/> }
    </IconButton>
  )
}

export default SwitchTheme