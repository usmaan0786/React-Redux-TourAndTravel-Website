import React from "react";
import { Link } from "react-router-dom";
import { RiAccountBoxFill } from "react-icons/ri";
import { useSelector } from "react-redux";
const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div className="h-[5rem] flex justify-between bg-[#ffffff] mx-[5rem] mt-[.2rem] p-[2rem] items-center z-0 shadow-md shadow-black rounded-[1rem]">
      <Link to={"/"}>
        <img
          className="w-[10rem] absolute mt-[-3.3em] ml-[-1rem] z-20"
          style={{ mixBlendMode: "multiply" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYQXJV3QptcpPmcu1s0vfUCMojjZw-9M2uQ&usqp=CAU"
        />
      </Link>
      <ul className="flex font-bold text-[1.1rem] space-x-4 text-[#181818]">
        <li>
          <Link
            className="text-[1.1rem] hover:text-[1.2rem] ease-out duration-100"
            to={"/destinations"}
          >
            Destinations
          </Link>
        </li>
        <li>
          <Link
            className="text-[1.1rem] hover:text-[1.2rem] easy-out duration-100"
            to={"/about"}
          >
            About Us
          </Link>
        </li>
      </ul>
      <Link className="text-[1rem] flex justify-center items-center text-[#122166]" to={"/admin"}>
        <RiAccountBoxFill  className="text-[1.4rem]"/>
        Admin
      </Link>
    </div>
  );
};

export default Navbar;
