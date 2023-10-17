import React from "react";
import { BsInstagram, BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="text-white mt-[14rem] bg-[#181818] flex flex-col items-center mb-[1rem]">
        <div className=" text-[1rem] lg:text-[1.4rem] bg-[#ffc421] flex w-[80%] justify-between text-black p-[2.2rem] rounded-[.5rem] mt-[-4.2rem]">
          <div>
            <p>Ready to get started?</p>
            <p>Talk to us today</p>
          </div>
          <button className="uppercase text-white px-4 bg-[#181818] hover:text-[#ffc421]  hover:border-[#181818] border-2  hover:bg-[#ffffff] text-[1.2rem]">get started</button>
        </div>
        <div className="text-[1rem] font-bold flex flex-col lg:flex-row gap-x-[5rem] mt-[1rem]">
          <div className="flex flex-col gap-[1rem] p-[2rem]">
            <h2 className="font-bold text-[1.3rem]">By Usman Manzoor</h2>
            <p className="font-normal">lorem ipsum eiusmod laboris dolore consectetur.</p>
          </div>
          <div className="p-[2rem] flex flex-col gap-[1rem]">
            <p className="font-normal">Subscribe to get important updates</p>
            <input
              className="p-[.5rem] rounded-[.5rem] text-black"
              type="email"
              placeholder="Your Email"
              name="email"
              autoComplete="off"
            />
            <button className="text-white px-4 bg-[#ffc421] hover:text-[#ffc421]  hover:border-[#ffc421] border-2  hover:bg-[#ffffff] p-2 rounded-md">Subsribe</button>
          </div>
          <div className="p-[2rem] flex flex-col gap-[1rem]">
            <p>Follow Us</p>
            <div className="flex gap-x-[1rem]">
              <BsYoutube className="text-[1.8rem] text-[#c93434]" />
              <BsInstagram className="text-[1.8rem] text-[#fff23e] " />
              <BsGithub className="text-[1.8rem] text-[#797979]"  />
              <BsLinkedin className="text-[1.8rem] text-[#5c95ff]" />
            </div>
          </div>
          <div className="p-[2rem] flex flex-col gap-[1rem]">
            {" "}
            <p>Call Us</p>
            <p>+92 336-9589172</p>
          </div>
        </div>
        <hr className=""></hr>
        <div className="flex text-[1rem] lg:gap-x-[20rem] items-center justify-center mb-[2rem]">
          <div className="flex w-[100%]">
             <p>© {new Date().getFullYear()} Usman Manzoor. All Rights Reserved{" "}</p>
          </div>
          <div className="flex gap-x-10 flex-wrap">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
