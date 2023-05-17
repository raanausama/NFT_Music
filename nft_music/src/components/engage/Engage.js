import React from "react";
import { Box, Button, Grid, Stack } from "@mui/material";
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

const Engage = () => {
  const theme = useTheme();

  return (
    <Grid container>
      <Box>
        <Grid item xs={12} md={9}>
          <Typography
            sx={{
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
              color: "white",
            }}
          >
            Engage your Fans with community
          </Typography>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={4}>
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
          <Grid item xs={12} md={4}>
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
          <Grid item xs={12} md={4}>
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
    </Grid>
  );
};

export default Engage;
