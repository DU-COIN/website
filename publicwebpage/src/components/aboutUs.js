import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import CryptoImg from "../assets/images/crypto.png";
import CircleIcon from "@mui/icons-material/Circle";
import { CircularHeading } from "./ui/heading";

function AboutUs() {
  const theme = useTheme();
  return (
    <section className="aboutUs" style={{ padding: "120px 0" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <img
              src={CryptoImg}
              style={{ width: "100%", maxHeight: 300, objectFit: "contain" }}
              alt="Crypto"
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              <CircularHeading>WHO WE ARE</CircularHeading>
              <Typography variant="h3" fontWeight={"bold"}>
                The World’s{" "}
                <Typography
                  component="span"
                  color={theme.palette.info.main}
                  fontSize={"inherit"}
                  fontWeight={"bold"}
                >
                  1st ICO
                </Typography>{" "}
                Platform That Offers Rewards
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                The World’s 1st ICO Platform That Offers Rewards and The
                platform helps investors to make easy to purchase and sell their
                tokens
              </Typography>
              <Button variant="contained" color="info">
                Purchase Now
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default AboutUs;
