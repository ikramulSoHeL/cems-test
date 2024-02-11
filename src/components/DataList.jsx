import React, { useState } from "react";

import { Box, Pagination, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProdCardFlat from "./ProdCardFlat";

const DataList = ({ data }) => {
  const [pageCount] = useState(data.length / 10);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box>
      <Grid
        container
        px={20}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {data.slice((page - 1) * 10, page * 10).map((item, index) => {
          return <ProdCardFlat data={item} />;
        })}
      </Grid>

      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ margin: "40px" }}
      >
        <Pagination count={pageCount} page={page} onChange={handleChange} />
      </Stack>
    </Box>
  );
};

export default DataList;
