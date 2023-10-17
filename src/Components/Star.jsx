import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Star = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let num = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= num ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return <>
    <div className="text-[1rem] flex items-center text-[#ffc421] space-x-1">
        {
            ratingStar
        }
    </div>
  </>;
};

export default Star;
