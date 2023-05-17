import React from "react";
import { Box, Button, Grid, Stack, colors, Container } from "@mui/material";
import "./marketplace.css";
import { Typography } from "@mui/material";
import hoop from "../../assets/hoop.png";
import first from "../../assets/first.png";
import { styled } from "@mui/material/styles";
import solana from "../../assets/SolanaS.png";
import second from "../../assets/second.png";
import third from "../../assets/third.png";
import fourth from "../../assets/fourth.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  position: "relative",
  border: `1px solid `,
  borderLeftColor: "transparent",
  borderBottomColor: "transparent",
  ":after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "50%",
    width: "calc(50% - 1px)",
    height: "1px",
    background: "white",
  },
  ":before": {
    content: '""',
    position: "absolute",
    left: 0,
    width: "1px",
    height: "calc(28% - 1px)",
    background: "white",
  },
}));

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
    width: "calc(8% - 1px)",
    height: "1px",
    background: "white",
  },
  ":before": {
    content: '""',
    position: "absolute",
    right: 0,
    bottom: "0%",
    width: "1px",
    height: "calc(18% - 1px)",
    background: "white",
  },
}));

const Marketplace1 = () => {
  const theme = useTheme();

  return (
    <Box sx={{ mt: "42.5px", color: "white" }}>
      <Grid sx={{ padding: 2 }} container>
        <Grid container item xs={12} md={8} xl={8}>
          <Typography
            sx={{
              fontStyle: "normal",
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
            How do Music NFTs work?
          </Typography>
          <Grid item xs={10} xl={6}>
            <Typography
              sx={{
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
              }}
            >
              NFTs are unique assets stored and tradable on a blockchain. They
              are, immutable, scarce and publicly verifiable. In the music
              world, artistes get to sell limited digital content to their fans
              who pay via crypto. You can now produce any music content that
              cannot be counterfeited.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          sx={{ display: "flex", justifyContent: "flex-end" }}
          xs={8}
          md={4}
          xl={4}
        >
          <StyledBox
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              width: "80%",
              height: "75%",
            }}
          >
            <img
              style={{
                position: "relative",
                right: "25%",
                top: "10%",
                width: "95%",
              }}
              src={hoop}
            ></img>
          </StyledBox>
        </Grid>
        <Container>
          <Grid container spacing={3}>
            <Grid container sx={{ mt: 5 }} spacing={2} xs={12} md={5}>
              <Grid item xs={6} md={6} xl={6}>
                <StyledBox1 sx={{ width: "85%" }}>
                  <img
                    style={{
                      borderBottom: "12px solid black",
                      position: "relative",
                      left: "15%",
                      top: "0%",
                      width: "95%",
                    }}
                    src={first}
                  ></img>
                  <Stack sx={{ ml: 3 }}>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "13px",
                        lineHeight: "19px",
                      }}
                    >
                      Rap Music
                    </Typography>
                    <Stack sx={{ mt: "3px" }} spacing={1} direction={"row"}>
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
                    </Stack>
                  </Stack>
                </StyledBox1>
              </Grid>
              <Grid sx={{ mt: 5 }} item xs={6} md={6} xl={6}>
                <StyledBox1 sx={{ width: "85%" }}>
                  <img
                    style={{
                      borderBottom: "12px solid black",
                      position: "relative",
                      left: "15%",
                      top: "0%",
                      width: "95%",
                    }}
                    src={second}
                  ></img>
                  <Stack sx={{ ml: 3 }}>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "13px",
                        lineHeight: "19px",
                      }}
                    >
                      Rap Music
                    </Typography>
                    <Stack sx={{ mt: "3px" }} spacing={1} direction={"row"}>
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
                    </Stack>
                  </Stack>
                </StyledBox1>
              </Grid>
              <Grid item xs={6} md={6} xl={6}>
                <StyledBox1 sx={{ width: "85%" }}>
                  <img
                    style={{
                      borderBottom: "12px solid black",
                      position: "relative",
                      left: "15%",
                      top: "0%",
                      width: "95%",
                    }}
                    src={third}
                  ></img>
                  <Stack sx={{ ml: 3 }}>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "13px",
                        lineHeight: "19px",
                      }}
                    >
                      Rap Music
                    </Typography>
                    <Stack sx={{ mt: "3px" }} spacing={1} direction={"row"}>
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
                    </Stack>
                  </Stack>
                </StyledBox1>
              </Grid>
              <Grid sx={{ mt: 5 }} item xs={6} md={6} xl={6}>
                <StyledBox1 sx={{ width: "85%" }}>
                  <img
                    style={{
                      borderBottom: "12px solid black",
                      position: "relative",
                      left: "15%",
                      top: "0%",
                      width: "95%",
                    }}
                    src={fourth}
                  ></img>
                  <Stack sx={{ ml: 3 }}>
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "13px",
                        lineHeight: "19px",
                      }}
                    >
                      Rap Music
                    </Typography>
                    <Stack sx={{ mt: "3px" }} spacing={1} direction={"row"}>
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
                    </Stack>
                  </Stack>
                </StyledBox1>
              </Grid>
            </Grid>
            <Grid item xs={12} md={7}>
              <Container sx={{ mt: 15, padding: 2 }}>
                <Stack>
                  <Typography
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
                      color: "white",
                    }}
                  >
                    Music NFT Marketplace
                  </Typography>
                  <Typography
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
                    }}
                  >
                    Create your first music NFTs with NFT market for musicians.
                    Create music and music videos just under the $1, the
                    platform works with BSC blockchain and supports mp4. With
                    AirNFTs, you are getting the control over your NFTs, no
                    middle man cutting your sales. Create, Buy, Sell and Earn
                    with your music NFTs.
                  </Typography>
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
                    Explore Marketplace{" "}
                    <ArrowForwardIosIcon sx={{ width: "15px" }} />
                  </Button>
                </Stack>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Box>
  );
};

export default Marketplace1;
