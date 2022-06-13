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
        <select onChange={sortProducts}>
          <option value="lowest">lowest</option>
          <option value="highest">highest</option>
        </select>
      </div>
    </div>
  );
}

export default Order;
