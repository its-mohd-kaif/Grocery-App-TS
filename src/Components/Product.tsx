import React, { useContext } from "react";
import { noteContext } from "../App";
import { products } from "../Data/product";
function Product() {
  // UseContext
  let user: any = useContext(noteContext);
  // Add To Cart Handler
  const addToCart = (e: any) => {
    let productId = e.target.value;
    alert("Product Added Successfully");
    for (let i = 0; i < products.length; i++) {
      if (products[i]._id === productId) {
        for (let k = 0; k < user.data.length; k++) {
          if (user.data[k]._id === productId) {
            user.data[k].quantity++;
            user.setData([...user.data]);
            return;
          }
        }
        user.data.push(products[i]);
        user.setData([...user.data]);
      }
    }
  };
  return (
    <div className="d-flex justify-content-around flex-wrap">
      {products.map((val, index) => (
        <div
          key={index}
          className="card m-2"
          style={{ width: "18rem", height: "auto" }}
        >
          <div>
            <img
              style={{ height: "300px" }}
              src={val.images}
              className="card-img-top w-100"
              alt="..."
            />
            <div className="card-body">
              <h5 style={{ height: "5em" }} className="card-title">
                {val.title}
              </h5>
              <p className="card-text">₹ {val.price}</p>
              <div className="d-grid gap-2 col-12">
                <button
                  value={val._id}
                  onClick={addToCart}
                  className="btn btn-success"
                  type="button"
                >
                  <i className="fas fa-shopping-cart"></i> ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
