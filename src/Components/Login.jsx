import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login,setLogin] = useState({
    emailid: "",
    password: "",
  })
  const navigate = useNavigate()
  let handleClick = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://api-dev.wogom.com/v1/retailer/login", {
        method: "POST",
        headers: {
         "x-random": "xyz",
          "x-userid": "7185",
          "xyz": "754ad38082d761943b6c95670a38c6ca",
          "x-deviceinfo": "postmen",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(login),
      });
      navigate('/products')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="container"
      style={{ maxWidth: "400px", marginTop: "100px" }}
    >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Welcome User</h5>
          <form>
            <div className="form-group m-3">
              <input
                type="email"
                className="form-control"
                name="emailid"
                placeholder="Enter Username or Email"
                required
                value={login.emailid}
                onChange={(e)=>setLogin({...login,emailid:e.target.value})}
              />
            </div>
            <div className="form-group m-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password"
                required
                value={login.password}
                onChange={(e)=>setLogin({...login,password:e.target.value})}
              />
              <a href="#">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="btn btn-primary m-3 col-11"
              onClick={handleClick}
            >
              Login
            </button>
          </form>
          <div className="text-center mt-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
