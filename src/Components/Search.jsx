import { TextField } from "@mui/material";
import { ThemeProvider } from '@mui/material'


import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { onSearchText } from "../redux/filterSlice";


const Search = (props) => {
   //
   const searchText = useSelector(state => state.filteredTodos.searchText);

   //
   const dispatch = useDispatch();

   // filter search
   const handleChange = (event) => {
      dispatch(onSearchText({ searchText: event.target.value }));
   }

   return (
      <ThemeProvider theme={props.theme}>
         <TextField
            label='search'
            variant="standard"
            type='search'
            value={searchText}
            onChange={handleChange}
            color='primary'
            sx={{
               mb: '1rem'
            }}
         />
      </ThemeProvider>
   );
};

export default Search;