import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BagCounterActions, BagItemsActions } from "../store";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const ItemData = useSelector((store) => store.ItemData);

  const dispatch = useDispatch();

  // here i am fecthnig data from local backend.
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(BagItemsActions.initialItems(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, []);

  const HandleonAddToCart = (value) => {
    console.log(value);
    dispatch(BagCounterActions.increment(value));
  };
  return (
    <>
      <div className="HeroSection">
        {ItemData.map((item) => (
          <div className="item-container">
            <img
              className="item-image"
              src={`${item.image}`}
              alt="item image"
            />
            <div className="rating"> {item.rating.stars} ⭐ </div>
            <div className="company-name"> {item.company} </div>
            <div className="item-name"> {item.item_name} </div>
            <div className="price">
              <span className="current-price">Rs {item.current_price} </span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount"> {item.discount_percentage} % </span>
            </div>

            <button
              className="btn-add-bag"
              onClick={() => HandleonAddToCart(item.id)}
            >
              Add to Bag
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default HeroSection;
