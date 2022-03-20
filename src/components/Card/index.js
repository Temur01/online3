import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid(props) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "20px 100px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          ".MuiPaper-root": {
            padding: "0 !important",
          },
          padding: "0px 0px 100px 0",
        }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <Typography
              sx={{
                background: "#F7F7F7",
                padding: "12px 20px",
                color: "black",
                fontSize: "24px",
              }}
            >
              Free
            </Typography>
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Typography sx={{ color: "black", fontSize: "40px" }}>
                  $0
                </Typography>
                <Typography sx={{ color: "#6c757d", fontSize: "40px" }}>
                  /mo
                </Typography>
              </Typography>

              <Typography>10 users included</Typography>
              <Typography>2 GB of storage</Typography>
              <Typography>Email support</Typography>
              <Typography> Help center access</Typography>
              <Button
                variant="outlined"
                sx={{
                  mt: 4,
                  md: { width: "300px" },
                  sm: { padding: "10px 40px" },
                  xs: {
                    padding: "8px 24px",
                  },
                }}
              >
                Sign up free
              </Button>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <Typography
              sx={{
                background: "#F7F7F7",
                padding: "12px 20px",
                color: "black",
                fontSize: "24px",
              }}
            >
              Pro
            </Typography>
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Typography sx={{ color: "black", fontSize: "40px" }}>
                  $15
                </Typography>
                <Typography sx={{ color: "#6c757d", fontSize: "40px" }}>
                  /mo
                </Typography>
              </Typography>

              <Typography>20 users included</Typography>
              <Typography>10 GB of storage</Typography>
              <Typography>Priority email support</Typography>
              <Typography> Help center access</Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 4,
                  md: { padding: "10px 100px" },
                  sm: { padding: "10px 40px" },
                  xs: {
                    padding: "8px 24px",
                  },
                }}
              >
                Get started
              </Button>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <Typography
              sx={{
                background: "#F7F7F7",
                padding: "12px 20px",
                color: "black",
                fontSize: "24px",
              }}
            >
              Enterprise
            </Typography>
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Typography sx={{ color: "black", fontSize: "40px" }}>
                  $29
                </Typography>
                <Typography sx={{ color: "#6c757d", fontSize: "40px" }}>
                  /mo
                </Typography>
              </Typography>

              <Typography>30 users included</Typography>
              <Typography>15 GB of storage</Typography>
              <Typography>Phone and email support</Typography>
              <Typography> Help center access</Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 4,
                  md: { padding: "10px 100px" },
                  sm: { padding: "10px 40px" },
                  xs: {
                    padding: "8px 24px",
                  },
                }}
              >
                Sign up free
              </Button>
            </Box>
          </Item>
        </Grid>
      </Grid>
      <hr />
    </Box>
  );
}
