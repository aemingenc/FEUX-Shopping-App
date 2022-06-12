import { Button, Drawer } from "@mui/material";
import React, { useState } from "react";

const Basket = ({ cartItems, onAdd, onRemove }) => {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  const [open, setOpen] = useState(false);

  return (
    <aside>
      <Button variant="contained" color="error" onClick={() => setOpen(true)}>
        MY BASKET{" "}
        <Button variant="contained" size="small" color="success">
          {cartItems.length}
        </Button>{" "}
      </Button>
      <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
        <h2>Card Items</h2>
        <div>{cartItems.length === 0} </div>
        {console.log(cartItems)}
        {cartItems.map((item) => (
          <div key={item.title} className="row">
            <img
              src={item.image}
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
            {console.log(item)}
            <div className="col-2">{item.title}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert("Implement Checkout!")}>
                Checkout
              </button>
            </div>
          </>
        )}
      </Drawer>
    </aside>
  );
};

export default Basket;
