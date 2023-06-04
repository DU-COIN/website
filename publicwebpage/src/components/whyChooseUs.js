import React from "react";
import {
  Container,
  Typography,
  useTheme,
  Card,
  CardContent,
  Avatar,
  Stack,
} from "@mui/material";
import { CircularHeading } from "./ui/heading";
import IconAvatar from "./ui/iconAvatar";

function ServiceCard() {
  const theme = useTheme();
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: theme.palette.primary.main,
        background: "#030b15",
        border: "1px solid #121a23",
        minHeight: "350px",
        width: "300px",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <CardContent>
        <Stack spacing={3}>
          <IconAvatar />
          <Typography
            variant="h5"
            fontWeight={"bold"}
            color={theme.palette.common.white}
            sx={{
              "&:hover": {
                color: theme.palette.info.main,
                cursor: "pointer",
              },
            }}
          >
            Protect the identity
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Add new, trending and rare artwork to your collection.
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

function WhyChooseUs(props) {
  const theme = useTheme();
  return (
    <section style={{ padding: "80px 0" }}>
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <CircularHeading wrapperStyle={{ justifyContent: "center" }}>
            {props.heading}
          </CircularHeading>
          <Typography variant="h3" fontWeight={"bold"} textAlign="center">
            Why Choose Our Bigtech{" "}
            <Typography
              component={"span"}
              color={theme.palette.info.main}
              fontWeight={"bold"}
              fontSize={"inherit"}
            >
              Token
            </Typography>
          </Typography>

          <swiper-container
            slides-per-view="4"
            speed="500"
            loop="true"
            css-mode="true"
          >
            {props.services.map((_, i) => (
              <swiper-slide key={i}>
                <ServiceCard />
              </swiper-slide>
            ))}
          </swiper-container>
        </Stack>
      </Container>
    </section>
  );
}

WhyChooseUs.defaultProps = {
  heading: "WHY CHOOSE US",
  services: new Array(10).fill({
    title: "Lifetime free transaction",
    icon: "",
    text: "Add new, trending and rare artwork to your collection.",
  }),
};

export default WhyChooseUs;
