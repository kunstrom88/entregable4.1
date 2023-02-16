import { useState, useEffect } from "react";
import "./App.css";
import FormUser from "./components/FormUser";
import UserCard from "./components/UserCard";
import axios from "axios";
import Alert from "./components/Alert";
function App() {
  const [users, setUsers] = useState([]);
  const [updateInfo, setUpdateInfo] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  const getAllUsers = () => {
    const url = "https://users-crud.academlo.tech/users/";
    axios
      .get(url)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const createNewUser = (data) => {
    const url = "https://users-crud.academlo.tech/users/";
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const deleteUserById = (id) => {
    const url = `https://users-crud.academlo.tech/users/${id}/`;
    axios
      .delete(url)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const handleClickAlert = () => {
    setIsAlert((isAlert) => !isAlert);
  };

  const updateUserById = (id, data) => {
    const url = `https://users-crud.academlo.tech/users/${id}/`;
    axios
      .put(url, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
        setUpdateInfo();
      })
      .catch((err) => console.log(err));
  };

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="App">
      <div className="Navbar">
        <h1>Users CRUD</h1>
        <button onClick={handleOpen} className="App__btn">
          Open Form
        </button>
      </div>
      <div className={`form-container ${isOpen && "form-container-visible"}`}>
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          handleClose={handleClose}
          setUpdateInfo={setUpdateInfo}
        />
      </div>
      <div className="user-container">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            handleOpen={handleOpen}
            handleClickAlert={handleClickAlert}
            isAlert={isAlert}
          />
        ))}
        <Alert handleClickAlert={handleClickAlert} isAlert={isAlert} />
      </div>
    </div>
  );
}

export default App;
