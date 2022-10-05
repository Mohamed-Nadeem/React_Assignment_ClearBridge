import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css';
import './components/CompaniesIndex'
import CompaniesIndex from './components/CompaniesIndex';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Box
          sx={{
            width: 1000,
            display: 'flex',
            direction: 'column',
            height: 'auto',
            backgroundColor: '#55d6c2',
            alignItems: 'center',
            justify: 'center',
            justifyContent: 'center',
            // '&:hover': {
            //   backgroundColor: 'primary.main',
            //   opacity: [0.9, 0.8, 0.7],
            // },
          }}
        >
          <Stack spacing={2} direction="column">
            <CompaniesIndex />
            <CompaniesIndex />
            <Button variant="outlined">Outlined</Button>
          </Stack>
        </Box>
      </header>
    </div>
  );
}

export default App;
