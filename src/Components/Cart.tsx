import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { noteContext } from "../App";
import "./Cart.css";

function Cart() {
  // UseConext For Common State
  let user: any = useContext(noteContext);
  // Price State
  const [price, setPrice] = useState(0);
  let navigate = useNavigate();
  useEffect(() => {
    // Price Update
    let tempPrice = 0;
    for (let i = 0; i < user.data.length; i++) {
      tempPrice += user.data[i].price * user.data[i].quantity;
    }
    setPrice(Math.ceil(tempPrice));
  }, [price]);
  // Delete Product Function
  const deleteHandler = (e: any) => {
    let tempVal = e;
    let tempPrice = 0;
    for (let i = 0; i < user.data.length; i++) {
      if (tempVal === user.data[i]._id) {
        let flag = window.confirm("Sure You Want To Remove Product !!!");
        if (flag === true) {
          tempPrice = price - user.data[i].price * user.data[i].quantity;
          setPrice(tempPrice);
          user.data.splice(i, 1);
        }
      }
    }
    user.setData([...user.data]);
  };
  // Increment Handler
  const increment = (val: any) => {
    let tempPrice = 0;
    for (let i = 0; i < user.data.length; i++) {
      if (val === user.data[i]._id) {
        user.data[i].quantity++;
        tempPrice = price + user.data[i].price * user.data[i].quantity;
        setPrice(tempPrice);
        user.setData([...user.data]);
      }
    }
  };
  // Decrement Handler
  const decrement = (val: any) => {
    let tempPrice = 0;
    for (let i = 0; i < user.data.length; i++) {
      if (val === user.data[i]._id) {
        if (user.data[i].quantity === 1) {
          let flag = window.confirm("Sure You Want To Remove Product !!!");
          if (flag === true) {
            tempPrice = price - user.data[i].price * user.data[i].quantity;
            setPrice(tempPrice);
            user.data.splice(i, 1);
            user.setData([...user.data]);
            break;
          }
        } else {
          tempPrice = price - user.data[i].price * user.data[i].quantity;
          setPrice(tempPrice);
          user.data[i].quantity--;
          user.setData([...user.data]);
        }
      }
    }
  };
  // Empty Cart Function
  const cartDelete = () => {
    let flag = window.confirm("Are You Sure ??");
    if (flag === true) {
      user.data.length = 0;
      setPrice(0);
      user.setData([...user.data]);
    }
  };
  // Continue Shop Button
  const continueHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <center>
        <div className="CartDiv">
          <div className="header"></div>
          <div className="tableDisplay">
            <div>
              <div className="rowTitle"></div>
              {/* Display Cart*/}
              <table>
                <thead>
                  <tr>
                    <th>ITEM IN YOUR CART</th>
                    <th>SPER UNIT PRICE</th>
                    <th>QUANTITY</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {user.data.map((ele: any, index: number) => (
                    <tr>
                      <td>{ele.title}</td>
                      <td>{ele.price}</td>
                      <td style={{ color: "green" }}>
                        <button
                          onClick={() => increment(ele._id)}
                          className="increBtn plus"
                        >
                          +
                        </button>
                        {ele.quantity}
                        <button
                          onClick={() => decrement(ele._id)}
                          className="increBtn minus"
                        >
                          -
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => deleteHandler(ele._id)}
                          className="deleteBtn"
                        >
                          <i
                            className="material-icons"
                            style={{ fontSize: "35px", color: "red" }}
                          >
                            delete
                          </i>
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td>
                      <button className="emptyBtn" onClick={cartDelete}>
                        <span>Empty Cart</span>
                      </button>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <button className="emptyBtn" onClick={continueHandler}>
                        Continue Shopping
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="cartPriceDiv">
              <div>
                <h2>Total Price : ₹{price}</h2>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Cart;
