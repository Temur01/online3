import { Container, Typography } from "@mui/material";
import React from "react";

function Title() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 10,
      }}
    >
      <Typography
        sx={{ fontFamily: "Roboto", fontWeight: "300", fontSize: "56px" }}
      >
        Pricing
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          textAlign: "center",
          fontWeight: "300",
          padding: "20px 200px",
        }}
      >
        Quickly build an effective pricing table for your potential customers
        with this Bootstrap example. It's built with default Bootstrap
        components and utilities with little customization.
      </Typography>
    </Container>
  );
}

export default Title;
