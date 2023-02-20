import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, Paper } from "@mui/material";

export default function SelectSpeciality() {
  return (
    <div>
      <Grid container justifyContent={"center"}>
        <Grid sx={{ mt: 2, mb: 4 }}>
          <FormControl sx={{ m: 1, minWidth: 400 }}>
            <InputLabel htmlFor="grouped-select">Especialistas</InputLabel>
            <Select defaultValue="" id="grouped-select" label="Especialistas">
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
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
