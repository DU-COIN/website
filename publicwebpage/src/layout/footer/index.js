import React from "react";
import {
  Box,
  Link,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import NorthIcon from "@mui/icons-material/North";
import Logo from "../../assets/images/logo.png";

function Footer() {
  const theme = useTheme();
  return (
    <footer style={{ margin: "20px 0", height: 400 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 66,
          }}
        >
          <Divider
            light
            sx={{
              backgroundColor: "#a4b4c3",
              position: "relative",
              width: "100%",
            }}
          >
            <Chip
              clickable
              variant="filled"
              color="primary"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              sx={{
                position: "absolute",
                top: "-30px",
                height: 66,
                width: 66,
                borderRadius: "50%",
                border: "1px solid #a4b4c3",
                "&:hover": {
                  backgroundColor: theme.palette.info.main,
                  color: theme.palette.common.white,
                  border: "none",
                },
              }}
              label={
                <NorthIcon
                  fontSize="small"
                  sx={{ display: "flex", alignItems: "center" }}
                />
              }
            />
          </Divider>
        </Box>
        <section className="upperFooter">
          <Grid
            container
            spacing={{ xs: 2, lg: 2 }}
            style={{ margin: "20px 0" }}
          >
            <Grid item xs={12} sm={6} lg={3}>
              <Stack spacing={1} justifyContent={"center"}>
                <img src={Logo} alt="logo" width={150} />
                <Typography variant="subtitle2" color="text.secondary">
                  A new way to make the payments easy, reliable and 100% secure.
                  claritatem itamconse quat. Exerci tationulla
                </Typography>

                <Stack direction="row" alignItems={"center"} spacing={2}>
                  <IconButton color="info">h</IconButton>
                  <IconButton color="info">h</IconButton>
                  <IconButton color="info">h</IconButton>
                  <IconButton color="info">h</IconButton>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Typography gutterBottom variant="h6" fontWeight={"bold"}>
                USEFUL LINKS
              </Typography>
              <Stack spacing={1}>
                {[
                  { label: "Contact us", link: "" },
                  { label: "How it Works", link: "" },
                  { label: "Create", link: "" },
                  { label: "Explore", link: "" },
                  { label: "Terms & Services", link: "" },
                ].map((_, i) => (
                  <Typography
                    href={_.href}
                    component="a"
                    color="text.secondary"
                  >
                    {_.label}
                  </Typography>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              {" "}
              <Typography gutterBottom variant="h6" fontWeight={"bold"}>
                COMMUNITY
              </Typography>
              <Stack spacing={1}>
                {[
                  { label: "Help Center", link: "" },
                  { label: "Partners", link: "" },
                  { label: "Suggestions", link: "" },
                  { label: "Blog", link: "" },
                  { label: "Newsletter", link: "" },
                ].map((_, i) => (
                  <Typography
                    href={_.href}
                    component="a"
                    color="text.secondary"
                  >
                    {_.label}
                  </Typography>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              {" "}
              <Typography gutterBottom variant="h6" fontWeight={"bold"}>
                SUBSCRIBE NEWSLETTER
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle2"
                color="text.secondary"
              >
                Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea
                commodo
              </Typography>
            </Grid>
          </Grid>
        </section>
      </Container>

      <Container maxWidth="xl">
        <Divider
          light
          sx={{ height: 1, background: theme.palette.common.white }}
        />
        <Grid container sx={{ p: 3 }}>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom color="text.secondary">
              Copyright © 2022. All Rights Reserved Bigtech
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1, md: 3 }}
              justifyContent={"center"}
            >
              <Link href="/" color="text.secondary">
                Terms and conditions
              </Link>
              <Link href="/" color="text.secondary">
                Privacy policy
              </Link>
              <Link href="/" color="text.secondary">
                Login / Signup
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
