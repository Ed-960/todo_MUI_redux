import { Box, Button, ButtonGroup, Checkbox, createTheme, Divider, FormControlLabel, Input, ThemeProvider } from "@mui/material";
import TaskIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deepPurple, green, red, yellow } from "@mui/material/colors";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { onDelete, onDone, onImportant, onEdit } from "../redux/todoSlice";

const theme = createTheme({
   palette: {
      primary: {
         main: deepPurple[800],
      },
      secondary: {
         main: yellow[500],
      },
      redred: {
         main: red[500],
      },
      greenColor: {
         main: green[600],
      },
   }
})

const TodoForm = (props) => {
   const dispatch = useDispatch();
   const { todo } = props

   // edited Text
   const [editedInputText, setEditedInputText] = useState('');
   const [isEditClicked, setEditClicked] = useState(false);
   const importantColor = todo.important ? 'primary' : 'secondary';
   const isReadonly = isEditClicked ? false : true;
   let value = isEditClicked ? editedInputText : todo.text;

   //save or edit icon
   const icon = isEditClicked ? <SaveAltIcon sx={{ ml: '10px' }} /> : <EditIcon sx={{ ml: '10px' }} />

   const toEdit = () => {
      dispatch(onEdit({ id: todo.id, editedInputText }))
      setEditedInputText(todo.text);
      setEditClicked((prev) => !prev);
   }

   return (
      <ThemeProvider theme={theme}>
         <Box sx={{ display: 'flex' }}>
            <FormControlLabel
               control={<Checkbox
                  checked={todo.done}
                  checkedIcon={<TaskIcon fontSize="medium" color='success' />}
                  onChange={() => dispatch(onDone({ id: todo.id }))}
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
               />}
            />

            <Input sx={{ pr: '10px' }} onChange={(e) => { setEditedInputText(e.target.value) }} fullWidth readOnly={isReadonly} value={value} />
            <ButtonGroup sx={{ float: 'right', height: '38px' }}>
               <Button
                  onClick={toEdit}
                  sx={{ padding: '0px' }}
                  startIcon={icon}
                  variant='contained'
                  color='greenColor'
               ></Button>
               <Button
                  onClick={() => dispatch(onImportant({ id: todo.id }))}
                  startIcon={<NotificationImportantIcon sx={{ ml: '10px' }} />}
                  sx={{ padding: '0px' }}
                  color={importantColor}
                  variant='contained'
               ></Button>
               <Button
                  onClick={() => dispatch(onDelete({ id: todo.id }))}
                  startIcon={<DeleteOutlineIcon sx={{ ml: '10px' }} />}
                  sx={{ padding: '0px' }}
                  color='redred'
                  variant='contained'
               > </Button>
            </ButtonGroup>
         </Box>
         <Divider />
      </ThemeProvider>
   )
}

export default TodoForm;
