import { Outlet, useNavigate } from "react-router-dom";
import "./Layout.css";
import { useEffect } from "react";
import Navbar from "./Navbar";

export default function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="layout">
        <div className="header" style={{ height: "50px", width: "100%" }}>
          <Navbar />
        </div>

        <div className="pageBody">
          <div
            style={{
              width: "20%",
              height: "784px",
              backgroundColor: "#6eb0fc",
            }}
          >
            <h1
              style={{
                marginTop: "60px",
                marginLeft: "110px",
              }}
            >
              Users{" "}
            </h1>
            <img src="" alt="" />
          </div>

          <div
            className="container-fluid"
            style={{ backgroundColor: "#f4e7fc " }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
