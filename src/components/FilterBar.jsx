import React, { useState } from "react";

import { GridView, ViewList } from "@mui/icons-material";
import { Stack } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FilterBar = ({
  layout,
  setLayout,
  sortByName,
  setSortByName,
  sortByPrice,
  setSortByPrice,
}) => {
  const handleGrid = ({ s }) => {
    setLayout(s === "grid" ? "list" : "grid");
  };

  const handleSortByName = (event) => {
    setSortByName(event.target.value);
  };

  const handleSortByPrice = (event) => {
    setSortByPrice(event.target.value);
  };

  return (
    <Stack
      direction={"row"}
      justifyContent="space-between"
      alignItems="center"
      sx={{
        marginX: 20,
        marginY: 5,
        border: "1px solid gray",
        borderRadius: "5px",
        padding: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent="left"
        alignItems="center"
        sx={{}}
        spacing={2}
      >
        {layout === "grid" ? (
          <GridView
            style={{
              fontSize: "20pt",
              cursor: "pointer",
              color: "black",
            }}
            onClick={() => handleGrid({ s: layout })}
          />
        ) : (
          <ViewList
            style={{ fontSize: "20pt", cursor: "pointer" }}
            onClick={() => handleGrid({ s: layout })}
          />
        )}
      </Stack>

      <Stack
        direction={"row"}
        justifyContent="right"
        alignItems="center"
        sx={{}}
      >
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={sortByName}
            onChange={handleSortByName}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Sort by name</em>
            </MenuItem>
            <MenuItem value={"asc"}>Ascending</MenuItem>
            <MenuItem value={"desc"}>Descending</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={sortByPrice}
            onChange={handleSortByPrice}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Sort by price</em>
            </MenuItem>
            <MenuItem value={"ascP"}>Ascending</MenuItem>
            <MenuItem value={"descP"}>Descending</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
};

export default FilterBar;
