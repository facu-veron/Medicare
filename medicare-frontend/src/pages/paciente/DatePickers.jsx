import * as React from "react";
import moment from "moment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import SelectSpeciality from "../../components/SelectSpeciality";

export default function DatePickers() {
  moment.locale("es");
  const current_date = moment();
  const [value, setValue] = React.useState(current_date);
  console.log(value);
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Fecha"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />

        <TimePicker
          label="Hora"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
