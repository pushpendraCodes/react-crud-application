import React from "react";

const DeleteConfirmModal = ({
  setselectedUser,
  selectedUser,
  setUsers,
  users,
  setmsg,
  settoast,
  toastTimer,
}) => {
  return (
    <div className="px-3 py-3 bg-white bg-opacity-100 shadow-lg w-[20rem]">
      <p className="text-center my-2">Are You sure?</p>
      <div className="flex justify-between my-3">
        <button
          onClick={() => {
            setUsers(users.filter((item) => item.id !== selectedUser.userId));
            setselectedUser({
              userId: "",
              type: "",
            });

            setmsg("user successfully Deleetd!");
            settoast(true);
            toastTimer();
          }}
          className=" border hover:bg-slate-100 border-gray-500 px-5 py-1">
          Yes
        </button>
        <button
          onClick={() => {
            setselectedUser({
              userId: "",
              type: "",
            });
          }}
          className="border hover:bg-slate-100 border-gray-500 px-5 py-1">
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
