import { Avatar, Box, Stack, Tab, Tabs, TextareaAutosize } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import logo from "../assets/logo.svg";
import Image from "next/image";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
const Navbar = () => {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

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
  return (
    <Stack
      direction={"row"}
      justifyContent="space-between"
      alignItems="center"
      sx={{ borderBottom: "1px solid gray", paddingX: "30px" }}
    >
      <Stack
        direction={"row"}
        justifyContent="left"
        alignItems="center"
        spacing={2}
      >
        <Image src={logo} sx={{ width: "60px", height: "auto" }} alt="" />
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Item One" sx={{ textTransform: "capitalize" }} />
          <Tab label="Item Two" sx={{ textTransform: "capitalize" }} />
          <Tab label="Item Three" sx={{ textTransform: "capitalize" }} />
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
            Open Popover
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
            <Box sx={{ p: 2, width: "250px" }}>
              <TextareaAutosize
                minRows={3}
                maxRows={3}
                style={{ width: "100%" }}
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                defaultValue=""
              />
            </Box>
          </Popover>
        </div>
        <NotificationsNoneIcon />
        <Avatar alt="Remy Sharp" src="" sx={{ width: 24, height: 24 }} />
      </Stack>
    </Stack>
  );
};

export default Navbar;
