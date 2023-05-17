import {
  Box,
  Typography,
  Grid,
  Button,
  Stack,
  Container,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import first from "../../assets/discover1.png";
import second from "../../assets/Discover2.png";
import third from "../../assets/Discover3.png";
import fourth from "../../assets/Discover4.png";
import fifth from "../../assets/fifth.png";
import sixth from "../../assets/Discover5.png";
import seventh from "../../assets/seventh.png";
import eighth from "../../assets/eighth.png";
import nineth from "../../assets/nineth.png";
import tenth from "../../assets/tenth.png";
import eleventh from "../../assets/eleven.png";
import twelve from "../../assets/twelve.png";
import solana from "../../assets/SolanaS.png";
import "./Discover.css";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material";

const Discover1 = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const StyledBox1 = styled(Box)(({ theme }) => ({
    position: "relative",
    border: `1px solid `,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "white",
    borderBottomColor: "white",

    ":after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "0%",
      width: "calc(10% - 1px)",
      height: "1px",
      background: "white",
    },
    ":before": {
      content: '""',
      position: "absolute",
      right: 0,
      bottom: "0%",
      width: "1px",
      height: "calc(35% - 1px)",
      background: "white",
    },
  }));
  return (
    <Box sx={{ mt: 20 }}>
      <Grid container>
        <Grid item xs={12} md={5}>
          <Typography
            sx={{
              flexGrow: 1,
              textAlign: "flex-start",
              color: "white",
              fontSize: "2.5rem", // default font size for larger screens
              [theme.breakpoints.down("sm")]: {
                fontSize: "3rem", // font size for smaller screens
              },
              [theme.breakpoints.up("md")]: {
                fontSize: "5rem", // font size for medium screens
              },
              [theme.breakpoints.up("lg")]: {
                fontSize: "4.5rem", // font size for large screens
              },
              [theme.breakpoints.up("xl")]: {
                fontSize: "6rem", // font size for 4K screens and larger
              },
            }}
          >
            Discover Music NFT
          </Typography>
        </Grid>
        <Grid xs={12} md={6}>
          <Grid
            sx={{
              mt: 7,
              display: { md: "flex", justifyContent: "space-evenly" },
            }}
            item
            direction={isXsScreen ? "column" : "row"}
            spacing={2}
          >
            <Typography
              variant="h6"
              sx={{
                color: "rgb(199, 193, 199)",
              }}
            >
              Music Genre
            </Typography>
            <Button
              variant="contained"
              sx={{
                color: "rgb(199, 193, 199)",
                width: "86px",
                height: "39px",
                fontSize: "12px",
                backgroundColor: "transparent",
                border: "1px solid rgb(199, 193, 199)",
                borderRadius: "50px",
                padding: 2,
                gap: "7px",
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
              Rock
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "rgb(199, 193, 199)",
                width: "86px",
                height: "39px",
                fontSize: "12px",
                backgroundColor: "transparent",
                border: "1px solid rgb(199, 193, 199)",
                borderRadius: "50px",
                padding: 2,
                gap: "7px",
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
              Pop
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "rgb(199, 193, 199)",
                width: "86px",
                height: "39px",
                fontSize: "12px",
                backgroundColor: "transparent",
                border: "1px solid rgb(199, 193, 199)",
                borderRadius: "50px",
                padding: 2,
                gap: "7px",
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
              K Pop
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "rgb(199, 193, 199)",
                width: "86px",
                height: "39px",
                fontSize: "12px",
                backgroundColor: "transparent",
                border: "1px solid rgb(199, 193, 199)",
                borderRadius: "50px",
                padding: 2,
                gap: "7px",
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
              Jazz
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "rgb(199, 193, 199)",
                width: "86px",
                height: "39px",
                fontSize: "12px",
                backgroundColor: "transparent",
                border: "1px solid rgb(199, 193, 199)",
                borderRadius: "50px",
                padding: 2,
                gap: "7px",
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
              Funk
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ color: "white" }}>
          <Grid container>
            <Grid container item xs={12} md={6} lg={4}>
              <StyledBox1
                sx={{
                  marginTop: "67px",
                  marginBottom: "60px",
                  width: "90%",
                  height: "82%",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    left: "15%",
                    bottom: "10%",
                    width: "90%",
                  }}
                  src={first}
                ></img>
                <Stack sx={{ padding: 2 }}>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    Heart & Sol
                  </Typography>
                  <Stack sx={{ mt: "6px" }} spacing={1} direction={"row"}>
                    <img
                      style={{ width: "14.6px", height: "13.14" }}
                      src={solana}
                    ></img>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      0.3234
                    </Typography>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      16 tokens
                    </Typography>
                  </Stack>
                  <Stack mt="6px" spacing={2} direction={"row"}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "41%",
                        height: "39px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 2,
                        gap: "7px",
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
                      Play now
                    </Button>
                    <Button
                      className="buttonback"
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "45%",
                        height: "39px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Buy NFT <PlayArrowOutlinedIcon />
                    </Button>
                  </Stack>
                </Stack>
              </StyledBox1>
            </Grid>
            <Grid container item xs={12} md={6} lg={4}>
              <StyledBox1
                sx={{
                  marginTop: "67px",
                  marginBottom: "60px",
                  width: "90%",
                  height: "82%",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    left: "15%",
                    bottom: "10%",
                    width: "90%",
                  }}
                  src={second}
                ></img>
                <Stack sx={{ padding: 2 }}>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    Heart & Sol
                  </Typography>
                  <Stack sx={{ mt: "6px" }} spacing={1} direction={"row"}>
                    <img
                      style={{ width: "14.6px", height: "13.14" }}
                      src={solana}
                    ></img>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      0.3234
                    </Typography>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      16 tokens
                    </Typography>
                  </Stack>
                  <Stack mt="6px" spacing={2} direction={"row"}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "41%",
                        height: "39px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Play now
                    </Button>
                    <Button
                      className="buttonback"
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "45%",
                        height: "39px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Buy NFT <PlayArrowOutlinedIcon />
                    </Button>
                  </Stack>
                </Stack>
              </StyledBox1>
            </Grid>
            <Grid container item xs={12} md={6} lg={4}>
              <StyledBox1
                sx={{
                  marginTop: "67px",
                  marginBottom: "60px",
                  width: "90%",
                  height: "82%",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    left: "15%",
                    bottom: "10%",
                    width: "90%",
                  }}
                  src={third}
                ></img>
                <Stack sx={{ padding: 2 }}>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    Heart & Sol
                  </Typography>
                  <Stack sx={{ mt: "6px" }} spacing={1} direction={"row"}>
                    <img
                      style={{ width: "14.6px", height: "13.14" }}
                      src={solana}
                    ></img>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      0.3234
                    </Typography>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      16 tokens
                    </Typography>
                  </Stack>
                  <Stack mt="6px" spacing={2} direction={"row"}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "41%",
                        height: "40px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Play now
                    </Button>
                    <Button
                      className="buttonback"
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "45%",
                        height: "40px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Buy NFT <PlayArrowOutlinedIcon />
                    </Button>
                  </Stack>
                </Stack>
              </StyledBox1>
            </Grid>
            <Grid container item xs={12} md={6} lg={4}>
              <StyledBox1
                sx={{
                  marginTop: "67px",
                  marginBottom: "60px",
                  width: "90%",
                  height: "82%",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    left: "15%",
                    bottom: "10%",
                    width: "90%",
                  }}
                  src={fourth}
                ></img>
                <Stack sx={{ padding: 2 }}>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    Heart & Sol
                  </Typography>
                  <Stack sx={{ mt: "6px" }} spacing={1} direction={"row"}>
                    <img
                      style={{ width: "14.6px", height: "13.14" }}
                      src={solana}
                    ></img>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      0.3234
                    </Typography>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      16 tokens
                    </Typography>
                  </Stack>
                  <Stack mt="6px" spacing={2} direction={"row"}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "41%",
                        height: "40px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Play now
                    </Button>
                    <Button
                      className="buttonback"
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "45%",
                        height: "40px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Buy NFT <PlayArrowOutlinedIcon />
                    </Button>
                  </Stack>
                </Stack>
              </StyledBox1>
            </Grid>
            <Grid container item xs={12} md={6} lg={4}>
              <StyledBox1
                sx={{
                  marginTop: "67px",
                  marginBottom: "60px",
                  width: "90%",
                  height: "80%",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    left: "15%",
                    bottom: "10%",
                    width: "90%",
                  }}
                  src={fifth}
                ></img>
                <Stack sx={{ padding: 2 }}>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    Heart & Sol
                  </Typography>
                  <Stack sx={{ mt: "6px" }} spacing={1} direction={"row"}>
                    <img
                      style={{ width: "14.6px", height: "13.14" }}
                      src={solana}
                    ></img>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      0.3234
                    </Typography>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      16 tokens
                    </Typography>
                  </Stack>
                  <Stack mt="6px" spacing={2} direction={"row"}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "41%",
                        height: "40px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Play now
                    </Button>
                    <Button
                      className="buttonback"
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "45%",
                        height: "40px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Buy NFT <PlayArrowOutlinedIcon />
                    </Button>
                  </Stack>
                </Stack>
              </StyledBox1>
            </Grid>
            <Grid container item xs={12} md={6} lg={4}>
              <StyledBox1
                sx={{
                  marginTop: "67px",
                  marginBottom: "60px",
                  width: "90%",
                  height: "80%",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    left: "15%",
                    bottom: "10%",
                    width: "90%",
                  }}
                  src={sixth}
                ></img>
                <Stack sx={{ padding: 2 }}>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    Heart & Sol
                  </Typography>
                  <Stack sx={{ mt: "6px" }} spacing={1} direction={"row"}>
                    <img
                      style={{ width: "14.6px", height: "13.14" }}
                      src={solana}
                    ></img>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      0.3234
                    </Typography>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      16 tokens
                    </Typography>
                  </Stack>
                  <Stack mt="6px" spacing={2} direction={"row"}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "41%",
                        height: "40px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Play now
                    </Button>
                    <Button
                      className="buttonback"
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "45%",
                        height: "40px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Buy NFT <PlayArrowOutlinedIcon />
                    </Button>
                  </Stack>
                </Stack>
              </StyledBox1>
            </Grid>
            <Grid container item xs={12} md={6} lg={4}>
              <StyledBox1
                sx={{
                  marginTop: "67px",
                  marginBottom: "60px",
                  width: "90%",
                  height: "80%",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    left: "15%",
                    bottom: "10%",
                    width: "90%",
                  }}
                  src={seventh}
                ></img>
                <Stack sx={{ padding: 2 }}>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    Heart & Sol
                  </Typography>
                  <Stack sx={{ mt: "6px" }} spacing={1} direction={"row"}>
                    <img
                      style={{ width: "14.6px", height: "13.14" }}
                      src={solana}
                    ></img>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      0.3234
                    </Typography>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      16 tokens
                    </Typography>
                  </Stack>
                  <Stack mt="6px" spacing={2} direction={"row"}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "41%",
                        height: "40px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Play now
                    </Button>
                    <Button
                      className="buttonback"
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "45%",
                        height: "40px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Buy NFT <PlayArrowOutlinedIcon />
                    </Button>
                  </Stack>
                </Stack>
              </StyledBox1>
            </Grid>
            <Grid container item xs={12} md={6} lg={4}>
              <StyledBox1
                sx={{
                  marginTop: "67px",
                  marginBottom: "60px",
                  width: "90%",
                  height: "80%",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    left: "15%",
                    bottom: "10%",
                    width: "90%",
                  }}
                  src={eighth}
                ></img>
                <Stack sx={{ padding: 2 }}>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    Heart & Sol
                  </Typography>
                  <Stack sx={{ mt: "6px" }} spacing={1} direction={"row"}>
                    <img
                      style={{ width: "14.6px", height: "13.14" }}
                      src={solana}
                    ></img>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      0.3234
                    </Typography>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      16 tokens
                    </Typography>
                  </Stack>
                  <Stack mt="6px" spacing={2} direction={"row"}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "41%",
                        height: "40px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Play now
                    </Button>
                    <Button
                      className="buttonback"
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "45%",
                        height: "40px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Buy NFT <PlayArrowOutlinedIcon />
                    </Button>
                  </Stack>
                </Stack>
              </StyledBox1>
            </Grid>
            <Grid container item xs={12} md={6} lg={4}>
              <StyledBox1
                sx={{
                  marginTop: "67px",
                  marginBottom: "60px",
                  width: "90%",
                  height: "80%",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    left: "15%",
                    bottom: "10%",
                    width: "90%",
                  }}
                  src={nineth}
                ></img>
                <Stack sx={{ padding: 2 }}>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    Heart & Sol
                  </Typography>
                  <Stack sx={{ mt: "6px" }} spacing={1} direction={"row"}>
                    <img
                      style={{ width: "14.6px", height: "13.14" }}
                      src={solana}
                    ></img>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      0.3234
                    </Typography>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      16 tokens
                    </Typography>
                  </Stack>
                  <Stack mt="6px" spacing={2} direction={"row"}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "41%",
                        height: "40px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Play now
                    </Button>
                    <Button
                      className="buttonback"
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "45%",
                        height: "40px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Buy NFT <PlayArrowOutlinedIcon />
                    </Button>
                  </Stack>
                </Stack>
              </StyledBox1>
            </Grid>
            <Grid container item xs={12} md={6} lg={4}>
              <StyledBox1
                sx={{
                  marginTop: "67px",
                  marginBottom: "60px",
                  width: "90%",
                  height: "80%",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    left: "15%",
                    bottom: "10%",
                    width: "90%",
                  }}
                  src={tenth}
                ></img>
                <Stack sx={{ padding: 2 }}>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    Heart & Sol
                  </Typography>
                  <Stack sx={{ mt: "6px" }} spacing={1} direction={"row"}>
                    <img
                      style={{ width: "14.6px", height: "13.14" }}
                      src={solana}
                    ></img>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      0.3234
                    </Typography>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      16 tokens
                    </Typography>
                  </Stack>
                  <Stack mt="6px" spacing={2} direction={"row"}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "41%",
                        height: "40px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Play now
                    </Button>
                    <Button
                      className="buttonback"
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "45%",
                        height: "40px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Buy NFT <PlayArrowOutlinedIcon />
                    </Button>
                  </Stack>
                </Stack>
              </StyledBox1>
            </Grid>
            <Grid container item xs={12} md={6} lg={4}>
              <StyledBox1
                sx={{
                  marginTop: "67px",
                  marginBottom: "60px",
                  width: "90%",
                  height: "80%",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    left: "15%",
                    bottom: "10%",
                    width: "90%",
                  }}
                  src={eleventh}
                ></img>
                <Stack sx={{ padding: 2 }}>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    Heart & Sol
                  </Typography>
                  <Stack sx={{ mt: "6px" }} spacing={1} direction={"row"}>
                    <img
                      style={{ width: "14.6px", height: "13.14" }}
                      src={solana}
                    ></img>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      0.3234
                    </Typography>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      16 tokens
                    </Typography>
                  </Stack>
                  <Stack mt="6px" spacing={2} direction={"row"}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "41%",
                        height: "40px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Play now
                    </Button>
                    <Button
                      className="buttonback"
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "45%",
                        height: "40px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Buy NFT <PlayArrowOutlinedIcon />
                    </Button>
                  </Stack>
                </Stack>
              </StyledBox1>
            </Grid>
            <Grid container item xs={12} md={6} lg={4}>
              <StyledBox1
                sx={{
                  marginTop: "67px",
                  marginBottom: "60px",
                  width: "90%",
                  height: "80%",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    left: "15%",
                    bottom: "10%",
                    width: "90%",
                  }}
                  src={twelve}
                ></img>
                <Stack sx={{ padding: 2 }}>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    Heart & Sol
                  </Typography>
                  <Stack sx={{ mt: "6px" }} spacing={1} direction={"row"}>
                    <img
                      style={{ width: "14.6px", height: "13.14" }}
                      src={solana}
                    ></img>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      0.3234
                    </Typography>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "11px",
                        color: "rgb(199, 193, 199)",
                      }}
                    >
                      16 tokens
                    </Typography>
                  </Stack>
                  <Stack mt="6px" spacing={2} direction={"row"}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "41%",
                        height: "40px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Play now
                    </Button>
                    <Button
                      className="buttonback"
                      variant="contained"
                      sx={{
                        color: "rgb(199, 193, 199)",
                        width: "45%",
                        height: "40px",
                        fontSize: "12px",
                        backgroundColor: "transparent",
                        border: "1px solid rgb(199, 193, 199)",
                        borderRadius: "50px",
                        padding: 1,
                        gap: "7px",
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
                      Buy NFT <PlayArrowOutlinedIcon />
                    </Button>
                  </Stack>
                </Stack>
              </StyledBox1>
            </Grid>
          </Grid>
        </Box>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              color: "rgb(199, 193, 199)",
              mt: 5,
              width: "fit",
              height: "49px",
              fontSize: "12px",
              backgroundColor: "transparent",
              border: "1px solid rgb(199, 193, 199)",
              borderRadius: "50px",
              padding: 2,
              gap: "7px",
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
            Discover More Music NFT
            <ArrowForwardIosIcon sx={{ width: "15px" }} />
          </Button>
        </Container>
      </Grid>
    </Box>
  );
};

export default Discover1;
