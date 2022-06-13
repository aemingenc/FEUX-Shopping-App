import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Drawer } from "@mui/material";
import { clearBox, updateBox } from "../redux/actions/boxActions";

const Basket = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.box);

  const [open, setOpen] = useState(false);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      dispatch(
        updateBox(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        )
      );
    } else {
      dispatch(updateBox([...cartItems, { ...product, qty: 1 }]));
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist.qty === 1) {
      dispatch(updateBox(cartItems.filter((x) => x.id !== product.id)));
    } else {
      dispatch(
        updateBox(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        )
      );
    }
  };

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const pricesSection = [
    { name: "Items price", value: itemsPrice },
    { name: "Tax price", value: taxPrice },
    { name: "Shipping price", value: shippingPrice },
  ];

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
        {cartItems.map((item) => (
          <div key={item.title} className="row">
            <img
              src={item.image}
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
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
            {pricesSection.map((price, index) => (
              <div key={index} className="row">
                <div className="col-2">{price.name}</div>
                <div className="col-1 text-right">
                  ${price.value.toFixed(2)}
                </div>
              </div>
            ))}
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
              <button onClick={() => dispatch(clearBox())}>Clear Basket</button>
            </div>
          </>
        )}
      </Drawer>
    </aside>
  );
};

export default Basket;
