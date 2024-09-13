/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, CardMedia, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
import { CheckCircle } from '@mui/icons-material';
function ChannelCard({ channelDetails, marginBlockStart }) {
  const theme = useTheme();
  return (
    <Box sx={{ height: '100%', display: 'grid', placeContent: 'center', marginBlockStart }}>
      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
        <CardMedia sx={{ width: '140px', height: '140px', borderRadius: '50%', marginInline: 'auto' }} image={ channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture }
          alt={channelDetails?.snippet?.title}
        />
        <Typography component={'h6'} sx={{ textAlign: 'center', marginBlock: '10px', fontWeight: 'bold' }}>
          {channelDetails?.snippet?.title}
          <CheckCircle sx={{ fontSize: '14px', marginInlineStart: '6px', color: theme.palette.text.secondary}}/>
        </Typography>
        { channelDetails?.statistics?.subscriberCount && (
          <Typography variant='subtitle1' color={ theme.palette.text.secondary } textAlign={'center'}>
            { parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString() } Subscribers
          </Typography>
        )}
      </Link>
    </Box>
  )
}

export default ChannelCard