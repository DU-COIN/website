import React from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { CircularHeading } from "../ui/heading";
import IconAvatar from "../ui/iconAvatar";
import MailIcon from "@mui/icons-material/Mail";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import PlaceIcon from "@mui/icons-material/Place";
import "./style.css";

const ContactUsForm = () => {
  return (
    <form>
      <Card className="contactForm">
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <TextField
                placeholder="Enter your name"
                fullWidth
                variant="filled"
                sx={{
                  backgroundColor: "#0b1d33",
                  color: "white",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                placeholder="Enter your email"
                type="email"
                fullWidth
                variant="filled"
                sx={{
                  backgroundColor: "#0b1d33",
                  color: "white",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                placeholder="Enter your message"
                multiline
                rows={5}
                fullWidth
                variant="filled"
                sx={{
                  backgroundColor: "#0b1d33",
                  color: "white",
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Send Message
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

function Contact() {
  const theme = useTheme();
  return (
    <section className="contact-section" style={{ padding: "100px 10px" }}>
      <Container maxWidth="md">
        <CircularHeading wrapperStyle={{ justifyContent: "center" }}>
          CONTACT
        </CircularHeading>

        <Typography variant="h3" fontWeight={"bold"} textAlign={"center"}>
          <Typography
            component="span"
            color={theme.palette.info.main}
            fontSize={"inherit"}
            fontWeight={"bold"}
          >
            Contact
          </Typography>{" "}
          ICO Crypto
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 10, md: 5 }}
          sx={{ my: 10 }}
          justifyContent={"space-between"}
        >
          <div className="contactWrapper">
            <IconAvatar borderColor={theme.palette.secondary.main}>
              <MailIcon fontSize="medium" color={"secondary"} />
            </IconAvatar>
            <Typography variant="h6" color="white">
              company@gmail.com
            </Typography>
          </div>

          <div className="contactWrapper">
            <IconAvatar borderColor={theme.palette.error.main}>
              <PhoneEnabledIcon fontSize="medium" color={"error"} />
            </IconAvatar>
            <Typography variant="h6" color="white">
              +84 0977425031
            </Typography>
          </div>

          <div className="contactWrapper">
            <IconAvatar borderColor={theme.palette.info.main}>
              <PlaceIcon fontSize="medium" color={"info"} />
            </IconAvatar>
            <Typography variant="h6" color="white">
              Georgia 198
            </Typography>
          </div>
        </Stack>

        <ContactUsForm />
      </Container>
    </section>
  );
}

export default Contact;
