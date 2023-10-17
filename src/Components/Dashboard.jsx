import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeletePlaces, STATUS, fetchPlaces } from "../Store/PlacesSlice";
import { Link } from "react-router-dom";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import { BsDatabaseAdd } from "react-icons/bs";
import Create from "./Create";

const Dashboard = () => {
  const [popUp, setPopUp] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaces());
  }, []);

  const { data: places, status } = useSelector((state) => state.places);

  if (status === STATUS.LOADING) {
    return <h1>Loading...</h1>;
  }

  if (status === STATUS.ERROR) {
    return <h1>Something went wrong</h1>;
  }

  const handleDelete = (id) => {
    dispatch(DeletePlaces(id));
  };

  return (
    <>
      {popUp ? <Create popUp={popUp} setPopUp={setPopUp} /> : " "}
      <div className="mt-[3rem] shadow-lg shadow-[#181818]">
        <div className="flex justify-center items-center p-2">
          <div className="flex justify-between w-[65rem] mx-[10rem] items-center">
            <h1 className="text-[2rem] font-extrabold text-center">
              Admin Section
            </h1>
            <button onClick={() => setPopUp(true)}>
              <BsDatabaseAdd className="bg-[#ffc421] text-black flex items-center justify-center p-1 text-[2.5rem] rounded-full"/>{" "}
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-[65rem] mx-[10rem] flex h-[5rem] items-center text-[1.3rem] font-normal p-4 ">
            <h1 className="w-[7rem]">Name</h1>
            <h1 className="w-[7rem]">Category</h1>
            <h1 className="w-[7rem]">Price</h1>
            <h1 className="w-[7rem]">Rating</h1>
            <h1 className="w-[20rem]">Description</h1>
            <h1>Image</h1>
          </div>
        </div>
        <div className="flex flex-col mx-[10rem] space-y-3 justify-center items-center p-4">
          {places.map((iter) => (
            <div
              className="w-[65rem] flex h-[10rem] items-center shadow-sm shadow-[#181818] p-4"
              key={iter.id}
            >
              <h1 className="w-[7rem] first-letter:capitalize">{iter.name}</h1>
              <h1 className="w-[7rem] first-letter:capitalize">
                {iter.category}
              </h1>
              <h1 className="w-[7rem]">{iter.price}</h1>
              <h1 className="w-[7rem]">{iter.rating}</h1>
              <h1 className="w-[20rem] first-letter:capitalize">
                {iter.description}
              </h1>
              <img className="w-[9rem]" src={iter.image} alt="" />
              <Link className="mx-[1rem]" to={`/singleplace/${iter.id}`}>
                <button className="bg-[#67ff0e] flex items-center justify-center p-1 text-[1.3rem] rounded-full">
                  <AiTwotoneEdit />
                </button>
              </Link>
              <button
                className="bg-[#ff0b0b] text-white flex items-center justify-center p-1 text-[1.3rem] rounded-full"
                onClick={() => handleDelete(iter.id)}
              >
                <AiTwotoneDelete />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
// http://localhost:8000/places/1
