import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProdCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="w-full h-full flex flex-col items-center justify-between gap-10 cursor-pointer relative transition-all ease-in-out duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardMedia
        sx={{
          marginTop: "20px",
          width: "90%",
          height: "250px",
          objectFit: "contain",
          padding: "10px",
          transition: "transform 0.5s ease",

          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}
        component="img"
        image={data?.image}
        title="green iguana"
      />

      {isHovered && (
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-20 transition-all duration-500 ease-in-out">
          <Button variant="contained" className="bg-green-500">
            Buy Now
          </Button>
        </div>
      )}

      <CardContent className="flex flex-col justify-between h-full">
        <div>
          <Typography gutterBottom variant="h6" component="div">
            {data?.title}
          </Typography>

          <Typography variant="body2" color="text-secondary">
            {data?.description.slice(0, 100)}...
          </Typography>
        </div>

        <div className="flex justify-between items-end">
          <Typography variant="h4" className="text-green">
            $ {data?.price}
          </Typography>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProdCard;
