import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HotDealsDetail from "./HotDealsDetail";

const HotDeals = () => {
  const [hotProduct, setHotProduct] = useState([]);
  console.log(hotProduct);
  useEffect(() => {
    fetch(
      "https://api.hiring.masterkey.tech/api/v1/products?product_type=hot%20deals%20for%20you"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.products[0].productData);
        setHotProduct(data.products[0].productData);
      }, []);
  }, []);
  return (
    <>
      <div className="lg:flex  lg:mx-20   lg:ml-0 ml-6 justify-center items-center">
        <div className="text-[#0e0d0d] mt-6 lg:ml-32">
          <h1 className="text-[48px] font-bold mt-3">
            We picked <span className="text-[#FFAE5D]">cool things</span>
            some for you!
          </h1>
        </div>
        <div className="  h-30 w-full lg:ml-16">
          <h1 className="font-bold text-xl mb-5">hot deals for you</h1>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            {hotProduct.map((product) => (
              <HotDealsDetail
                key={product._id}
                product={product}
              ></HotDealsDetail>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HotDeals;
