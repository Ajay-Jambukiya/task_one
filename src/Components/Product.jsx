import React, { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  let getAllProducts = async () => {
    try {
      let res = await fetch(
        "https://api-dev.wogom.com/v1/retailer/fresharrivals",
        {
          method: "POST",
          headers: {
            "x-userid": "7185",
            "x-random": "xyz",
            xyz: "754ad38082d761943b6c95670a38c6ca",
            "x-deviceinfo":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            retailerid: 349,
            categoryid: 0,
          }),
        }
      );
      let data = await res.json();
      console.log(data.data);
      setProducts(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container">
        <h2>All Products of GJ Technologies</h2>
        <div className="row">
          {products.map((val, index) => (
            <div className="col-md-4 col-sm-6 col-lg-3 col-12 mb-3">
              <div class="card" key={index}>
                <img class="card-img-top" src={val.productimg} alt="Title" />
                <div class="card-body">
                  <h4 class="card-title">{val.productname}</h4>
                  <p class="card-text">₹{val.mrp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
