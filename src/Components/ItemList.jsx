
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import Input from '@mui/material/Input';
import { Button, createTheme, ThemeProvider } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import TodoForm from './TodoForm';
import { Box } from '@mui/system';
import { grey } from "@mui/material/colors";
import { useState } from 'react';

//style
const theme = createTheme({
   palette: {
      greyColor: {
         main: grey[500],
      },
   }
});

const ariaLabel = { 'aria-label': 'description' };

const ItemList = () => {
   const todos = useSelector(state => state.todos.todos);
   const type = useSelector(state => state.filteredTodos.type);
   const searchText = useSelector(state => state.filteredTodos.searchText);

   //input 
   const [inputText, setInputText] = useState('');

   const dispatch = useDispatch();
   const onAdd = () => {
      if (inputText === '') {
         return;
      }
      dispatch(addTodo({ inputText }));
      setInputText('');
   }

   return (
      <div>
         <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
               <Input sx={{ mb: '4px', pl: '10px', pr: '10px' }} onChange={(e) => { setInputText(e.target.value) }} value={inputText} fullWidth inputProps={ariaLabel} />
               <Button sx={{ mb: '9px' }} startIcon={<AddIcon />} variant='contained' color='greyColor' onClick={onAdd}>Add</Button>
            </Box>
         </ThemeProvider>
         {
            // eslint-disable-next-line array-callback-return
            todos.filter((val) => {
               if (searchText === '') {
                  return val;
               } else if (val.text.toLowerCase().includes(searchText.toLowerCase())) {
                  return val;
               }
            }).filter((Item) => {
               if (type === 'important') {
                  return Item.important;
               } else if (type === 'done') {
                  return Item.done;
               } else if (type === 'all') {
                  return Item;
               }
               return Item;
            })
               .map((todo, i) => <TodoForm key={i} todo={todo}
               // setTasks={passSetTasks}
               />)
         }
      </div>
   )
}

export default ItemList;