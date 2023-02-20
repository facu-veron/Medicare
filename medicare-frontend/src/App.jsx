import React from "react";
import Dashboard from "./pages/medico/Dashboard";
import { Login } from "./pages/Login";
import Home from "./pages/paciente/Home";

import DatePickers from "./pages/paciente/DatePickers";
import SelectSpeciality from "./components/SelectSpeciality";
import FormTurns from "./pages/paciente/FormTurns";

export const App = () => {
  return (
    <div>
      {/* <Login /> */}
      {/* <Dashboard /> */}
      <Home />
      {/* <DatePickers /> */}
      {/* <SelectSpeciality /> */}
      {/* <FormTurns /> */}
    </div>
  );
};

export default App;
