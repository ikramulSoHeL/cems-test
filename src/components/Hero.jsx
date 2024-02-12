import { Box } from "@mui/material";
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
      Dashboard
    </Box>
  );
};

export default Hero;
