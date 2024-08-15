import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteSweep, MdEdit } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import { IoMdEye } from "react-icons/io";
import Todo from "./Todo";
import DeleteConfirmModal from "./DeleteConfirmModal";
import UserModal from "./UserModal";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
const Todos = ({
  users,
  selectedUser,
  setselectedUser,
  setUsers,
  handleOverlayClick,
  setOpen,
  handelSibmit,
  data,
  isOpen,
  setData,
  setmsg,
  settoast,
  toastTimer
}) => {
  // pagination
  let limit = 5;
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(limit);


  return (
    <>
      <div class="container relative mx-auto my-10 ">
        <table class="min-w-full bg-gray-100 border border-fuchsia-200">
          <thead class="bg-gray-200">
            <tr>
              <th class="w-1/6 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Id
              </th>
              <th class="w-1/6 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th class="w-1/6 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age
              </th>
              <th class="w-1/6 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Occupation
              </th>
              <th class="w-1/6 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th class="w-1/6 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody class="divide-y w-full divide-fuchsia-200">
            {users?.length > 0 ? (
              users.slice(start, end).map((user, i) => {
                return (
                  <Todo
                    setUsers={setUsers}
                    selectedUser={selectedUser}
                    setselectedUser={setselectedUser}
                    users={users}
                    key={i}
                    user={user}
                    setOpen={setOpen}
                  />
                );
              })
            ) : (
              <div className="flex mx-auto justify-center my-5">
                <p className="text-center">No data found </p>
              </div>
            )}
          </tbody>
        </table>
        <div className="pagination my-6 flex justify-between">
          <button
            disabled={start === 0}
            onClick={() => {
              if (start > 0) {
                setStart(start - limit);
                setEnd(end - limit);
              }
            }}
            className=" hover:bg-gray-100 flex px-4 py-0 justify-between items-center h-[2.5rem] border border-fuchsia-400">
            {" "}
            <span className="mx-2">
              {" "}
              <BsArrowLeftSquare />
            </span>{" "}
            Prev
          </button>
          <button
            disabled={end == users?.length || end > users?.length}
            onClick={() => {
              if (end < users.length) {
                setStart(start + limit);
                setEnd(end +limit);
              }
            }}
            className=" hover:bg-gray-100 px-4 flex items-center py-0 border border-fuchsia-400 h-[2.5rem]">

            Next
            <span className="mx-2">

              <BsArrowRightSquare />
            </span>
          </button>
        </div>
      </div>

      {selectedUser.userId && selectedUser.type == "delete" && (
        <div className=" absolute top-52  left-[42%] ">
          <DeleteConfirmModal
            users={users}
            setselectedUser={setselectedUser}
            setUsers={setUsers}
            selectedUser={selectedUser}
            setmsg={setmsg}
      settoast={settoast}
      toastTimer={toastTimer}

          />
        </div>
      )}
      {/* { isOpen  &&(
        <div className=" absolute top-52  left-[42%] ">
          <UserModal
            users={users}
            selectedUser={selectedUser}
            handleOverlayClick={handleOverlayClick}
            setOpen={setOpen} handelSibmit={handelSibmit} data={data} isOpen={isOpen} setData={setData}
          />
        </div>
      )} */}
      {isOpen && selectedUser !== "add" && (
        <div className=" absolute top-52  left-[42%] ">
          <UserModal
            users={users}
            selectedUser={selectedUser}
            // handelUpdate={handelUpdate}
            setUsers={setUsers}
            handleOverlayClick={handleOverlayClick}
            setOpen={setOpen}
            handelSibmit={handelSibmit}
            data={data}
            isOpen={isOpen}
            setData={setData}
          />
        </div>
      )}
    </>
  );
};

export default Todos;
