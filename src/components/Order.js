import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function Order({ productListData, setProductListData }) {
  
  const sortProducts = (e) => {
    const sorted = e.target.value;
    const newProductListData = [...productListData];
    newProductListData.sort((a, b) =>
      sorted === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : sorted === "highest"
        ? a.price < b.price
          ? 1
          : -1
        : a.id < b.id
        ? 1
        : -1
    );
    setProductListData(newProductListData);
  };

  return (
    <div>
      {/* <div className='counter'>{count}</div> */}
      <div className="order">
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Order</InputLabel>
        <Select label="Order" onChange={sortProducts}>
          <MenuItem value="lowest">lowest</MenuItem>
          <MenuItem value="highest">highest</MenuItem>
        </Select>
        </FormControl>
    </Box>
   
      </div>
    </div>
  );
}

export default Order;
