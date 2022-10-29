import { useDispatch } from "react-redux";
import { changeType } from '../redux/filterSlice';
import { ButtonGroup, Button } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';

const Buttons = () => {
   const dispatch = useDispatch();

   return (
      <ButtonGroup sx={{ mt: '9px' }}>
         <Button onClick={() => dispatch(changeType({ type: 'done' }))} startIcon={<DoneIcon />} variant='contained' color='success'>Done</Button>
         <Button onClick={() => dispatch(changeType({ type: 'important' }))} variant='contained' color='secondary'>important</Button>
         <Button onClick={() => dispatch(changeType({ type: 'all' }))} variant='contained' color='primary'>all</Button>
      </ButtonGroup>
   );
};

export default Buttons;