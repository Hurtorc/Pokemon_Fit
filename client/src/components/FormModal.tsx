import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';



const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Copyright(props) {
  const[input,setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(input);
  }
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Start your pokemon fitness journey '}
      <Link color="inherit" href="https://github.com/Hurtorc/Pokemon_Fit">
        here
      </Link>{' '}
    </Typography>
  );
}

const theme = createTheme();

export default function FormModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{}}
        />
        
            <Typography component="h1" variant="h5">
            PLEASE ENTER YOUR FOOD AND CALORIES
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="foodName"
                label="Food"
                name="foodName"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Calories"
                label="Calories"
                type="lastName"
                id="Calories"              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
            </Grid>
            </ThemeProvider>
            </Typography>
            </Box>
        </Modal>
    </div>
  );
}
