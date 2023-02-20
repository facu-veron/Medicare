import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import moment from "moment";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";

import Select from "@mui/material/Select";

const theme = createTheme();

export default function FormTurns() {
  moment.locale("es");
  const current_date = moment();
  const [value, setValue] = React.useState(current_date);
  console.log(value);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/*    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Medicare
            </Typography> */}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Nombre"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Apellido"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <DesktopDatePicker
                    label="Fecha"
                    inputFormat="DD/MM/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TimePicker
                    label="Hora"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>

                {/* Especialidades */}
                <Grid item xs={12}>
                  <InputLabel htmlFor="grouped-select">
                    Especialistas
                  </InputLabel>
                  <Select
                    sx={{ minWidth: 400 }}
                    maxWidth="lg"
                    defaultValue=""
                    id="grouped-select"
                    label="Especialistas"
                  >
                    <MenuItem value="">
                      <em>Ninguno</em>
                    </MenuItem>
                    <ListSubheader>Dentista</ListSubheader>
                    <MenuItem value={1}>Silvia Jacobo</MenuItem>
                    <MenuItem value={2}>Juan Mendoza</MenuItem>
                    <ListSubheader>psicopedagogo</ListSubheader>
                    <MenuItem value={3}>Lic. Lisa Gerace</MenuItem>
                    <MenuItem value={4}>Andrea Mendez</MenuItem>
                  </Select>
                </Grid>
              </Grid>
              <Button
                style={{ backgroundColor: "#ff735c", color: "#FFFFFF" }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Solicitar Turno
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </LocalizationProvider>
  );
}
