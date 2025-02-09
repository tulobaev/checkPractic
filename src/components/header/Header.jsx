import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import VpnLockIcon from "@mui/icons-material/VpnLock";

function Header() {
  return (
    <div className="container">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <VpnLockIcon sx={{ fontSize: "30px" }} />
            </Typography>

            <Link to="/list" className="link">
              <Button color="inherit">Home</Button>
            </Link>
            <Link to="/add" className="link">
              <Button color="inherit">Admin</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
