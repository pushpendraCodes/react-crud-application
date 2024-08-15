import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CiSquareRemove } from "react-icons/ci";

const UserModal = ({
  handleOverlayClick,
  selectedUser,
  handelSibmit,
  setOpen,
  data,
  setData,
  users,
}) => {
  const [currentUser, setUser] = useState(Object);

  useEffect(() => {
    if (selectedUser?.type == "view" ) {
      setUser(users?.filter((item) => item.id == selectedUser.userId)[0]);
    }
    if (selectedUser?.type == "update" ) {
      let user = users?.filter((item) => item.id == selectedUser.userId)[0];
      setData(user)
    }
  }, []);

  console.log(currentUser, "currentUser");

  const handelChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>

      <div
        className=" bg-gray-900 fixed inset-0  flex items-center justify-center bg-opacity-50"
        onClick={handleOverlayClick}>
        <form
          onSubmit={handelSibmit}
          className="modal z-50 shadow-lg rounded-md p-5 gap-2 flex flex-col justify-center bg-gray-100 w-[25rem] h-auto relative">
          <span
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 text-xl cursor-pointer">
            <CiSquareRemove
              color="red"
              size={25}
            />
          </span>
          {selectedUser?.type == "add" && (
            <h2 className="text-center underline">Add user </h2>
          )}
          {selectedUser?.type == "update" && (
            <h2 className="text-center underline">User Update</h2>
          )}
          {selectedUser?.type == "view" && (
            <h2 className="text-center underline">User Details</h2>
          )}

          <div className="feilds">
            <p className="my-2 mx-1">Name</p>
            <input
              disabled={selectedUser?.type == "view"}
              value={
                (selectedUser?.type == "view" && currentUser?.name) || data.name
              }
              required
              onChange={handelChange}
              placeholder="userName"
              name="name"
              className="w-full px-3 h-10 focus:outline-none border rounded-md border-gray-200"
              type="text"
            />
          </div>
          <div className="feilds">
            <p className="my-2 mx-1">Age</p>
            <input
              disabled={selectedUser?.type == "view"}
             value={
                (selectedUser?.type == "view" && currentUser?.age) || data.age
              }
              required
              onChange={handelChange}
              name="age"
              placeholder="age"
              className="w-full px-3 h-10 focus:outline-none border rounded-md border-gray-200"
              type="text"
            />
          </div>
          <div className="feilds">
            <p className="my-2 mx-1">Occupation</p>
            <input
                 value={
                (selectedUser?.type == "view" && currentUser?.Occupation) || data.Occupation
              }
              disabled={selectedUser?.type == "view"}
              required
              onChange={handelChange}
              name="Occupation"
              placeholder="Occupation"
              className="w-full px-3 h-10 focus:outline-none border rounded-md border-gray-200"
              type="text"
            />
          </div>
          <div className="feilds">
            <p className="my-2 mx-1">location</p>
            <input
               value={
                (selectedUser?.type == "view" && currentUser?.location) || data.location
              }
              disabled={selectedUser?.type == "view"}
              onChange={handelChange}
              name="location"
              placeholder="location"
              className="w-full px-3 h-10 focus:outline-none border rounded-md border-gray-200"
              type="text"
            />
          </div>
          {selectedUser?.type !== "view" && (
            <div className="btn mx-auto mt-5">
              <button
                type="submit"
                className="px-8 w-full text-white py-1 rounded-lg bg-teal-800">
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserModal;
