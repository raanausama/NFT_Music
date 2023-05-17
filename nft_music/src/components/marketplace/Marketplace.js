import React from "react";
import { Box, Button, Grid, Stack } from "@mui/material";
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

const StyledBox = styled(Box)(({ theme }) => ({
  position: "relative",
  border: `1px solid `,
  borderRightColor: "white",
  borderTopColor: "white",
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

const Marketplace = () => {
  return (
    <Box sx={{ padding: "10px", mt: "42.5px" }}>
      <Grid container spacing={2}>
        <Grid container item xs={6}>
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "85px",
                lineHeight: "97px",
                color: "white",
              }}
            >
              How do Music NFTs work?
            </Typography>
          </Box>
          <Grid item xs={8}>
            <Typography
              sx={{
                marginTop: "36px",
                fontStyle: "normal",
                fontWeight: "200",
                fontSize: "16px",
                lineHeight: "160%",
                color: "rgb(199, 193, 199)",
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
        <Grid item xs={4}>
          <StyledBox
            sx={{
              // marginLeft: 10,
              width: "400px",
              height: "350px",
            }}
          >
            <img
              style={{
                position: "relative",
                right: "120px",
                top: "0px",
                width: 450,
              }}
              src={hoop}
            ></img>
          </StyledBox>
        </Grid>
      </Grid>
      <Box sx={{ mr: "69px", mt: "122px", color: "white" }}>
        <Grid container>
          <Grid spacing={2} container item xs={6}>
            <Grid item xs={6}>
              <StyledBox1
                sx={{
                  marginLeft: 15,
                  width: "190px",
                  height: "240px",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    left: "28px",
                    bottom: "10px",
                    width: "180px",
                  }}
                  src={first}
                ></img>
                <Stack sx={{ ml: 3 }}>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
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
            <Grid item xs={6}>
              <StyledBox1
                sx={{
                  marginTop: "67px",
                  marginLeft: 5,
                  width: "190px",
                  height: "240px",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    left: "28px",
                    bottom: "10px",
                    width: "180px",
                  }}
                  src={second}
                ></img>
                <Stack sx={{ ml: 3 }}>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
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
            <Grid item xs={6}>
              <StyledBox1
                sx={{
                  marginTop: "67px",
                  marginLeft: 15,
                  width: "190px",
                  height: "240px",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    left: "28px",
                    bottom: "10px",
                    width: "180px",
                  }}
                  src={third}
                ></img>
                <Stack sx={{ ml: 3 }}>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
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
            <Grid item xs={6}>
              <StyledBox1
                sx={{
                  marginTop: "125px",
                  marginLeft: 5,
                  width: "190px",
                  height: "240px",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    left: "28px",
                    bottom: "10px",
                    width: "180px",
                  }}
                  src={fourth}
                ></img>
                <Stack sx={{ ml: 3 }}>
                  <Typography
                    sx={{
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
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
          <Grid item xs={6}>
            <Stack>
              <Typography
                variant="h1"
                sx={{
                  marginTop: "193px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "85px",
                  lineHeight: "97px",
                  color: "white",
                }}
              >
                Music NFT Marketplace
              </Typography>
              <Typography
                sx={{
                  marginTop: "36px",
                  fontStyle: "normal",
                  fontWeight: "100",
                  fontSize: "15px",
                  lineHeight: "160%",
                  color: "rgb(199, 193, 199)",
                }}
              >
                Create your first music NFTs with NFT market for musicians.
                Create music and music videos just under the $1, the platform
                works with BSC blockchain and supports mp4. With AirNFTs, you
                are getting the control over your NFTs, no middle man cutting
                your sales. Create, Buy, Sell and Earn with your music NFTs.
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
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    transform: "scale(1.05)",
                  },
                  "&:active": {
                    boxShadow: "none",
                  },
                }}
              >
                Explore Marketplace{" "}
                <ArrowForwardIosIcon sx={{ width: "15px" }} />
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: "177px" }}>
        <Grid container spacing={9}>
          <Grid item xs={12} md={9}>
            <Box>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 200,
                  fontSize: "75px",
                  lineHeight: "97px",
                  color: "white",
                }}
              >
                Engage your Fans with community
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={2}>
              <Typography variant="h1" sx={{ color: "white" }}>
                01/
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: "200",
                  fontSize: "17px",
                  lineHeight: "160%",
                  color: "rgb(199, 193, 199)",
                }}
              >
                Artists themselves become a platform. NFTs allow artistes,
                especially upcoming ones, to create an ecosystem that allows
                genuine fans to buy into their market.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={2}>
              <Typography variant="h1" sx={{ color: "white" }}>
                02/
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: "200",
                  fontSize: "17px",
                  lineHeight: "160%",
                  color: "rgb(199, 193, 199)",
                }}
              >
                NFT gives all the power to creators. Anyone upcoming artiste can
                do their stuff on-chain, making them more independent and
                freeing them from unfavorable deals from record labels.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={2}>
              <Typography variant="h1" sx={{ color: "white" }}>
                03/
              </Typography>
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: "200",
                  fontSize: "17px",
                  lineHeight: "160%",
                  color: "rgb(199, 193, 199)",
                }}
              >
                A positive NFT-fueled change in the music market can upstage
                crypto adoption at large.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Marketplace;
