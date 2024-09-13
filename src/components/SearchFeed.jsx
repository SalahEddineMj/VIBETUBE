import Videos from "./Videos";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Container } from "@mui/material";

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm])

  return (
    <Container>
      <Videos videos={videos}/>
    </Container>
  )
}

export default SearchFeed