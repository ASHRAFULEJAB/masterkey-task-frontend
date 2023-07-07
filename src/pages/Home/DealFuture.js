import React, { useEffect, useState } from "react";
import DealFutreDetails from "./DealFutreDetails";

const DealFuture = () => {
  const [dealProduct, setDealProduct] = useState([]);
  // console.log(hotProduct);
  useEffect(() => {
    fetch(
      "https://api.hiring.masterkey.tech/api/v1/products?product_type=Deals%20on%20furniture"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.products[0].productData);
        setDealProduct(data.products[0].productData);
      }, []);
  }, []);
  return (
    <>
      {" "}
      <div className="  lg:mx-20   lg:ml-0 ml-6 justify-center items-center mt-6">
        <div className="  h-30 w-full lg:ml-16">
          <h1 className="font-bold text-xl mb-5">Deals on furniture</h1>
          <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
            {dealProduct.map((product) => (
              <DealFutreDetails
                key={product._id}
                product={product}
              ></DealFutreDetails>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DealFuture;
