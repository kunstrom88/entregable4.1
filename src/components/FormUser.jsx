import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/FormUser.css";
import defaultValues from "../utils/defaultValues";
const FormUser = ({
  createNewUser,
  updateInfo,
  updateUserById,
  handleClose,
  setUpdateInfo,
}) => {
  const { reset, register, handleSubmit } = useForm();

  useEffect(() => {
    if (updateInfo) {
      reset(updateInfo);
    }
  }, [updateInfo]);

  const submit = (data) => {
    if (updateInfo) {
      updateUserById(updateInfo.id, data);
    } else {
      createNewUser(data);
    }
    handleClose();
    reset(defaultValues);
  };

  const handleX = () => {
    reset(defaultValues);
    setUpdateInfo();
    handleClose();
  };
  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <h2 className="form__title">Open Form</h2>
      <div onClick={handleX} className="form__x">
        x
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          {...register("email")}
          type="email"
          placeholder="Add your email"
          id="email"
        />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          className="form__input"
          {...register("password")}
          type="password"
          placeholder="Add your password"
          id="password"
        />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="firstName">
          First Name
        </label>
        <input
          className="form__input"
          {...register("first_name")}
          type="text"
          placeholder="Add your first name"
          id="firstName"
        />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="form__input"
          {...register("last_name")}
          type="text"
          placeholder="Add your last name"
          id="lastName"
        />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="birthday">
          Birthday
        </label>
        <input
          className="form__input"
          {...register("birthday")}
          type="date"
          id="birthday"
        />
      </div>
      <button className="form__btn">{updateInfo ? "Update" : "Create"}</button>
    </form>
  );
};

export default FormUser;
