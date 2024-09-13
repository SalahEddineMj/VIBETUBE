/* eslint-disable react/prop-types */
import { Stack, useTheme } from '@mui/material';
import { categories } from '../utils/constants';
import SidebarCategory from './SidebarCategory';




function Sidebar() {
  const theme = useTheme();
  const categoriesList =  categories.map((category) => {
      return <SidebarCategory key={category.name} name={category.name} icon={category.icon}/>
  })
  return (
        <Stack component={'nav'} flexDirection={{ xs: 'row', md: 'column' }} sx={{ overflowY: { xs: 'hidden', md: 'auto' }, gap: { xs: '5px', md: '14px' }, alignItems: { xs: 'center', md: 'initial' }, scrollBehavior: 'smooth', '::-webkit-scrollbar': { width: '4px', height: '4px' }, '::-webkit-scrollbar-track': { borderRadius: '4px', backgroundColor: theme.palette.background.default }, '::-webkit-scrollbar-thumb': { borderRadius: '4px', backgroundColor: theme.palette.background.paper }}}>
          { categoriesList }
        </Stack>
  )
}

export default Sidebar