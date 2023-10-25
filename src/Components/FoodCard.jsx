import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({id,name,description,rating,img,price, handleToast}) => {
  const dispatch = useDispatch()
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex-col rounded-lg gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out overflow-hidden"
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500">₹ {price}</span>
      </div>
      <div>
        <p className="text-sm font-normal">{description.slice(0,50)}</p>
        <div className=" flex justify-between">
          <span className="flex justify-center items-center">
            <AiFillStar className=" mr-1 text-yellow-400"/> {rating}
          </span>
          <button 
          onClick={() => {
          dispatch(addToCart({ id,name, price, img, rating, qty: 1 }));
          handleToast(name);
        }}
           className="px-2 py-1 text-white bg-green-500 hover:bg-green-600 rounded-md text-sm">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
