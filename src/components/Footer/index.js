import { Box, CardMedia, Container, Typography } from "@mui/material";

import React from "react";

function Footer(props) {
  return (
    <Container
      sx={{
        padding: "20px 100px",
        mt: 4,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <CardMedia
          sx={{ width: "24px", marginBottom: "8px" }}
          component="img"
          image="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
        />
        <Typography sx={{ fontSize: "12.8px", color: "#6c757d" }}>
          © 2017-2018
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
          Features
        </Typography>
        <Typography sx={{ color: "#6c757d" }}>Cool stuff</Typography>
        <Typography sx={{ color: "#6c757d" }}>Random feature</Typography>
        <Typography sx={{ color: "#6c757d" }}>Team feature</Typography>
        <Typography sx={{ color: "#6c757d" }}>Stuff for developers</Typography>
        <Typography sx={{ color: "#6c757d" }}>Another one</Typography>
        <Typography sx={{ color: "#6c757d" }}>Last time</Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
          Resources
        </Typography>
        <Typography sx={{ color: "#6c757d" }}>Resources</Typography>
        <Typography sx={{ color: "#6c757d" }}>Resources name</Typography>
        <Typography sx={{ color: "#6c757d" }}>Another resource</Typography>
        <Typography sx={{ color: "#6c757d" }}>Final resource</Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
          About
        </Typography>
        <Typography sx={{ color: "#6c757d" }}>Team</Typography>
        <Typography sx={{ color: "#6c757d" }}>Location</Typography>
        <Typography sx={{ color: "#6c757d" }}>Privacy</Typography>
        <Typography sx={{ color: "#6c757d" }}>Terms</Typography>
      </Box>
    </Container>
  );
}

export default Footer;
