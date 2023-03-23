import React from "react";
import { useNavigate } from "react-router-dom";

const ViewUserModal = ({ handleCancel, userDetails, handleSubmit }) => {
  const navigate = useNavigate();

  const submitHandler = () => {
    handleSubmit(userDetails);

    //Hide the modal
    handleCancel();

    // redirect to view users
    navigate("/users/view");
  };
  return (
    <>
      <div className="backdrop"></div>
      <div className="modal" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Verify Details</h1>
              <button
                type="button"
                className="btn-close"
                onClick={handleCancel}
              ></button>
            </div>
            <div className="modal-body">
              <ul>
                <li>
                  <b>Name:</b>
                  {userDetails.name}
                </li>
                <li>
                  <b>gender:</b>
                  {userDetails.gender}
                </li>
                <li>
                  <b>phone:</b>
                  {userDetails.phone}
                </li>
                <li>
                  <b>email:</b>
                  {userDetails.email}
                </li>
                <li>
                  <b>category:</b>
                  {userDetails.category}
                </li>
                <li>
                  <b>technology:</b>
                  {userDetails.technology.join(",")}
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={submitHandler}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewUserModal;
