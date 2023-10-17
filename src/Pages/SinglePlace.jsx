import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { EditItem, fetchSinglePlaces } from "../Store/SinglePlaceSlice";

const SinglePlace = () => {
  const navigate = useNavigate();
  const id = useParams();

  const dispatch = useDispatch();

  const [updateData, setUpdateData] = useState({});

  const { singlePlace, status } = useSelector((state) => state.singleplace);

  useEffect(() => {
    dispatch(fetchSinglePlaces(id));
    setUpdateData(singlePlace);
  }, []);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(EditItem(updateData));
    navigate("/destinations");
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-2 mt-[3.5rem] border border-[#181818] mx-[42rem] rounded-xl bg-[#363636] text-white">
        <h1 className="text-[2rem] font-extrabold">Edit Places</h1>
        <form className="flex flex-col w-[30rem]">
          <label className="text-[1.2rem] mt-[.3rem]">Name: </label>
          <input
            required
            className="p-2 text-[1rem] rounded-md  border border-[#181818] text-black"
            type="text"
            name="name"
            value={updateData && updateData.name}
            placeholder="name"
            onChange={newData}
          />
          <label className="text-[1.2rem] mt-[.3rem]">Category: </label>
          <input
            required
            className="p-2 text-[1rem] rounded-md text-black"
            type="text"
            name="category"
            value={updateData && updateData.category}
            placeholder="category"
            onChange={newData}
          />
          <label className="text-[1.2rem] mt-[.3rem]">Price: </label>
          <input
            required
            className="p-2 text-[1rem] rounded-md text-black"
            type="text"
            name="price"
            value={updateData && updateData.price}
            placeholder="price"
            onChange={newData}
          />
          <label className="text-[1.2rem] mt-[.3rem]">Rating: </label>
          <input
            required
            className="p-2 text-[1rem] rounded-md text-black"
            type="text"
            name="rating"
            value={updateData && updateData.rating}
            onChange={newData}
          />
          <label className="text-[1.2rem] mt-[.3rem]">Description: </label>
          <textarea
            required
            className="p-2 text-[1rem] rounded-md text-black"
            type="text"
            name="description"
            value={updateData && updateData.description}
            placeholder="description"
            onChange={newData}
          />
          <label className="text-[1.2rem] mt-[.3rem]">Image: </label>
          <input
            required
            className="p-2 text-[1rem] rounded-md text-black"
            type="text"
            name="image"
            value={updateData && updateData.image}
            placeholder="Enter URL"
            onChange={newData}
          />
          <input
            className="text-[1rem] mt-[.5rem] text-white"
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={newData}
          />
          <div className="flex justify-center items-center mt-[.6rem] ">
            <button
              className="bg-[#ffe710] w-max text-[1.2rem] font-bold p-1 px-4 rounded-lg text-white mb-[.5rem]"
              onClick={handleSubmit}
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SinglePlace;
