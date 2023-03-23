import React, { useState } from "react";
import ViewUserModal from "./ViewUserModal";

const CreateUser = ({handleSubmit}) => {
  const [showModal, setShowModal] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [genderInput, setGenderInput] = useState("");
  const [technologyInput, setTechnologyInput] = useState([]);
  const [error, setError] = useState("");

  const technologyInputHandler = (e) => {
    if (e.target.checked) {
      setTechnologyInput((prevState) => [...prevState, e.target.value]);
    } else {
      setTechnologyInput((prevState) =>
        prevState.filter((item) => item !== e.target.value)
      );
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (nameInput.trim() == 0) {
      setError("Enter name");
      return;
    }
    if (!emailInput.includes("@")) {
      setError("Enter valid email");
      return;
    }
    if (phoneInput.trim() == 0 || phoneInput.length != 10) {
      setError("Enter valid phone(10 digit) ");
      return;
    }
    if (categoryInput.trim() == 0) {
      setError("Select Category");
      return;
    }
    if (genderInput.trim() == 0) {
      setError("Select gender");
      return;
    }
    if (technologyInput.length == 0) {
      setError("Select atleast 1 technology");
      return;
    }

    setError("");
    setShowModal(true);
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      {showModal && (
        <ViewUserModal
          userDetails={{
            name: nameInput,
            phone: phoneInput,
            email: emailInput,
            gender: genderInput,
            category: categoryInput,
            technology: technologyInput,
          }}
          handleCancel={toggleModal}
          handleSubmit={handleSubmit}
        />
      )}
      <form onSubmit={submitHandler}>
        <h1 className="text-center">Enter Details</h1>
        {error && <p className="error">{error}</p>}
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            minLength={2}
            maxLength={30}
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label>Gender</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={(e) => setGenderInput(e.target.value)}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={(e) => setGenderInput(e.target.value)}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            className="form-control"
            id="phone"
            placeholder="Enter phone"
            value={phoneInput}
            maxLength={10}
            onChange={(e) => setPhoneInput(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="category">Category</label>
          <select
            className="form-control"
            id="category"
            onChange={(e) => {
              setCategoryInput(e.target.value);
            }}
          >
            <option value="">Choose</option>
            <option value="general">General</option>
            <option value="sc/st">SC/ST</option>
            <option value="obc">OBC</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label>Technology</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="c"
              id="c"
              name="technology"
              onChange={technologyInputHandler}
            />
            <label className="form-check-label" htmlFor="c">
              C
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="c++"
              id="c++"
              name="technology"
              onChange={technologyInputHandler}
            />
            <label className="form-check-label" htmlFor="c++">
              C++
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="java"
              id="java"
              name="technology"
              onChange={technologyInputHandler}
            />
            <label className="form-check-label" htmlFor="java">
              Java
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="python"
              id="python"
              name="technology"
              onChange={technologyInputHandler}
            />
            <label className="form-check-label" htmlFor="python">
              Python
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="javascript"
              id="javascript"
              name="technology"
              onChange={technologyInputHandler}
            />
            <label className="form-check-label" htmlFor="javascript">
              Javascript
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Preview
        </button>
      </form>
    </>
  );
};

export default CreateUser;
