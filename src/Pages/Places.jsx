import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATUS, fetchPlaces } from "../Store/PlacesSlice";
import { BsHeart } from "react-icons/bs";
import Star from "../Components/Star";

const Places = () => {
  const dispatch = useDispatch();
  const { data: places, status } = useSelector((state) => state.places);

  const [heart, setHeart] = useState(false);

  useEffect(() => {
    dispatch(fetchPlaces());
  }, []);

  if (status === STATUS.LOADING) {
    return <h1>Loading...</h1>;
  }

  if (status === STATUS.ERROR) {
    return <h1>Something went wrong</h1>;
  }

  const uniqueCategories = ['all', ...new Set(places.map((item) => item.category))];

  return (
    <div className="mx-[5rem]">
      <div className="mt-[3.5rem] text-center text-[#181818] flex items-center justify-center space-x-4 mb-[2rem]">
      {uniqueCategories.map(category => (
          <p className="first-letter:capitalize font-pacifico text-white bg-[#181818] p-1 rounded-md hover:cursor-pointer" key={category}>{category}</p>
        ))}
      </div>

      <div className="grid grid-cols-4">
        {places.map((iter) => (
          <div
            className="relative shadow-sm shadow-[#252525] p-2 my-4 w-[25rem] hover:cursor-pointer"
            key={iter.id}
          >
            <BsHeart className="absolute ml-[22rem] mt-[.7rem] text-[#ee2929] text-[1.5rem] duration-100 transition-colors" />

            <img className="w-[25rem] h-[20rem]" src={iter.image} alt="" />
            <h1 className="first-letter:capitalize absolute mt-[-19.3rem] ml-[.6rem] px-2 text-[#ffffff] bg-[#ffc421] opacity-90 text-[1.1rem] font-bold p-1 rounded-lg">
              {iter.name}
            </h1>
            <div className="flex justify-between">
              <h1 className="first-letter:capitalize text-[1.1rem] font-bold">
                {iter.category}
              </h1>
              <h1 className="mr-[.5rem] mt-[.2rem]">
                <Star stars={iter.rating} />
              </h1>
            </div>
            <h1>{iter.description}</h1>
            <h1 className="font-bold"> ${iter.price}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Places;
// http://localhost:8000/places/1
