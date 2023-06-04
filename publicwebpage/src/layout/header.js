import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: "space-around" }}>
        <img src={Logo} alt="logo" width={100} />
        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "stretch",
            width: "70%",
          }}
        >
          {[
            { label: "Home", link: "#home" },
            { label: "About Us", link: "#aboutus" },
            { label: "Sales", link: "#sales" },
            { label: "Roadmap", link: "#roadmap" },
            { label: "Contact Us", link: "#contactus" },
          ].map((_, i) => (
            <li
              key={i}
              style={{
                listStyle: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <a href={_.link} style={{ color: "white" }}>
                {_.label}
              </a>
            </li>
          ))}
        </ul>

        <Button variant="contained" color="info">
          Buy Now
        </Button>
      </Toolbar>
    </AppBar>
  );
}
