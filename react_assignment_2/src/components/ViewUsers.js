import React from "react";

const ViewUsers = ({ users }) => {
  return (
    <>
      <h1>All users</h1>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Category</th>
            <th scope="col">Technology</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && (
            <tr>
              <td colSpan={7}>
                <h1 className="text-center">No Users Found</h1>
              </td>
            </tr>
          )}
          {users.length > 0 &&
            users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.category}</td>
                <td>{user.technology.join()}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ViewUsers;
