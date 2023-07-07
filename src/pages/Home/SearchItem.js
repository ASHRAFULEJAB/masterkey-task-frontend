import React, { useEffect, useState } from "react";
import SearchItemDetails from "./SearchItemDetails";

const SearchItem = () => {
  const [searchProduct, setSearchProduct] = useState([]);
  // console.log(hotProduct);
  useEffect(() => {
    fetch(
      "https://api.hiring.masterkey.tech/api/v1/products?product_type=Your%20searched%20items"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.products[0].productData);
        setSearchProduct(data.products[0].productData);
      }, []);
  }, []);
  return (
    <>
      {" "}
      <div className="  lg:mx-20   lg:ml-0 ml-6 justify-center items-center mt-6">
        <div className="  h-30 w-full lg:ml-16">
          <h1 className="font-bold text-xl mb-5">Your searched items</h1>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-4">
            {searchProduct.map((product) => (
              <SearchItemDetails
                key={product._id}
                product={product}
              ></SearchItemDetails>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
