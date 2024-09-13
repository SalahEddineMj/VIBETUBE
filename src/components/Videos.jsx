/* eslint-disable react/prop-types */
import { Box, useTheme } from '@mui/material';
import { VideoCard, ChannelCard } from './'
import { useContext, useEffect, useRef } from "react";
import VideoContext from "./contexts/VideoContext";
function Videos({ videos }) {
  const { selectedCategory } = useContext(VideoContext)

  const theme = useTheme();
  const containerRef = useRef(null);
  useEffect(() => {
      if(containerRef.current) {
        containerRef.current.scrollTop = 0;
      }
  }, [selectedCategory])
  return (
    <Box ref={containerRef} sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: { xs: '8px', md: '14px' }, maxHeight: '100%', scrollBehavior: 'smooth', overflowY: 'auto', '::-webkit-scrollbar': { width: '10px'}, '::-webkit-scrollbar-track': { borderRadius: '8px', backgroundColor: theme.palette.background.default }, '::-webkit-scrollbar-thumb': { borderRadius: '4px', backgroundColor: theme.palette.background.paper } }}>
      { videos.map((item, idx) => {
        return  <Box key={idx}>
                  { (item.id.videoId || item.id.playlistId) && <VideoCard key={idx} video={item}/> }
                  { item.id.channelId && <ChannelCard channelDetails={item}/> }
                </Box>
      } ) }
    </Box>
  )
}

export default Videos