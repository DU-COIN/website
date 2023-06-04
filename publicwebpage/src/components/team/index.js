import React from "react";
import { CircularHeading } from "../ui/heading";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import MemberCard from "../ui/memberCard";

function Team({ members }) {
  const theme = useTheme();
  return (
    <section
      style={{
        background: "linear-gradient(1turn,#0b1d33,rgba(11,29,51,0) 97.51%)",
        padding: "100px 0",
      }}
    >
      <Container>
        <CircularHeading wrapperStyle={{ justifyContent: "center" }}>
          OUR TEAM
        </CircularHeading>

        <Typography
          gutterBottom
          variant="h3"
          fontWeight={"bold"}
          textAlign={"center"}
        >
          The Leadership{" "}
          <Typography
            component="span"
            color={theme.palette.info.main}
            fontSize={"inherit"}
            fontWeight={"bold"}
          >
            Team
          </Typography>{" "}
        </Typography>

        <Grid container spacing={{ xs: 4, md: 2 }}>
          {members.map((_, i) => (
            <Grid key={i} item xs={12} md={6} lg={4} xl={3}>
              <MemberCard {..._} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

Team.defaultProps = {
  members: new Array(12).fill({
    name: "Cameron Williamson",
    title: "Founder & Co",
    image:
      "https://bigtech-react.netlify.app/static/media/team_img01.88a044a7b38bfcfca3cb.png",
    social: {
      youtube: "",
      twitter: "",
      facebook: "",
      instagram: "",
    },
  }),
};

export default Team;
