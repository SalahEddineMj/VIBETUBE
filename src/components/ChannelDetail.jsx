import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Box, CardMedia, Container } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

function ChannelDetail() {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
      fetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetails(data?.items[0]));

      fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id]);
  return (
    <>
      <Container>
        <Box sx={{ height: '200px', borderRadius: '12px', overflow: 'hidden' }}>
          {channelDetails?.brandingSettings?.image?.bannerExternalUrl ? (
              <CardMedia
                image={channelDetails?.brandingSettings?.image?.bannerExternalUrl}
                sx={{ height: '100%' }}
                alt="Channel Banner"
              />
            ) : (
              <Box sx={{ height: '100%', background: 'linear-gradient(90deg, rgba(20,66,214,1) 19%, rgba(248,7,255,1) 75%)' }} />
            )}
        </Box>
        <ChannelCard channelDetails={channelDetails} marginBlockStart={'-70px'}/>
        <Box sx={{ marginBlock: '12px' }}>
          <Videos videos={videos} />
        </Box>
      </Container>
    </>

  )
}

export default ChannelDetail