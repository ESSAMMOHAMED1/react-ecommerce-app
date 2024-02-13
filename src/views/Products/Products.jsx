import React from "react";
import "./Products.css";
import { Star, ShoppingBag } from "feather-icons-react";
const Products = () => {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="Sho"
          />
          <div className="card-details">
            <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
              <Star /> <Star /> <Star /> <Star />
              <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>300$</del> 200
              </div>
              <div className="bag">
                <ShoppingBag />
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
};

export default Products;
