import { Avatar, Box, Stack, Tab, Tabs, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import logo from "../assets/logo.svg";
import Image from "next/image";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";

const Navbar = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [sendSatatus, setSendSatatus] = useState(false);
  const handleSendSatatus = () => {
    setSendSatatus(!sendSatatus);

    setTimeout(() => {
      setSendSatatus(false);
    }, 5000);
  };

  return (
    <div className="flex justify-between items-center border-b border-blackShade2 px-10 md:px-10 py-2 md:py-0">
      <div className="flex items-center space-x-2">
        <Image src={logo} sx={{ width: "60px", height: "auto" }} alt="" />

        <Tabs value={value} onChange={handleChange} className="hidden md:flex">
          <Tab label="Dashboard" className="capitalize text-blackShade1" />
          <Tab label="Team" className="capitalize text-blackShade1" />
          <Tab label="Projects" className="capitalize text-blackShade1" />
          <Tab label="Calendar" className="capitalize text-blackShade1" />
        </Tabs>
      </div>

      <div className="flex items-center space-x-2">
        <div>
          <Button
            aria-describedby={id}
            variant="outlined"
            onClick={handleClick}
          >
            Feedback
          </Button>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            {sendSatatus ? (
              <Box
                sx={{
                  padding: "10px",
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",

                  gap: "10px",
                }}
              >
                <SentimentSatisfiedIcon />
                <Typography variant="h6" color="black">
                  Thank you for your feedback
                </Typography>

                <Typography variant="body1">
                  We will get back to you soon
                </Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  width: "300px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <TextareaAutosize
                  minRows={3}
                  maxRows={3}
                  style={{
                    width: "93%",
                    resize: "none",
                    border: ".5px solid var(--blackShade2)",
                    borderRadius: "5px",
                    padding: "10px",
                    margin: "10px",
                    required: "true",

                    "&:focus": {
                      border: ".5px solid blue",
                    },
                  }}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue=""
                  onFocus={(e) => {
                    e.target.style.border = ".5px solid green";
                    e.target.style.outline = "none";
                  }}
                />

                <Box
                  sx={{
                    padding: "10px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "lightgray",
                  }}
                >
                  <Box>
                    <SentimentSatisfiedIcon />
                    <SentimentSatisfiedIcon />
                    <SentimentSatisfiedIcon />
                    <SentimentSatisfiedIcon />
                  </Box>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      marginTop: "5px",
                    }}
                    onClick={handleSendSatatus}
                  >
                    Send
                  </Button>
                </Box>
              </Box>
            )}
          </Popover>
        </div>

        <NotificationsNoneIcon />

        <Avatar alt="Remy Sharp" src="" className="w-24 h-8 w-8" />
      </div>
    </div>
  );
};

export default Navbar;
