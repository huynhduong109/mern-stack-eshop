// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import styles from "../../../styles/styles";
// import ProductCard from "../ProductCard/ProductCard";

// const FeaturedProduct = () => {
//   const {allProducts} = useSelector((state) => state.products);
   
//   return (
//     <div>
//       <div className={`${styles.section}`}>
//         <div className={`${styles.heading}`}>
//           <h1>Featured Products</h1>
//         </div>
//         <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
//         {
//             allProducts && allProducts.length !== 0 &&(
//               <>
//                {allProducts && allProducts.map((i, index) => <ProductCard data={i} key={index} />)}
//               </>
//             )
//            }
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProduct;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  const [hightShow, setHightShow] = useState(false);
  const [equaltShow, setEqualtShow] = useState(false);
  const [belowtShow, setBelowtShow] = useState(false);
  const { allProducts } = useSelector((state) => state.products);

  const handleShowHigh = () => {
    setHightShow(true);
    setBelowtShow(false);
    setEqualtShow(false);
  };
  const handleShowEqual = () => {
    setEqualtShow(true);
    setHightShow(false);
    setBelowtShow(false);
  };
  const handleShowBelow = () => {
    setBelowtShow(true);
    setEqualtShow(false);
    setHightShow(false);
  };
  console.log(allProducts);
  return (
    <div>
      <div className={`${styles.section}`}>
        <div
          style={{
            display: "flex",
            background: "#ccc",
            display: "flex",
            background: "rgb(204, 204, 204)",
            justifyContent: "space-between",
            borderRadius: "10px",
            alignItems: "center",
            padding: "10px",
          }}>
          <div className={`${styles.heading}`}>
            <h1> Tìm kiếm nhanh</h1>
          </div>
          <div
            style={{
              fontƯeight: "300",
              padding: "0 0 10px 10px",
              border: "1px solid #3F51B5",
              borderRadius: "14px",
              background: "linear-gradient(to right, #2e0080, #3bffba)",
            }}>
            <h1
              style={{
                justifContent: "center",
                display: "flex",
                fontSize: "24px",
                marginBottom: "8px",
                color: "white",
              }}>
              Tìm theo giá
            </h1>
            <div>
              <button
                style={{
                  background: "#3d4da4",
                  width: "105px",
                  height: "30px",
                  color: "white",
                  marginRight: "10px",
                  fontSize: "19px",
                  borderRadius: "4px",
                }}
                onClick={handleShowHigh}>
                Trên 50
              </button>
              <button
                style={{
                  background: "#3d4da4",
                  width: "105px",
                  height: "30px",
                  color: "white",
                  marginRight: "10px",
                  fontSize: "19px",
                  borderRadius: "4px",
                }}
                onClick={handleShowEqual}>
                Bằng 50
              </button>
              <button
                style={{
                  background: "#3d4da4",
                  width: "105px",
                  height: "30px",
                  color: "white",
                  marginRight: "10px",
                  fontSize: "19px",
                  borderRadius: "4px",
                }}
                onClick={handleShowBelow}>
                Dưới 50
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {hightShow && (
            <>
              {allProducts
                .filter((product) => product.discountPrice > 50)
                .map((product, index) => (
                  <ProductCard data={product} key={index} />
                ))}
            </>
          )}
          {equaltShow && (
            <>
              {allProducts
                .filter((product) => product.discountPrice === 50)
                .map((product, index) => (
                  <ProductCard data={product} key={index} />
                ))}
            </>
          )}
          {belowtShow && (
            <>
              {allProducts
                .filter((product) => product.discountPrice < 50)
                .map((product, index) => (
                  <ProductCard data={product} key={index} />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;