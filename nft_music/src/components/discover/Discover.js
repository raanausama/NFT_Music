import {
  Box,
  Typography,
  Grid,
  Button,
  Stack,
  Container,
  IconButton,
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

const Discover = () => {
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
    <Box sx={{ color: "white", mt: "151px", ml: "40px", mr: "40px" }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h1">Discover Music NFT</Typography>
        </Grid>
        <Grid item xs={8}>
          <Stack
            spacing={2}
            direction={"row"}
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
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  transform: "scale(1.05)",
                },
                "&:active": {
                  boxShadow: "none",
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
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  transform: "scale(1.05)",
                },
                "&:active": {
                  boxShadow: "none",
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
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  transform: "scale(1.05)",
                },
                "&:active": {
                  boxShadow: "none",
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
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  transform: "scale(1.05)",
                },
                "&:active": {
                  boxShadow: "none",
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
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  transform: "scale(1.05)",
                },
                "&:active": {
                  boxShadow: "none",
                },
              }}
            >
              Funk
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Box sx={{ mt: "89px" }}>
        <Grid container>
          <Grid container item xs={12} md={6} lg={4}>
            <StyledBox1
              sx={{
                marginTop: "67px",
                marginBottom: "60px",
                marginLeft: 10,
                width: "400px",
                height: "350px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  left: "100px",
                  bottom: "60px",
                  width: "300px",
                }}
                src={first}
              ></img>
              <Stack sx={{ ml: 5 }}>
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
                      width: "150px",
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
                      width: "150px",
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
                marginLeft: 10,
                width: "400px",
                height: "350px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  left: "100px",
                  bottom: "60px",
                  width: "300px",
                }}
                src={second}
              ></img>
              <Stack sx={{ ml: 5 }}>
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
                      width: "150px",
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
                      width: "150px",
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
                marginLeft: 10,
                width: "400px",
                height: "350px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  left: "100px",
                  bottom: "60px",
                  width: "300px",
                }}
                src={third}
              ></img>
              <Stack sx={{ ml: 5 }}>
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
                      width: "150px",
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
                      width: "150px",
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
                marginLeft: 10,
                width: "400px",
                height: "350px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  left: "100px",
                  bottom: "60px",
                  width: "300px",
                }}
                src={fourth}
              ></img>
              <Stack sx={{ ml: 5 }}>
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
                      width: "150px",
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
                      width: "150px",
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
                marginLeft: 10,
                width: "400px",
                height: "350px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  left: "100px",
                  bottom: "60px",
                  width: "300px",
                }}
                src={fifth}
              ></img>
              <Stack sx={{ ml: 5 }}>
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
                      width: "150px",
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
                      width: "150px",
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
                marginLeft: 10,
                width: "400px",
                height: "350px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  left: "100px",
                  bottom: "60px",
                  width: "300px",
                }}
                src={sixth}
              ></img>
              <Stack sx={{ ml: 5 }}>
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
                      width: "150px",
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
                      width: "150px",
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
                marginLeft: 10,
                width: "400px",
                height: "350px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  left: "100px",
                  bottom: "60px",
                  width: "300px",
                }}
                src={seventh}
              ></img>
              <Stack sx={{ ml: 5 }}>
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
                      width: "150px",
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
                      width: "150px",
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
                marginLeft: 10,
                width: "400px",
                height: "350px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  left: "100px",
                  bottom: "60px",
                  width: "300px",
                }}
                src={eighth}
              ></img>
              <Stack sx={{ ml: 5 }}>
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
                      width: "150px",
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
                      width: "150px",
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
                marginLeft: 10,
                width: "400px",
                height: "350px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  left: "100px",
                  bottom: "60px",
                  width: "300px",
                }}
                src={nineth}
              ></img>
              <Stack sx={{ ml: 5 }}>
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
                      width: "150px",
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
                      width: "150px",
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
                marginLeft: 10,
                width: "400px",
                height: "350px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  left: "100px",
                  bottom: "60px",
                  width: "300px",
                }}
                src={tenth}
              ></img>
              <Stack sx={{ ml: 5 }}>
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
                      width: "150px",
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
                      width: "150px",
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
                marginLeft: 10,
                width: "400px",
                height: "350px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  left: "100px",
                  bottom: "60px",
                  width: "300px",
                }}
                src={eleventh}
              ></img>
              <Stack sx={{ ml: 5 }}>
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
                      width: "150px",
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
                      width: "150px",
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
                marginLeft: 10,
                width: "400px",
                height: "350px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  left: "100px",
                  bottom: "60px",
                  width: "300px",
                }}
                src={twelve}
              ></img>
              <Stack sx={{ ml: 5 }}>
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
                      width: "150px",
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
                      width: "150px",
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
                    Buy NFT <PlayArrowOutlinedIcon />
                  </Button>
                </Stack>
              </Stack>
            </StyledBox1>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              color: "rgb(199, 193, 199)",
              mt: 5,
              width: "220px",
              height: "49px",
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
            Explore Marketplace <ArrowForwardIosIcon sx={{ width: "15px" }} />
          </Button>
        </Box>
        <Box sx={{ mt: "99px" }}>
          <Typography
            variant="h3"
            sx={{
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "97px",
              color: "white",
            }}
          >
            Shape the NFT Music
          </Typography>
          <Grid container>
            <Grid item xs={8}>
              <Stack sx={{ color: "white" }} direction={"row"}>
                <Typography
                  variant="h4"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "97px",
                    color: "white",
                  }}
                >
                  Facebook
                </Typography>
                <Divider
                  sx={{
                    margin: "25px",
                    borderStyle: "solid",
                    borderColor: "rgb(199, 193, 199)",
                  }}
                  orientation="vertical"
                  flexItem
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 200,
                    lineHeight: "97px",
                    color: "white",
                  }}
                >
                  Twitter
                </Typography>
                <Divider
                  sx={{
                    margin: "25px",
                    borderStyle: "solid",
                    borderColor: "rgb(199, 193, 199)",
                  }}
                  orientation="vertical"
                  flexItem
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 200,
                    lineHeight: "97px",
                    color: "white",
                  }}
                >
                  Medium
                </Typography>
                <Divider
                  sx={{
                    margin: "25px",
                    borderStyle: "solid",
                    borderColor: "rgb(199, 193, 199)",
                  }}
                  orientation="vertical"
                  flexItem
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 200,
                    lineHeight: "97px",
                    color: "white",
                  }}
                >
                  Contact
                </Typography>
              </Stack>
              <Stack spacing={5} direction={"row"}>
                <Typography variant="h7" sx={{ color: "rgb(199, 193, 199)" }}>
                  Privacy Policy
                </Typography>
                <Typography variant="h7" sx={{ color: "rgb(199, 193, 199)" }}>
                  Terms and Conditions
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack direction={"row"}>
                <Button variant="filled">
                  <ArrowCircleUpIcon />
                </Button>
                <Typography
                  variant="h4"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "97px",
                    color: "white",
                  }}
                >
                  Back to Top
                </Typography>
              </Stack>
              <Typography
                variant="h7"
                sx={{ marginLeft: 5, color: "rgb(199, 193, 199)" }}
              >
                Copyright © 2022 Avi Yansah
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Discover;
