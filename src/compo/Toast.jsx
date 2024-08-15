import React from "react";

const Toast = ({ msg,settoast }) => {
  return (
    <div className="px-4 w-[20rem]  h-[3rem] absolute left-[40%] z-20 top-[85%] border border-gray-200 bg-black ">
      <div className="flex justify-between w-full h-full items-center ">
        <span className="text-white  text-md ">
          {msg}
        </span>
        <p
          onClick={() => settoast(false)}
          className=" text-white   cursor-pointer text-lg">
          x
        </p>
      </div>
    </div>
  );
};

export default Toast;
