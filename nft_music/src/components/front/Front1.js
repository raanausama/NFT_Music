import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import Mlogo from "../../assets/Vector.png";
import hand from "../../assets/Web/hand.png";
import { Stack, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import solana from "../../assets/solana.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import globe from "../../assets/globe.png";
import LanguageIcon from "@mui/icons-material/Language";
import "./Front1.css";

const pages = ["MARKETPLACE", "ABOUT", "RESOURCES", "FAQ"];

function Front1() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box className="overallbackground1" sx={{ width: "100%" }}>
      <Grid container>
        <Grid item xs={12}>
          <AppBar
            sx={{ width: "100%", backgroundColor: "transparent" }}
            position="static"
          >
            <Toolbar>
              <Stack>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    fontFamily: "Inter",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "inherit",
                    lineHeight: "24px",
                    textDecoration: "none",
                  }}
                >
                  Music
                </Typography>

                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  NFT Platform
                </Typography>
              </Stack>
              <Box sx={{ flexGrow: 1 }} />

              <Box sx={{ flexGrow: 1 }}>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography
                        sx={{
                          fontFamily: "'Inter'",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "19px",
                          text: "uppercase",
                          color: "#FFFFFF",
                        }}
                        textAlign="center"
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
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
          <Grid />
          <Divider
            sx={{ border: "1px  white", borderStyle: "solid" }}
          ></Divider>

          <Grid container>
            <Grid item xs={8}>
              <Box
                sx={{
                  // marginLeft: 2,
                  marginTop: 20,
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    flexGrow: 1,
                    textAlign: "flex-start",
                    color: "white",
                  }}
                >
                  Music for NFT creators.
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    flexGrow: 1,
                    textAlign: "flex-start",
                    color: "white",
                  }}
                >
                  Digital Music for fans.
                </Typography>
              </Box>
              <Grid container item xs={8} sx={{ marginTop: 4, marginLeft: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    flexGrow: 1,
                    textAlign: "flex-start",

                    color: "rgb(199, 193, 199)",
                  }}
                >
                  Music NFTs will continue to revolutionize the way that artists
                  and fans create community together as we enter the upcoming
                  year — undoubtedly changing the trajectory of countless
                  budding music careers.
                </Typography>
              </Grid>
              <Grid
                container
                item
                xs={6}
                sx={{
                  flexGrow: 1,
                  textAlign: "flex-start",
                  marginLeft: 2,
                  marginTop: 4,
                }}
              >
                <Stack spacing={1}>
                  <Typography
                    variant="h7"
                    sx={{
                      color: "rgb(199, 193, 199)",
                    }}
                  >
                    Powered By
                  </Typography>
                  <img
                    style={{ width: "100px" }}
                    src={solana}
                    alt="image"
                  ></img>
                </Stack>
                <Grid item xs={5}>
                  <Button
                    variant="contained"
                    sx={{
                      width: "220px",
                      height: "49px",
                      backgroundColor: "transparent",
                      border: "1px solid #FFFFFF",
                      borderRadius: "50px",
                      gap: "10px",
                      "&:hover": {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        transform: "scale(1.05)",
                      },
                      "&:active": {
                        boxShadow: "none",
                      },
                    }}
                  >
                    Discover Now <ArrowForwardIosIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <img
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
                src={hand}
                alt="image"
              />
            </Grid>
            <Box
              sx={{
                width: "100%",
                color: "white",
                border: "1px solid",
                padding: 2,
                borderLeftColor: "black",
                borderRightColor: "Black",
              }}
            >
              <Divider sx={{ color: "white" }}></Divider>
              <Stack direction="row" spacing={4.6}>
                <LanguageIcon />
                <Typography variant="h7" sx={{ textTransform: "uppercase" }}>
                  new way to reach the new fan
                </Typography>
                <LanguageIcon />
                <Typography variant="h7" sx={{ textTransform: "uppercase" }}>
                  new way to reach the new fan
                </Typography>
                <LanguageIcon />
                <Typography variant="h7" sx={{ textTransform: "uppercase" }}>
                  new way to reach the new fan
                </Typography>

                <LanguageIcon />
                <Typography variant="h7" sx={{ textTransform: "uppercase" }}>
                  new way to reach the new fan
                </Typography>
                <LanguageIcon />
                <Typography variant="h7" sx={{ textTransform: "uppercase" }}>
                  new way to reach the new fan
                </Typography>
                <LanguageIcon />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Front1;
