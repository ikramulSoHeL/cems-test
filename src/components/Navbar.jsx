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
    <Stack
      direction={"row"}
      justifyContent="space-between"
      alignItems="center"
      sx={{
        borderBottom: "1px solid var(--blackShade2)",
        paddingX: { xs: "10px", md: "50px" },
        paddingY: { xs: "10px", md: "0" },
      }}
    >
      <Stack
        direction={"row"}
        justifyContent="left"
        alignItems="center"
        spacing={2}
      >
        <Image src={logo} sx={{ width: "60px", height: "auto" }} alt="" />
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Tab
            label="Dashboard"
            sx={{ textTransform: "capitalize", color: "var(--blackShade1)" }}
          />
          <Tab
            label="Team"
            sx={{ textTransform: "capitalize", color: "var(--blackShade1)" }}
          />
          <Tab
            label="Projects"
            sx={{ textTransform: "capitalize", color: "var(--blackShade1)" }}
          />
          <Tab
            label="Calender"
            sx={{ textTransform: "capitalize", color: "var(--blackShade1)" }}
          />
        </Tabs>
      </Stack>

      <Stack
        direction={"row"}
        justifyContent="right"
        alignItems="center"
        spacing={2}
      >
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

        <Avatar alt="Remy Sharp" src="" sx={{ width: 24, height: 24 }} />
      </Stack>
    </Stack>
  );
};

export default Navbar;
