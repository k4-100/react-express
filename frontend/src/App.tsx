import React from "react";
import { Paper } from "@mui/material";
import CustomTable from "./components";

const App: React.FC = () => {
  return (
    <>
      <Paper elevation={10}>
        <CustomTable />
      </Paper>
    </>
  );
};

export default App;
