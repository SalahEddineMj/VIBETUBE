/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline} from "@mui/material";
import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";
import { useState } from "react";
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from "./components";
import VideoContext from "./components/contexts/VideoContext";
import './app.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Laravel');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <>
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline/>
      <BrowserRouter>
      <VideoContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
        <Routes>
          <Route path="/" element={<Feed/>}/>
          <Route path="/video/:id" element={<VideoDetail/>} />
          <Route path="/channel/:id" element={<ChannelDetail/>} />
          <Route path="search/:searchTerm" element={<SearchFeed/>}/>
        </Routes>
      </VideoContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App
