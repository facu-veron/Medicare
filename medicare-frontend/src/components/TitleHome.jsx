import * as React from "react";
import AppBar from "@mui/material/AppBar";

import CameraIcon from "@mui/icons-material/PhotoCamera";

import CssBaseline from "@mui/material/CssBaseline";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import image_home from "../assets/images/home3.jpg";

const theme = createTheme();

export default function TitleHome() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            backgroundImage: `url(${image_home})`,
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            backgroundSize: "cover",
            backgroundPosition: "center",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Bienvenido a Medicare.
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.primary"
              paragraph
            >
              Seleccione la fecha y el horario en el cual desea ser atendido
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            ></Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
