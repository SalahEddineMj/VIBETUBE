/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Stack, Box, Container, Typography, useTheme } from "@mui/material";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Sidebar, Videos } from './'
import { useContext } from "react";
import VideoContext from "./contexts/VideoContext";
function Feed() {
  const theme = useTheme();
  const { selectedCategory } = useContext(VideoContext);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory])
  return (
    <Box>
      <Container>
        <Stack direction={{ xs: 'column', md: 'row' }} sx={{ marginBlockStart: { xs: '6px', md: '20px' } }}>


          <Box height={{ xs: '41px', md: 'calc(100dvh - 110px)' }} sx={{ minWidth: { md: '240px' }, display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: { xs: 'unset', md: '1fr max-content' } }} borderRight={{ md: `1px solid ${theme.palette.background.paper}` }}>
            <Sidebar/>
            <Typography variant="body2" height={'56px'} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center',  }}>Copyright &copy; 2024 Salah Eddine Mj</Typography>
          </Box>

          <Box component={'main'} paddingInlineStart={{ md: '40px' }} sx={{paddingBlock: { xs: '6px', md: '12px' }, width: '100%', textAlign: { xs: 'center', md: 'start' }, height: { xs: 'calc(100dvh - 119px)', md: 'calc(100vh - 110px)' }, display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: 'max-content 1fr' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBlockEnd: { xs: '8px', md: '16px' }, fontSize: { xs: '1.5rem', md: '34px' } }}>
              {selectedCategory}
              <Typography variant="body3" sx={{ color: theme.palette.secondary.main }}> videos</Typography>
            </Typography>
            <Videos videos={videos}/>
          </Box>

        </Stack>
      </Container>
    </Box>
  )
}

export default Feed