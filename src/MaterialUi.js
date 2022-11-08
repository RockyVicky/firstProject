import * as React from 'react';
//import ReactDOM from 'react-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function App() {
  return( 
            <Stack spacing={2} direction="row">
            <Button variant="contained">Hello World</Button>
            <Button variant="outlined">How</Button>
            <Button variant="outlined">You</Button>
            </Stack>
    );
}

//ReactDOM.render(<App />, document.querySelector('#app'));