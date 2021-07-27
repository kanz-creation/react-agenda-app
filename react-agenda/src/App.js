import './App.css';
import Main from './components/Main';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div>
      <Main />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

export default App;
