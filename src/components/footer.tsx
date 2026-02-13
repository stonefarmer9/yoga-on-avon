"use client";

import MainLogo from "@/app/MainLogo";
import theme from "@/theme";
import { Container, Typography, Button, Link } from "@mui/material";

const Footer = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      style={{
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(3, 2),
        marginTop: "auto",
      }}
    >
      <MainLogo />
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
      >
        Copyright 2024
      </Typography>
      <Button
        component={Link}
        href="#"
        variant="text"
      >
        Terms & Conditions
      </Button>
      <Button
        component={Link}
        href="#"
        variant="text"
      >
        Privacy Policy
      </Button>
    </Container>
  );
};

export default Footer;
