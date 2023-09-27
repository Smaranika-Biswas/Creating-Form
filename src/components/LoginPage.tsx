import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkData = () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({ username, password });

    let requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    if (username === "" || username === null || username === undefined) {
      alert("Enter correct username");
      return false;
    }

    if (password === "" || password === null || password === undefined) {
      alert("Enter correct password");
      return false;
    }

    fetch("https://fakestoreapi.com/auth/login", requestOptions)
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      })
      .then((data) => {
        sessionStorage.setItem("token", data.token);
        navigate("/");
      })
      .catch(() => alert("Invalid username or password"));
  };

  return (
    <>
      <div className="form">
        <form>
          <div className="row">
            <div className="col-sm-12">
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  marginTop: "60px",
                }}
              >
                Login
              </h1>
            </div>
            <div className="inputfeilds" style={{ marginLeft: "10px" }}>
              <div className="user">
                <TextField
                  style={{
                    display: "flex",
                    width: "250px",
                    marginTop: "10px",
                    marginLeft: "63px",
                  }}
                  id="outlined-basic1"
                  label="username"
                  variant="outlined"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="pass">
                <TextField
                  type="password"
                  id="outlined-basic2"
                  label="Password"
                  variant="outlined"
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    display: "flex",
                    width: "250px",
                    marginTop: "10px",
                    marginLeft: "63px",
                  }}
                />
              </div>
            </div>

            <div className="col-sm-12 mt-3 text-center">
              <Button variant="contained" color="primary" onClick={checkData}>
                Login
              </Button>
              <Button
                type="reset"
                variant="contained"
                color="primary"
                style={{ margin: "10px" }}
              >
                Reset
              </Button>
            </div>
            <div>
              <Signup />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
