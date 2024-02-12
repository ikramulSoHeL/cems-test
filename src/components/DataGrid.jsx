import React, { use, useEffect, useState } from "react";

import { Box, Pagination, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProdCard from "./ProdCard";

const DataGrid = ({ data, loading }) => {
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    let pageCount = data.length / 10;
    setPageCount(pageCount);
  }, [data]);

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      {loading ? (
        <Box
          sx={{
            width: "100%",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading...
        </Box>
      ) : (
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            paddingX: { xs: "20px", md: "160px" },
          }}
        >
          <Grid
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "20px",
            }}
          >
            {data.slice((page - 1) * 10, page * 10).map((item, index) => {
              return (
                <Grid
                  item
                  xs={3}
                  key={index}
                  style={{
                    width: "100%",
                    border: "1px solid gray",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                    borderRadius: "5px",

                    "&:hover": {
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
                      transform: "scale(1.05)",
                      backgroundColor: "red",
                    },
                  }}
                >
                  <ProdCard data={item} />
                </Grid>
              );
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
      )}
    </>
  );
};

export default DataGrid;
