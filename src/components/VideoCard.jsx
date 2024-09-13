/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Box, useTheme } from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelUrl, demoChannelTitle } from '../utils/constants';
function VideoCard({ video: { id: { videoId }, snippet } }) {
  const theme = useTheme()
  return (
    <Card sx={{ borderRadius: '10px', backgroundColor: 'initial', height: '100%' }}>
        <Link to={videoId ? `/video/${videoId} ` : demoVideoUrl}>
          <CardMedia 
            image={ snippet?.thumbnails?.high?.url || demoThumbnailUrl }
            alt={snippet?.title}
            sx={{ height: '180px' }}
          />
        </Link>
        <CardContent>
          <Link to={videoId ? `/video/${videoId} ` : demoVideoUrl }>
            <Typography variant='subtitle1'>
              { snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60) }
            </Typography>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId} ` : demoChannelUrl}>
            <Typography variant='subtitle2' color={theme.palette.text.secondary}>
              { snippet?.channelTitle || demoChannelTitle }
              <CheckCircle sx={{ fontSize: '12px', marginInlineStart: '5px' }}/>
            </Typography>
          </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard