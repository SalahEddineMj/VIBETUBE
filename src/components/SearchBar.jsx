import { TextField} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if(search) {
      navigate(`search/${search}`);
    }
  }
  return (
    <TextField component={'form'}
    autoComplete="off"
    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '20px' }, width: {xs: '250px', sm: '500px' }, flexGrow: 1 }}
    id="outlined-basic"
    label='search'
    variant="outlined" size="small"
    placeholder="Search..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    onSubmit={handleSubmit}
    />
  )
}

export default SearchBar