import React from "react";
import Todos from "./compo/Todos";

const Home = ({
  users,
  setUsers,
  handleOverlayClick,
  setOpen,
  handelSibmit,
  data,
  isOpen,
  setData,
  selectedUser,
  setselectedUser,
  setmsg,
  settoast,
  toastTimer

}) => {
  return (
    <div>
      <Todos
        handleOverlayClick={handleOverlayClick}
        setOpen={setOpen}
        handelSibmit={handelSibmit}
        data={data}
        isOpen={isOpen}
        setData={setData}
        users={users}
        setUsers={setUsers}
        selectedUser={selectedUser}
        setselectedUser={setselectedUser}
        setmsg={setmsg}
      settoast={settoast}
      toastTimer={toastTimer}
      />
    </div>
  );
};

export default Home;
