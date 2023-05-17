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
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 10 }}>
      <Grid container>
        <Grid xs={12} md={10} lg={10} xl={8}>
          <Typography
            sx={{
              flexGrow: 1,
              textAlign: "flex-start",
              color: "white",
              fontSize: "2rem", // default font size for larger screens
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.5rem", // font size for smaller screens
              },
              [theme.breakpoints.up("md")]: {
                fontSize: "2.5rem", // font size for medium screens
              },
              [theme.breakpoints.up("lg")]: {
                fontSize: "3rem", // font size for large screens
              },
              [theme.breakpoints.up("xl")]: {
                fontSize: "4rem", // font size for 4K screens and larger
              },
            }}
          >
            Shape the NFT Music
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} lg={8} xl={8}>
          <Stack sx={{ color: "white" }} direction={"row"}>
            <Typography
              variant="h4"
              sx={{
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "97px",
                textTransform: "uppercase",
                fontSize: "1.5rem", // default font size for larger screens
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.5rem", // font size for smaller screens
                },
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
                textTransform: "uppercase",
                fontSize: "1.5rem", // default font size for larger screens
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.5rem", // font size for smaller screens
                },
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
                textTransform: "uppercase",
                fontSize: "1.5rem", // default font size for larger screens
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.5rem", // font size for smaller screens
                },
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
                textTransform: "uppercase",
                fontSize: "1.5rem", // default font size for larger screens
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.5rem", // font size for smaller screens
                },
                color: "white",
              }}
            >
              Contact
            </Typography>
          </Stack>
          <Stack spacing={5} direction={"row"}>
            <Typography
              sx={{
                fontSize: "1rem", // default font size for larger screens
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.5rem", // font size for smaller screens
                },
                color: "rgb(199, 193, 199)",
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem", // default font size for larger screens
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.5rem", // font size for smaller screens
                },
                color: "rgb(199, 193, 199)",
              }}
            >
              Terms and Conditions
            </Typography>
          </Stack>
        </Grid>
        <Grid
          sx={{
            marginTop: { xs: 10, md: 0 },
            display: { md: "flex" },
            flexDirection: { md: "column" },
            justifyContent: { sm: "center" },
          }}
          item
          xs={12}
          md={4}
          lg={4}
          xl={3}
        >
          <Stack direction={"row"}>
            <Button sx={{ padding: 0, color: "white" }} variant="filled">
              <ArrowCircleUpIcon />
            </Button>
            <Typography
              sx={{
                flexGrow: 1,
                textAlign: "flex-start",
                color: "white",
                fontSize: "2rem", // default font size for larger screens
                [theme.breakpoints.down("sm")]: {
                  fontSize: "1rem", // font size for smaller screens
                },
                [theme.breakpoints.up("md")]: {
                  fontSize: "2rem", // font size for medium screens
                },
                [theme.breakpoints.up("lg")]: {
                  fontSize: "3rem", // font size for large screens
                },
                [theme.breakpoints.up("xl")]: {
                  fontSize: "3rem", // font size for 4K screens and larger
                },
              }}
            >
              Back to Top
            </Typography>
          </Stack>
          <Typography
            variant="h7"
            sx={{
              fontSize: "1rem", // default font size for larger screens
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.5rem", // font size for smaller screens
              },
              marginLeft: 3,
              color: "rgb(199, 193, 199)",
            }}
          >
            Copyright © 2022 Avi Yansah
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
