import React, { useEffect, useState } from "react";
import TodayProductDetails from "./TodayProductDetails";

const TodaysHotDeals = () => {
  const [todayProduct, setTodayProduct] = useState([]);
  // console.log(hotProduct);
  useEffect(() => {
    fetch(
      "https://api.hiring.masterkey.tech/api/v1/products?product_type=Today%E2%80%99s%20hot%20deals"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.products[0].productData);
        setTodayProduct(data.products[0].productData);
      }, []);
  }, []);
  return (
    <>
      {" "}
      <div className="  lg:mx-20   lg:ml-0 ml-6 justify-center items-center mt-6">
        <div className="  h-30 w-full lg:ml-16">
          <h1 className="font-bold text-xl mb-5">Today’s hot deals</h1>
          <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
            {todayProduct.map((product) => (
              <TodayProductDetails
                key={product._id}
                product={product}
              ></TodayProductDetails>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodaysHotDeals;
