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
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "10px",
        cursor: "pointer",
        position: "relative",
        transition: "all 0.5s ease",

        "&:hover img": {
          transform: "scale(1.1)",
          transition: "all 0.5 s ease",
        },
      }}
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
        }}
        component="img"
        image={data?.image}
        title="green iguana"
      />
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,

            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0, 0, 0, 0.5)",
            transition: "all 0.5s ease",
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

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {data?.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {data?.description.slice(0, 100)}...
        </Typography>

        <Typography variant="h4" color="green">
          $ {data?.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ProdCard;
