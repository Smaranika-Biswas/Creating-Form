import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import AddUser from "./AddUser";

export default function UserData() {
  const [user, setUser] = useState<[] | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users/") //users data in a table
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      })
      .catch((err) => err);
  }, []);
  // console.log(user);

  const deleteUser = (id: number) => {
    fetch(`https://fakestoreapi.com/users/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    console.log(id);
  };

  return (
    <>
      <div className="table-data" style={{ marginTop: "30px" }}>
        <AddUser />

        {user ? (
          <table className="table table-sm" style={{ height: "700px" }}>
            <thead>
              <tr>
                <th>SL. No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Password</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Edit User</th>
                <th>Delete User</th>
              </tr>
            </thead>
            <tbody>
              {user?.map((item: any, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name.firstname}</td>
                  <td>{item.name.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                  <td>{item.address.city}</td>
                  <td>{item.phone}</td>
                  <td>
                    <Link to={"/userdata/editpage/" + item.id}>
                      <button
                        type="button"
                        className="btn"
                        style={{ backgroundColor: "#3b517a", color: "white" }}
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => deleteUser(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
        <Outlet />
      </div>
    </>
  );
}
