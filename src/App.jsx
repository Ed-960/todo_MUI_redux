import Header from './Components/Header';
import ItemList from './Components/ItemList';
import 'fontsource-roboto';
import { Container } from '@mui/material'
import Buttons from './Components/Buttons';

function App() {
  return (
    <Container sx={{ mt: '50px' }} maxWidth='sm'>
      <Header />
      <Buttons />
      <ItemList />
    </Container>
  );
}

export default App;