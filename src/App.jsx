import { useState } from "react";

import Home from "./Home";
import Navbar from "./compo/Navbar";
import Toast from "./compo/Toast";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "neeraj",
      age: 25,
      Occupation: "athelete",
      location: "Ind",
    },
    {
      id: 2,
      name: "Marsh",
      age: 24,
      Occupation: "Software Engineer",
      location: "Aus",
    },
    {
      id: 3,
      name: "Smith",
      age: 28,
      Occupation: "Doctor",
      location: "Germany",
    },
    {
      id: 4,
      name: "Starck",
      age: 36,
      Occupation: "cricketer",
      location: "Usa",
    },
    {
      id: 5,
      name: "Jhonson",
      age: 20,
      Occupation: "Artist",
      location: "France",
    },
    {
      id: 6,
      name: "joe",
      age: 29,
      Occupation: "Footballer",
      location: "UK",
    },
    {
      id: 7,
      name: "Samson",
      age: 27,
      Occupation: "Swimmer",
      location: "Itely",
    },
  ]);

  const [isOpen, setOpen] = useState(false);

  // Function to handle outside click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  const [data, setData] = useState({
    name: "",
    age: "",
    Occupation: "",
    location: "",
  });

  const [selectedUser, setselectedUser] = useState({
    userId: "",
    type: "add",
  });

  const [toastOpen, settoast] = useState(false);
  const [toastmsg, setmsg] = useState();
  const timerRef = useRef(null);

  const toastTimer = () => {
    let timerInSeconds = 0;

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      if (timerInSeconds < 10) {
        timerInSeconds += 1;
        console.log(timerInSeconds, "timerInSeconds");
      } else {
        settoast(false);
        setmsg('');
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }, 1000);

    settoast(true);  // Open the toast when the timer starts
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handelSibmit = (e) => {
    e.preventDefault();

    if (selectedUser.type == "update") {
      let updatedData = { ...data };
      let copyUsers = [...users];
      let findIndex = copyUsers.findIndex((item) => item.id == updatedData.id);
      copyUsers[findIndex] = updatedData;
      setUsers(copyUsers);
      setOpen(false);
      setData({
        id: "",
        name: "",
        age: "",
        Occupation: "",
        location: "",
      });
      setmsg("user successfully updated!");
      settoast(true);
      toastTimer();
    } else {
      console.log(data, "data");
      let newData = { ...data };
      newData.id = users.length + 1;
      setUsers((prev) => [...prev, newData]);
      setData({
        id: "",
        name: "",
        age: "",
        Occupation: "",
        location: "",
      });
      setOpen(false);
      setmsg("user successfully created!");
      settoast(true);
      toastTimer();
    }
  };

  return (
    <>
      {toastOpen && (
        <Toast
          settoast={settoast}
          msg={toastmsg}
        />
      )}
      <div className={"roboto-regular"}>
        <Navbar
          users={users}
          // handelChange={handelChange}
          handleOverlayClick={handleOverlayClick}
          setOpen={setOpen}
          handelSibmit={handelSibmit}
          data={data}
          isOpen={isOpen}
          setData={setData}
          setUsers={setUsers}
          selectedUser={selectedUser}
          setselectedUser={setselectedUser}
        />
        <div className="py-10">
          <h3 className="text-xl text-center text-fuchsia-700 underline underline-offset-8 ">
            User Application
          </h3>
          <Home
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
      </div>
    </>
  );
}

export default App;
