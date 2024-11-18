import React, { useEffect, useState } from "react";
import style from "./products.module.css";
import img from "./imges/productCardimg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareNodes,
  faRoute,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import axios, { all } from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [filterdata, isFilterdata] = useState("");

  if(filterdata){

    useEffect(() => {
      axios
        .get(`https://fakestoreapi.com/products/category/${filterdata}`)
        .then((data) => setData(data.data))
        .catch((error) => console.log(error));
    }, [filterdata]);
  }else{
    useEffect(() => {
      axios
        .get(`https://fakestoreapi.com/products`)
        .then((data) => setData(data.data))
        .catch((error) => console.log(error));
    }, []);

  }




  
  // scrollda aside  buttonlarni  chiqarish uchun  gptdan olingan cod
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    // Y o'qi bo'ylab scrollni kuzatish
    const handleScroll = () => {
      setShowElement(window.scrollY >= 200); // 300px yoki undan katta scroll
    };

    // Scroll hodisasini qo'shish
    window.addEventListener("scroll", handleScroll);

    // Tozalash
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // scrollda chiqarish uchun  gptdan olingan cod

  // filter codi


  // useEffect(() => {
  //   if (filterdata === "men's clothing") {
  //     // const mensData = data.filter(
  //     //   (item) => item.category === "men's clothing"
  //     // );
  //     isFilterdata("men's clothing");
  //   } else if (filterdata === "women's clothing") {
  //     // const womensData = data.filter(
  //     //   (item) => item.category === "women's clothing"
  //     // );
  //     isFilterdata("women's clothing");
  //   } else if (filterdata === "electronics") {
  //     // const electronData = data.filter(
  //     //   (item) => item.category === "electronics"
  //     // );
  //     isFilterdata("electronics");
  //   }else if(filterdata === ""){
  //     setUpdateDate(data);
  //   }
  // }, [filterdata]);

  return (
    <div className="products">
      <div className="container">
        {showElement && (
          <div className={style.asideSort}>
            <button
              onClick={() => {
                isFilterdata("men's clothing");
              }}
            >
              Mens
            </button>
            <button
              onClick={() => {
                isFilterdata("women's clothing");
              }}
            >
              Womens
            </button>
            <button
              onClick={() => {
                isFilterdata("electronics");
              }}
            >
              Electrinoic
            </button>
            <button
              onClick={() => {
                isFilterdata("");
              }}
            >
              All
            </button>
          </div>
        )}

        <div className={style.productsContainer}>
          {data.map((item, idx) => (
            <div className={style.productCard}>
              <div className={style.hoverDiv}>
                <div className={style.hoverDivCenter}>
                  <button>Add to cart</button>
                  <div className={style.hoverDivBottom}>
                    <a href="">
                      <FontAwesomeIcon icon={faShareNodes} /> Share
                    </a>
                    <a href="">
                      <FontAwesomeIcon icon={faRoute} /> Compare
                    </a>
                    <a href="">
                      <FontAwesomeIcon icon={faHeart} /> Like
                    </a>
                  </div>
                </div>
              </div>

              <div className={style.cardTop}>
                <img src={item.image} alt="" />
              </div>
              <div className={style.cardBottom}>
                <h3>{item.title}</h3>
                <h4>{item.category}</h4>
                <div className={style.CardBottomBottom}>
                  <h5>${item.price}</h5>
                  <h6>Rp {item.rating.count}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
