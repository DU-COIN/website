import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Logo from "../assets/images/logo.png";
import { CircularHeading } from "./ui/heading";

function Partners() {
  const theme = useTheme();
  return (
    <section style={{ padding: "80px 0" }}>
      <Container maxWidth="lg">
        <CircularHeading wrapperStyle={{ justifyContent: "center" }}>
          OUR TOP PARTNER
        </CircularHeading>
        <Grid container>
          {new Array(10).fill("").map((_, i) => (
            <Grid key={i} item xs={2} lg={2.3}>
              <Paper
                variant="outlined"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  border: "1px solid #eee4",
                  p: 3,
                  opacity: 0.5,
                  transition: "all 0.4s ease-in-out",
                  "&:hover": {
                    opacity: 1,
                    cursor: "pointer",
                  },
                }}
              >
                <img src={Logo} width="100%" />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default Partners;
