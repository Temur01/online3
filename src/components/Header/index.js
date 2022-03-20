import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #dee2e6",
        padding: "8px 0",
      }}
    >
      <Typography sx={{ fontSize: "20px", padding: "12px", color: "#212530" }}>
        Company name
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#343a40 !important",
        }}
      >
        <Typography
          sx={{
            padding: "12px",
            fontFamily: "Roboto",
            transition: ".1s",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Features
        </Typography>
        <Typography
          sx={{
            padding: "12px",
            fontFamily: "Roboto",
            transition: ".1s",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Enterprise
        </Typography>
        <Typography
          sx={{
            padding: "12px",
            fontFamily: "Roboto",
            transition: ".1s",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Support
        </Typography>
        <Typography
          sx={{
            padding: "12px",
            fontFamily: "Roboto",
            transition: ".1s",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Pricing
        </Typography>
        <Button
          variant="outlined"
          sx={{
            padding: " 4px 12px",
            fontFamily: "Roboto",
          }}
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
