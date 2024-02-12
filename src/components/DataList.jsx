import React, { useState } from "react";

import { Box, Pagination, Stack } from "@mui/material";
import ProdCardFlat from "./ProdCardFlat";

const DataList = ({ data, loading }) => {
  const [pageCount] = useState(data.length / 10);
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
          <div className="grid gap-5">
            {data.slice((page - 1) * 10, page * 10).map((item, index) => (
              <ProdCardFlat data={item} key={index} />
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

export default DataList;
