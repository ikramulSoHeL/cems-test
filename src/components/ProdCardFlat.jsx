import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";

const ProdCardFlat = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="w-full flex flex-col md:flex-row items-center justify-between gap-10 cursor-pointer relative transition-transform duration-500 p-10 border border-gray-300 rounded-md hover:shadow-md"
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

      <div className="w-full h-full flex flex-col items-start md:items-center gap-2">
        <Typography gutterBottom variant="h6" component="div">
          {data?.title}
        </Typography>

        <Typography variant="body2" color="text-secondary">
          {data?.description.slice(0, 100)}...
        </Typography>
      </div>

      <div className="w-full h-full flex flex-col items-start md:items-end justify-center gap-10">
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className="text-red-500"
        >
          $ {data?.price}
        </Typography>
      </div>

      {isHovered && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 flex flex-col justify-center items-center">
          <Button variant="contained" color="primary" className="bg-green-500">
            Buy Now
          </Button>
        </div>
      )}
    </Card>
  );
};

export default ProdCardFlat;
