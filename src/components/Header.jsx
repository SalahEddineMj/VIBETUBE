/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Container, Stack, Box, useTheme, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from '../utils/constants'
import SearchBar from "./SearchBar";
import SwitchTheme from "./SwitchTheme";

function Navbar({toggleTheme, isDarkMode}) {
  const theme = useTheme();
  return (
    <Box component={'header'} bgcolor={theme.palette.background.paper} paddingBlock={2}>
      <Container>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} useFlexGap gap={{ xs: '12px', md: '24px' }}>
          <Link to='/'>
            <Stack direction={'row'} sx={{ alignItems: 'center', gap: '10px' }}>
              <Box component={'img'} src={logo} alt="logo" sx={{ height: { xs: '35px', md: '50px' } }} />
              <Typography variant="h5" sx={{ display: { xs: 'none', md: 'block' } }}>VIBETUBE</Typography>
            </Stack>
          </Link>
          <SearchBar/>
          <SwitchTheme toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar