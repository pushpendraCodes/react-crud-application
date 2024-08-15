import React from "react";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { MdDeleteSweep, MdEdit } from "react-icons/md";

const Todo = ({ user, setselectedUser, setOpen }) => {
  const handelDelete = (id) => {
    setselectedUser({
      userId: id,
      type: "delete",
    });
  };

  return (
    <>
      <tr
        key={user.id}
        onClick={() => {
          setselectedUser({
            userId: user.id,
            type: "view",
          });
          setOpen(true);
        }}
        class="hover-highlight hover:bg-white cursor-pointer">
        <td class="px-6 text-start py-4 whitespace-nowrap">{user.id}</td>
        <td class="px-6 text-start py-4 whitespace-nowrap">{user.name}</td>
        <td class="px-6 text-start py-4 whitespace-nowrap">{user.age}</td>
        <td class="px-6 text-start py-4 whitespace-nowrap">
          {user.Occupation}
        </td>
        <td class="px-6 text-start py-4 whitespace-nowrap">{user.location}</td>
        <td class="px-6 text-start py-4 whitespace-nowrap flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setselectedUser({
                userId: user.id,
                type: "update",
              });
              setOpen(true);
            }}
            title="edit"
            className="cursor-pointer border text-white bg-teal-600 text-sm hover:bg-teal-500  px-4 py-1">
          Edit
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handelDelete(user.id);
            }}
            title="delete"
            className="cursor-pointer border text-sm text-white hover:bg-rose-500 bg-rose-600  px-4 py-0">
           Delete
          </button>
          {/* <span

            title="view"
            className="cursor-pointer">
            <IoMdEye size={20} />
          </span> */}
        </td>
      </tr>
    </>
  );
};

export default Todo;
