import {
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { CircularHeading } from "../ui/heading";
import HoldingsImg from "../../assets/images/holdings.png";

function WhitePaper() {
  const theme = useTheme();
  return (
    <section style={{ margin: 20 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={HoldingsImg} alt="holdings" style={{ width: "100%" }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <CircularHeading>WHITEPAPER</CircularHeading>
              <Typography variant="h3" fontWeight={"bold"}>
                Read Bigtech{" "}
                <Typography
                  component="span"
                  color={theme.palette.info.main}
                  fontSize={"inherit"}
                  fontWeight={"bold"}
                >
                  Documents
                </Typography>
              </Typography>

              <ul style={{ lineHeight: 3 }}>
                <li>White Paper</li>
                <li>Privaci & Policy</li>
                <li>Terms Of Coin Sale</li>
                <li>One Pager</li>
              </ul>

              <Button variant="contained" color="secondary" sx={{ width: 200 }}>
                Download Doc
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default WhitePaper;
