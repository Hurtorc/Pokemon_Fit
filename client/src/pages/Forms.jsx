// // import "./index.css";
// import {
    
//   Typography,
//   AppBar,
//   Toolbar,
//   TextField,
//   Button,
//   Box
// } from "@mui/material";
// import { ThemeProvider } from "@mui/material/styles";
// // import * as React from "react";
// import MenuItem from "@mui/material/MenuItem";
// export default function FormPage() {
//   return (

//     <div className="App">
//       <AppBar>
//         <toolbar>
//           <h1>SIGNIN FORM </h1>
//         </toolbar>
//       </AppBar>

//       <Typography variant="h5">BASIC WITH MATERIAL UI</Typography>
//       <form>
//         <TextField
//           style={{ width: "200px", margin: "5px" }}
//           type="text"
//           label="setgoal"
//           variant="outlined"
//         />
//         <br />
//         <TextField
//           style={{ width: "200px", margin: "5px" }}
//           type="text"
//           label="goal description"
//           variant="outlined"
//         />
//         <br />
//         <TextField
//           style={{ width: "200px", margin: "5px" }}
//           type="text"
//           label="Diversity catagory"
//           variant="outlined"
//         />
//         <br />
//         <TextField
//           style={{ width: "200px", margin: "5px" }}
//           type="text"
//           label="Attribute"
//           variant="outlined"
//         />
//         <br />
//         <TextField
//           style={{ width: "200px", margin: "5px" }}
//           type="text"
//           label="goal stage"
//           variant="outlined"
//         />
//         <br />
//         <TextField
//           style={{ width: "200px", margin: "5px" }}
//           type="number"
//           label="job id"
//           variant="outlined"
//         />
//         <br />
//         <TextField
//           style={{ width: "200px", margin: "5px" }}
//           type="text"
//           label="job region"
//           variant="outlined"
//         />
//         <br />
//         <Button variant="contained" color="primary">
//           save
//         </Button>
//       </form>
//     </div>
  
//   );
// }


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Copyright(props) {
  const[input,setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
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

export default function Welcome() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://techcrunch.com/wp-content/uploads/2016/08/pokemon-influence.png?w=1390&crop=1)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'red' }}>
              <CatchingPokemonIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Please input your information
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="lastName"
                label="Last Name"
                type="lastName"
                id="lastName"
                autoComplete
              />
                <TextField
                margin="normal"
                required
                fullWidth
                name="age"
                label="Age"
                type="age"
                id="age"
                autoComplete
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="gender "
                label="Gender "
                type="gender "
                id="gender "
                autoComplete
              />
                   <TextField
                margin="normal"
                required
                fullWidth
                name="height "
                label="Height "
                type="height "
                id="height "
                autoComplete
              />
                   <TextField
                margin="normal"
                required
                fullWidth
                name="weight "
                label="Weight "
                type="weight "
                id="weight "
                autoComplete
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};