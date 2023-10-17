import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createItem } from "../Store/PlacesSlice";
import { useNavigate } from "react-router";
import { RxCross2 } from "react-icons/rx";
const Create = ({ popUp, setPopUp }) => {
  const dispatch = useDispatch();

  const [newProductData, setNewProductData] = useState({});
  const navigate = useNavigate();

  const onChange = (e) => {
    setNewProductData({ ...newProductData, [e.target.name]: e.target.value });
    console.log(newProductData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createItem(newProductData));
    navigate("/destinations");
  };

  const handleClick = () => {
    popUp = false;
  };

  return (
    <div className="fixed top-0 left-0 bg-[#000000cc] backdrop-blur-md w-full h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center p-2 mt-[3.5rem] border border-[#181818] mx-[42rem] rounded-xl bg-[#141414] text-white  py-[1rem]">
        <div className="flex justify-center space-x-[14rem] mb-[1rem]">
          <h1 className="text-[2rem] font-extrabold">Add More...</h1>
          <RxCross2 className=" text-[1.5rem] hover:text-[#ff4949cc] duration-100 hover:scale-125" onClick={() => setPopUp(false)} />
        </div>
        <form className="flex flex-col w-[30rem] px-[1rem]">
          <label className="text-[1.2rem] mt-[.3rem]">Name: </label>
          <input
            required
            className="p-2 text-[1rem] rounded-md  border border-[#181818] text-black"
            type="text"
            name="name"
            placeholder="name"
            onChange={onChange}
          />
          <label className="text-[1.2rem] mt-[.3rem]">Category: </label>
          <input
            required
            className="p-2 text-[1rem] rounded-md text-black"
            type="text"
            name="category"
            placeholder="category"
            onChange={onChange}
          />
          <label className="text-[1.2rem] mt-[.3rem]">Price: </label>
          <input
            required
            className="p-2 text-[1rem] rounded-md text-black"
            type="text"
            name="price"
            placeholder="price"
            onChange={onChange}
          />
          <label className="text-[1.2rem] mt-[.3rem]">Rating: </label>
          <input
            required
            className="p-2 text-[1rem] rounded-md text-black"
            type="text"
            name="rating"
            onChange={onChange}
          />
          <label className="text-[1.2rem] mt-[.3rem]">Description: </label>
          <textarea
            required
            className="p-2 text-[1rem] rounded-md text-black"
            type="text"
            name="description"
            placeholder="description"
            onChange={onChange}
          />
          <label className="text-[1.2rem] mt-[.3rem]">Image: </label>
          <input
            required
            className="p-2 text-[1rem] rounded-md text-black"
            type="text"
            name="image"
            placeholder="Enter URL"
            onChange={onChange}
          />
          <input
            className="text-[1rem] mt-[.5rem] text-white"
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={onChange}
          />
          <div className="flex justify-center items-center mt-[.6rem] ">
            <button
              className="bg-[#ffc421] w-max text-[1.2rem] font-bold p-1 px-4 rounded-lg text-white mb-[.5rem]"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
