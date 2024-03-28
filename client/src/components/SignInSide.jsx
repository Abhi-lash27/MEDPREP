import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";
import logger from "../../logger";
import { toast } from "react-toastify";


export default function SignInSide() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [roles, setRoles] = useState(["Admin", "Doctor", "Nurse", "Patient"]);
  const [generalError, setGeneralError] = useState("");



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setGeneralError("Invalid email or password");
      return;
    } else {
      setGeneralError("");
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/login/${role.toLowerCase()}`, {
        email,
        password,
      });

      const { token } = res.data;

      if (token) {
        let storageKey;
        let redirectPath;

        switch (role) {
          case 'Admin':
            storageKey = 'admin-token';
            redirectPath = '/admin';
            break;
          case 'Doctor':
            storageKey = 'doctor-token';
            redirectPath = '/doctor';
            break;
          case 'Nurse':
            storageKey = 'nurse-token';
            redirectPath = '/nurse';
            break;
          case 'Patient':
            storageKey = 'patient-token';
            redirectPath = '/patient';
            break;
          default:
            storageKey = null;
            redirectPath = '/';
        }

        if (storageKey) {
          localStorage.setItem(storageKey, token);
          window.location.href = redirectPath;
        } else {
          toast.error("Invalid role");
          window.location.href = '/';
        }

      } else {
        toast.error("Token not received");
      }
    } catch (err) {
      logger.error(err);
      toast.error(err.message);
    }
  };


  return (

      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type='email'
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              </Grid>
              <Grid item xs={12}>
              <InputLabel>Role</InputLabel>
              <Select
                sx={{ width: "100%"}}
                id="role"
                name="role"
                value={role}
                defaultValue=""
                onChange={(e) => setRole(e.target.value)}
              >
                {roles.map((role) => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
              <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              {generalError && (
              <span style={{ color: "red"}}>
                {generalError}
              </span>
            )}
              </Grid>
            </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                {/*<Grid item xs>*/}
                {/*  <Link href="/Forget" variant="body2">*/}
                {/*    Forgot password?*/}
                {/*  </Link>*/}
                {/*</Grid>*/}
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}