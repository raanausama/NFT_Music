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
import { useTheme } from "@mui/material";
import "./Front1.css";

const pages = ["MARKETPLACE", "ABOUT", "RESOURCES", "FAQ"];

const Front2 = () => {
  const theme = useTheme();

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
    <Box sx={{ width: "100%" }} className="overallbackground1">
      <Grid item xs={12}>
        <AppBar
          sx={{
            width: "100%",
            margin: 0,
            padding: "0px",
            backgroundColor: "transparent",
          }}
          position="static"
        >
          <Toolbar disableGutters>
            <Stack>
              <Typography
                variant="h6"
                component="a"
                href="/"
                sx={{
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
                component="a"
                href="/"
                sx={{
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
                  sx={{ color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex", justifyContent: "center" },
              }}
            >
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
      </Grid>
      <Grid sx={{ width: "100%" }} container>
        <Grid container item xs={12} sm={12} md={10} lg={8}>
          <Box
            sx={{
              // marginLeft: 2,
              marginTop: 20,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                flexGrow: 1,
                textAlign: "flex-start",
                color: "white",
                fontSize: "2.5rem", // default font size for larger screens
                [theme.breakpoints.down("sm")]: {
                  fontSize: "3rem", // font size for smaller screens
                },
                [theme.breakpoints.up("md")]: {
                  fontSize: "3.5rem", // font size for medium screens
                },
                [theme.breakpoints.up("lg")]: {
                  fontSize: "4rem", // font size for large screens
                },
                [theme.breakpoints.up("xl")]: {
                  fontSize: "5rem", // font size for 4K screens and larger
                },
              }}
            >
              Music for NFT creators.
            </Typography>
            <Typography
              variant="h1"
              sx={{
                flexGrow: 1,
                textAlign: "flex-start",
                fontSize: "2rem", // default font size for larger screens
                [theme.breakpoints.down("sm")]: {
                  fontSize: "2rem", // font size for smaller screens
                },
                [theme.breakpoints.up("md")]: {
                  fontSize: "3.5rem", // font size for smaller screens
                },
                [theme.breakpoints.up("lg")]: {
                  fontSize: "4rem", // font size for smaller screens
                },
                [theme.breakpoints.up("xl")]: {
                  fontSize: "5rem", // font size for 4K screens and larger
                },
                color: "white",
              }}
            >
              Digital Music for fans.
            </Typography>
          </Box>
          <Grid item xs={8} sm={8} md={8} lg={8} xl={6}>
            <Typography
              variant="h6"
              sx={{
                mt: 1,
                flexGrow: 1,
                textAlign: "flex-start",
                fontSize: "1rem", // default font size for larger screens
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.5rem", // font size for smaller screens
                },
                [theme.breakpoints.up("xl")]: {
                  fontSize: "1.25rem", // font size for smaller screens
                },
                [theme.breakpoints.up("lg")]: {
                  fontSize: "1.25rem", // font size for smaller screens
                },

                color: "rgb(199, 193, 199)",
              }}
            >
              Music NFTs will continue to revolutionize the way that artists and
              fans create community together as we enter the upcoming year —
              undoubtedly changing the trajectory of countless budding music
              careers.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Stack sx={{ mt: 1 }} direction={"row"} spacing={3}>
              <Stack spacing={1}>
                <Typography
                  sx={{
                    color: "rgb(199, 193, 199)",
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "0.5rem", // font size for smaller screens
                    },
                  }}
                >
                  Powered By
                </Typography>
                <img
                  style={{
                    width: "100%", // default width for larger screens
                    height: "auto",
                    [theme.breakpoints.down("sm")]: {
                      width: "10%", // width for small screens
                    },
                  }}
                  src={solana}
                  alt="image"
                ></img>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "transparent",
                  border: "1px solid #FFFFFF",
                  borderRadius: "2em",
                  minWidth: "150px",
                  [theme.breakpoints.down("sm")]: {
                    minWidth: "50px", // smaller button for small screens
                    fontSize: "0.75rem", // smaller font for small screens
                  },
                  [theme.breakpoints.up("md")]: {
                    minWidth: "150px", // larger button for larger screens
                    fontSize: "1rem", // larger font for larger screens
                  },
                  gap: "10px",
                  "&:hover": {
                    background:
                      "linear-gradient(99.74deg, #06DBAC 5.23%, #BD00FF 92.7%)",
                    boxShadow: "none",
                    transform: "scale(1.05)",
                  },
                  "&:active": {
                    boxShadow: "none",
                    color: "rgb(199, 193, 199)",
                  },
                }}
              >
                Discover Now <ArrowForwardIosIcon />
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <img
            style={{
              display: "flex",
              justifyContent: "end",
              position: "relative",
              width: "90%",
              height: "90%",
              [theme.breakpoints.down("xl")]: {
                width: "10%", // width for small screens
              },
              [theme.breakpoints.down("sm")]: {
                width: "50%", // width for small screens
              },
            }}
            src={hand}
            alt="image"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}></Grid>
      <Box
        sx={{
          color: "white",
          border: "1px solid",
          borderLeftColor: "black",
          borderRightColor: "Black",
        }}
      >
        <Divider sx={{ color: "white" }}></Divider>
        <Stack
          sx={{ display: "flex", justifyContent: "space-evenly" }}
          direction="row"
          spacing={1}
        >
          <LanguageIcon />
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "1rem", // default font size for larger screens
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.3rem", // font size for smaller screens
              },
            }}
          >
            new way to reach the new fan
          </Typography>
          <LanguageIcon />
          <Typography
            sx={{
              fontSize: "1rem", // default font size for larger screens
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.3rem", // font size for smaller screens
              },
              textTransform: "uppercase",
            }}
          >
            new way to reach the new fan
          </Typography>
          <LanguageIcon />
          <Typography
            sx={{
              fontSize: "1rem", // default font size for larger screens
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.3rem", // font size for smaller screens
              },
              textTransform: "uppercase",
            }}
          >
            new way to reach the new fan
          </Typography>
          <LanguageIcon />
        </Stack>
      </Box>
    </Box>
  );
};

export default Front2;
