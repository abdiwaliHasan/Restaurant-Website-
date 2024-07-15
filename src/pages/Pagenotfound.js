import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const Pagenotfound = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
        }}
      >
        <Typography variant="h4">404 - Page Not Found</Typography>
        <Typography variant="body1">
          The page you are looking for does not exist.
        </Typography>
      </Box>
    </Layout>
  );
};

export default Pagenotfound;
