import React from "react";

function Order({ count, sortProducts }) {
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
