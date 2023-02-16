import React from "react";
import "./styles/UserCard.css";

const UserCard = ({
  user,
  deleteUserById,
  setUpdateInfo,
  handleOpen,
  handleClickAlert,
}) => {
  const handleDelete = () => {
    deleteUserById(user.id);
    handleClickAlert();
  };

  const handleUpdate = () => {
    setUpdateInfo(user);
    handleOpen();
  };

  return (
    <article className="card">
      <h3 className="card__title">{`${user.first_name} ${user.last_name} `}</h3>
      <hr />
      <ul className="card__body">
        <li className="card__item">
          <span className="card__span">Email: </span>
          {user.email}
        </li>
        <li className="card__item">
          <span className="card__span">Birthday: </span>
          <div className="card__gift">
            <div className="card__gift__icon">
              <i className="fa-solid fa-gift"></i>
            </div>
            {user.birthday}
          </div>
        </li>
      </ul>
      <hr />
      <footer className="card__footer">
        <button className="card__btn card__btn__trash" onClick={handleDelete}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <button className="card__btn card__btn__edit" onClick={handleUpdate}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
