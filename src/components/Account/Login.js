import React, { useEffect, useState } from "react";
import "./Account.css";
import { Link, useNavigate } from "react-router-dom";
import image2 from "../../assets/Rectangle 18.png";
import { toast } from "react-toastify";

const Login = () => {
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");

  const usenavigate = useNavigate();
  let errmessage = "please enter a valid email";

  useEffect(() => {
    
      localStorage.clear();
    
  }, []);
  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      ///implement login functinality
      ///console.log('proceed');
      fetch("http://localhost:8000/user/" + username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            toast.error("Please enter valid username");
          } else {
            if (resp.password === password) {
              toast.success("successful");
              localStorage.setItem("username", username);
              usenavigate("/hobbies");
            } else {
              toast.error("please enter valid data");
            }
          }
        })
        .catch((err) => {
          toast.error("failed :" + errmessage);
        });
    }
  };
  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Enter Username");
    }

    if (password === "" || password === null) {
      result = false;
      toast.warning("Enter Password");
    }
    return result;
  };

  return (
    <div className="loginPage" id="login">
      <div className="login" id="login">
        <form action="" className="container" onSubmit={proceedLogin}>
          <div className="card">
            <div className="cardHeader">
              <h2>Login Patient</h2>
            </div>
            <div className="cardBody">
              <div className="row">
                <div className="column">
                  <div className="formGroup">
                    <label>
                      User Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={username}
                      onChange={(e) => usernameupdate(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Ucee"
                      required
                    />
                    <label>
                      Password <span className="errmsg">*</span>
                    </label>
                    <input
                      value={password}
                      onChange={(e) => passwordupdate(e.target.value)}
                      type="password"
                      className="form-control"
                      placeholder="8888***888"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="cardfooter">
              <button type="submit" className="btnSecondary">
                Login
              </button>
              <Link to="/getStarted" className="btn btnPrimary">
                Creat Account
              </Link>
            </div>
          </div>
          <img className="registerImage" src={image2} alt="image2" />
        </form>
      </div>
    </div>
  );
};

export default Login;
