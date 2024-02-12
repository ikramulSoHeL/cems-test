import { Box, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Box
      sx={{
        borderBottom: "1px solid var(--blackShade2)",
        px: { xs: "50px", md: "170px" },
        py: { xs: "30px", md: "50px" },
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Dashboard
      </Typography>
    </Box>
  );
};

export default Hero;
