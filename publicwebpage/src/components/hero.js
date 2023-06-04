import React from "react";
import {
  Typography,
  Box,
  useTheme,
  Container,
  Slider,
  Stack,
  Paper,
} from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Fire from "../assets/images/fire.png";
import CircleOne from "../assets/images/banner_shape01.png";
import "./style.css";

const PriceProgressBar = () => {
  const theme = useTheme();
  return (
    <Stack spacing={1} width={"75%"}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        {[
          { label: "PRE SELL", color: theme.palette.info.main },
          { label: "SOFT CAP", color: theme.palette.secondary.main },
          { label: "BONUS", color: theme.palette.success.main },
        ].map((_, i) => (
          <Box key={i} sx={{}}>
            <Typography
              sx={{ color: _.color, fontWeight: "bold", fontSize: 12 }}
            >
              {_.label}
            </Typography>
            <HorizontalRuleIcon
              sx={{
                height: "16px",
                width: "16px",
                transform: "rotate(90deg)",
                color: _.color,
              }}
            />
          </Box>
        ))}
      </Stack>
      <Slider color="info" disableSwap value={80} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>65% TARGET RAISED</Typography>
        <Typography>1 ETH = $1000 = 3177.38 CIC</Typography>
      </Box>
    </Stack>
  );
};

function Hero() {
  const theme = useTheme();
  return (
    <section className="hero">
      <Box className="banner-shape-wrap">
        <img src={CircleOne} alt="shape" width={150} height={150} />
        <img src={CircleOne} alt="shape" width={100} height={100} />
        <img src={CircleOne} alt="shape" width={64} height={64} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          height: "100%",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            gap: 2,
          }}
        >
          <img src={Fire} width={52} height={52} alt="fire" />
          <Typography variant="h3" fontWeight={"700"} color={"white"}>
            Join Future Of Algorithmic{" "}
            <Typography
              color={theme.palette.info.main}
              sx={{ fontSize: "inherit", fontWeight: "700" }}
              component={"span"}
            >
              Crypto
            </Typography>{" "}
            Trading Strategies
          </Typography>

          <PriceProgressBar />

          <Typography variant="h5" fontWeight={"bold"}>
            ICO Will Start In..
          </Typography>

          <Stack direction="row" width="100%" justifyContent={"space-between"}>
            {[
              { num: "00", text: "Days", color: theme.palette.info.main },
              { num: "00", text: "Hour", color: theme.palette.secondary.main },
              { num: "00", text: "Minute", color: theme.palette.error.main },
              { num: "00", text: "Second", color: theme.palette.success.main },
            ].map((_, i) => (
              <Paper
                key={i}
                square
                elevation={2}
                sx={{
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "#0b1d33",
                }}
              >
                <Typography variant="h4" color={_.color} fontWeight={"bold"}>
                  {_.num}
                </Typography>
                <Typography color="white" variant="subtitle2">
                  {_.text}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Container>
      </Box>
    </section>
  );
}

export default Hero;
