import React, { useState } from "react";
import reactLogo from "../assets/react.svg";
import { BsPersonBadge, BsSearch } from "react-icons/bs";
import { CiSquareRemove } from "react-icons/ci";
import UserModal from "./UserModal";
import { useEffect } from "react";

const Navbar = ({
  setUsers,
  selectedUser,
  handelChange,
  setselectedUser,
  users,
  isOpen,
  setOpen,
  data,
  setData,
  handelSibmit,
  handleOverlayClick,
}) => {
  const [searchText, setText] = useState(String);
  const [originalUsers, setOriginalUsers] = useState();

  useEffect(() => {
    setOriginalUsers(users);
  }, []);
  console.log(selectedUser, "selected user");

  useEffect(() => {
    if (searchText.length > 0) {
      const results = searchByName(searchText, originalUsers);
      setUsers(results);
    } else {
      setUsers(originalUsers);
    }
  }, [searchText,originalUsers]);

  function searchByName(name, data) {
    return data.filter((item) => {
      // Adjust this to your specific data structure
      const itemName = item.name.toLowerCase();
      const itemage = item.age.toString();
      const itemOccupation = item.Occupation.toLowerCase();
      const itemlocation = item.location.toLowerCase();
      return itemName.includes(name.toLowerCase())||itemage.includes(name.toString())||itemOccupation.includes(name.toLowerCase())||itemlocation.includes(name.toLowerCase());
    });
  }

  return (
    <>
      <div className="flex min-w-full px-5 py-2 gap-3 my-4">
        <div className="w-1/2 flex">
          <div className="logo px-3 mr-5">
            <img
              src={reactLogo}
              alt=""
            />
          </div>
          <div>
            <ul className="flex justify-between gap-8 font-normal text-center">
              <li className="cursor-pointer hover:underline underline-offset-4   ">Home</li>
              <li className="cursor-pointer  hover:underline underline-offset-4   ">About us</li>
              <li
                className="cursor-pointer  hover:underline underline-offset-4   "
                onClick={() => {
                  setOpen(true);
                  setselectedUser({
                    userId: "",
                    type: "add",
                  });
                }}>
                Add User
              </li>
              <li className="cursor-pointer  hover:underline underline-offset-4   ">Contact us</li>
              <li className="cursor-pointer  hover:underline underline-offset-4 hover:text-gray-900  ">Services</li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex justify-end items-center">
          <div className="relative">
            <input
              onChange={(e) => setText(e.target.value)}
              className="placeholder px-10 border py-1 w-[21rem] border-gray-300 focus:outline-none"
              type="text"
              placeholder="search for products brands & more"
            />
            <span className="absolute left-2 top-2">
              <BsSearch />
            </span>
          </div>
        </div>
      </div>

      {/* //modal to add user */}
      {isOpen && selectedUser?.type == "add" && (
        <UserModal
          handleOverlayClick={handleOverlayClick}
          handelSibmit={handelSibmit}
          setOpen={setOpen}
          data={data}
          handelChange={handelChange}
          setData={setData}
        />
      )}
    </>
  );
};

export default Navbar;
