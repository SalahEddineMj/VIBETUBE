import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchFromApi } from "../utils/fetchFromApi";
import { CheckCircle, Visibility, ThumbUp } from "@mui/icons-material";
import {Divider, useTheme} from "@mui/material";
import Videos from "./Videos";
import { Box, Container, Stack, Typography, CardMedia } from "@mui/material";
function VideoDetail() {
  const theme = useTheme();
  const [videoDetails, setVideoDetails] = useState(null);
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
      fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetails(data?.items[0]));

      fetchFromApi(`search?part=snippet&relatedVideoId=${id}&type=video`)
      .then((data) => setVideos(data?.items));
  }, [id])

  useEffect(() => {
    if(videoDetails?.snippet?.channelId) {
      fetchFromApi(`channels?part=snippet&id=${videoDetails.snippet.channelId}`)
      .then((data) => setChannelDetails(data?.items[0]));
    }
  }, [videoDetails?.snippet?.channelId])
  return (
  <Container>
    <Box sx={{ marginBlockStart: '36px' }}>
      <Stack direction={{ xs: 'column', md: 'row'}} useFlexGap gap={'24px'}>
        <Box sx={{ flexGrow: 1 }}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls style={{ overflow: 'hidden', borderRadius: '12px', maxWidth: '100%', minWidth: '100%' }} className="react-player"/>
          <Typography component={'h4'} sx={{ marginBlock: '10px', fontWeight: { md:'600' }, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
            { videoDetails?.snippet?.title }
          </Typography>
            <Stack direction={'row'} sx={{ alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
              <Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
                <Stack direction={'row'} gap={'10px'} sx={{  alignItems: 'center'}}>
                  {channelDetails?.snippet?.thumbnails?.default?.url && (
                    <CardMedia image={channelDetails?.snippet?.thumbnails?.default?.url} sx={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                  )}
                  <Box>
                    <Typography variant="body1">
                      { videoDetails?.snippet?.channelTitle }
                      <CheckCircle sx={{ fontSize: '14px', marginInlineStart: '6px' }}/>
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      { parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString() } subscribers
                    </Typography>
                  </Box>
                </Stack>
              </Link>
                <Stack direction={'row'} sx={{ alignItems: 'center', backgroundColor: theme.palette.background.paper, p: '10px', borderRadius: '1000px', gap: '10px' }} divider={<Divider orientation="vertical" flexItem />}>
                  <Stack direction={'row'} sx={{ alignItems: 'center', gap: '4px' }}>
                    <Typography>
                      { parseInt(videoDetails?.statistics?.viewCount).toLocaleString() }
                    </Typography>
                    <Visibility/>
                  </Stack>
                  <Stack direction={'row'} sx={{ alignItems: 'center', gap: '4px' }}>
                    <Typography>
                      { parseInt(videoDetails?.statistics?.likeCount).toLocaleString() }
                    </Typography>
                    <ThumbUp/>
                  </Stack>
                </Stack>
            </Stack>
        </Box>
        <Box sx={{ height: 'calc(100vh - 126px)', paddingBlockEnd: '12px', maxWidth: { md: '300px' } }}>
          <Videos videos={videos}/>
        </Box>
      </Stack>
    </Box>
  </Container>
  )
}

export default VideoDetail