import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";

const ProdCardFlat = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      container
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: { xs: "flex-start", md: "space-between" },
        gap: "10px",

        padding: "10px",
        border: "1px solid gray",
        borderRadius: "5px",
        cursor: "pointer",
        position: "relative",
        transition: "transform 0.5s ease",

        "&:hover": {
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
          transition: "transform 0.5s ease",

          "& img": {
            transform: "scale(1.1)",
            transition: "all 0.5 s ease",
          },
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        sx={{
          width: "100%",
          height: { xs: "200px", md: "150px" },
          display: "flex",
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        <CardMedia
          sx={{
            height: 150,
            width: 150,
            objectFit: "contain",
            padding: "10px",
          }}
          component="img"
          image={data?.image}
          title="green iguana"
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "flex-start", md: "center" },
          gap: "10px",
        }}
      >
        <Typography gutterBottom variant="h6" component="div">
          {data?.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {data?.description.slice(0, 100)}...
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "flex-start", md: "flex-end" },
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Typography gutterBottom variant="h6" component="div" color="red">
          $ {data?.price}
        </Typography>
      </Box>

      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            style={{ background: "green" }}
          >
            Buy Now
          </Button>
        </div>
      )}
    </Card>
  );
};

export default ProdCardFlat;
