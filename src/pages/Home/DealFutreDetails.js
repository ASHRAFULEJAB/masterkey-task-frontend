import React from "react";

const DealFutreDetails = ({ product }) => {
  const { product_discount, product_img, product_name, product_price } =
    product;
  return (
    <>
      <div class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg ">
        <img
          class="object-cover object-center w-full h-56"
          src={product_img}
          alt="avatar"
        />

        <div class="flex items-center px-6 py-3 "></div>

        <div class="px-6 py-4">
          <h1 class="text-xl font-semibold text-gray-800 ">{product_name}</h1>

          <div className="flex justify-between  items-center">
            {" "}
            <p class="py-2 text-gray-700 ">{product_price}</p>
            <p class="py-2 text-red-600 ">-{product_discount}% off</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealFutreDetails;
