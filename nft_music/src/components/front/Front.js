import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Stack from "@mui/material/Stack";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import Mlogo from "../../assets/Vector.png";
import hand from "../../assets/Web/hand.png";
import "./Front.css";
import { Grid } from "@mui/material";

export default function Front() {
  return (
    <body className="overallbackground">
      <Grid xs={12}>
        <AppBar position="static" className="Appbar">
          <Toolbar>
            <Stack className="AppBarLeftText">
              <Typography>Music</Typography>
              <Typography>NFT Platform</Typography>
            </Stack>
            <Typography className="AppBarMarketplace">MARKETPLACE</Typography>

            <Typography className="AppBarAbout">About</Typography>

            <Typography className="AppBarResources">resources</Typography>

            <Typography className="AppBarFAQ">FAQ</Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton size="large" color="inherit">
                <FacebookTwoToneIcon />
              </IconButton>
              <IconButton size="large" color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton size="large" color="inherit">
                <img src={Mlogo} alt="image"></img>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Box>
          <Grid xs={6}>
            <Typography>THIS IS ON LEFT</Typography>
          </Grid>
          <Grid xs={6}>
            <Typography>THIS IS ON RIGHT</Typography>
          </Grid>
        </Box>
      </Grid>
    </body>
  );
}
