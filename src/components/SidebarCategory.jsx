/* eslint-disable react/prop-types */
import { Button, Box, useTheme} from "@mui/material";
import { useContext } from "react";
import VideoContext from "./contexts/VideoContext";

function SidebarCategory({ name, icon }) {
  const { selectedCategory, setSelectedCategory } = useContext(VideoContext)
  const theme = useTheme()
  return (
    <Button variant="contained" onClick={() => setSelectedCategory(name) } sx={{borderRadius: '1000px', display: 'flex', alignItems: 'center', justifyContent: 'initial', gap: { xs: '6px', md: '12px' }, minWidth: 'initial', transition: '0.3s', backgroundColor: name === selectedCategory ? theme.palette.primary.main : theme.palette.background.paper, color: name === selectedCategory ? theme.palette.primary.contrastText : theme.palette.text.primary, '&:hover': { backgroundColor: theme.palette.primary.main ,'& .child': { color: theme.palette.primary.contrastText }, '& .child-2': { color: theme.palette.primary.contrastText } }, padding: { xs: '3px 6px', md: '6px 16px' } }}>
      <Box component={'div'} sx={{ color: name !== selectedCategory && theme.palette.primary.main, transition: '0.3s', fontSize: { xs: '12px', md: '14px' } }} className="child">{icon}</Box>
      <Box component={'div'} sx={{ whiteSpace: 'nowrap', fontSize: { xs: '12px', md: '14px' } }} className="child-2">{name}</Box>
    </Button>
  )
}

export default SidebarCategory