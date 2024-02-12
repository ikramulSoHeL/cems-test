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
        <div className="w-full h-50vh flex justify-center items-center">
          Loading...
        </div>
      ) : (
        <div className="flex-grow w-full px-6 py-4 lg:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.slice((page - 1) * 10, page * 10).map((item, index) => (
              <ProdCard data={item} key={index} />
            ))}
          </div>

          <div className="flex justify-center items-center mt-4 md:mt-8">
            <Pagination count={pageCount} page={page} onChange={handleChange} />
          </div>
        </div>
      )}
    </>
  );
};

export default DataGrid;
