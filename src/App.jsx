import React, { useState } from "react";
import { Switch, Grid,  Paper } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import "./styles.css";
const App = () => {
  const [darkmode, setDarkmode] = useState(false);
  const darktheme = createMuiTheme({
    palette: {
      type:  "dark" ,
    
      
    }
  });
  const lighttheme = createMuiTheme({
    palette: {
      type:  "light" ,
    
      
    }
  });
  return (
    <>
      <ThemeProvider theme={darkmode ? darktheme:lighttheme}>
        <div className="area">
          <h1>Want to see some magic ? change the toggle button</h1>
        </div>
        <Paper className="toggle-area" variant="outlined" square elevation={3}>
          <Grid container diection="column">
            <Switch
              className="toggle"
              checked={darkmode}
              onChange={() => setDarkmode(!darkmode)}
            />
          
          </Grid>
          <h2>{darkmode ? "Dark mode on 🌙":"Light mode on 🌞"}  </h2>
        </Paper>
      </ThemeProvider>
    </>
  );
};
export default App;
