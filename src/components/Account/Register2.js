import { useState } from "react";
import React from "react";
import "./Account.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import image2 from "../../assets/Rectangle 18.png";

const Register2= () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");
  const [age, agechange] = useState("");
  const [hobbies, hobbieschange] = useState("");
  const [sex, sexchange] = useState("");
  const [issues, issueschange] = useState("");

  const navigate = useNavigate();
  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "please enter a valid email";
    if (email === null || email === "") {
      isproceed = false;
      errormessage += "email@email.com";
    }

    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isproceed = false;
        toast.warning("please enter a valid email");
      }
    }
    return isproceed;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { id, name, password, email, age, hobbies, sex, issues };
    if (IsValidate()) {
      //console.log(regobj);

      fetch("http://localhost:8001/therapist", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success("Account Created Successfully");
          navigate("/login2");
        })
        .catch((err) => {
          toast.error("Failed:" * err.message);
        });
    }
  };
  return (
    <div className="registerPage">
      <div className="register" id="getStarted2">
        <form action="/" className="container" onSubmit={handlesubmit}>
          <div className="card">
            <div className="cardHeader">
              <h2>Create Account Therapist</h2>
            </div>
            <div className="cardBody">
              <div className="row">
                <div className="column">
                  <div className="formGroup">
                    <label>
                      User Name <span className="errmsg">*</span>
                    </label>

                    <input
                      value={id}
                      onChange={(e) => idchange(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Ucee"
                      required
                    />
                  </div>
                </div>
                <div className="column">
                  <div className="formGroup">
                    <label>
                      FullName <span className="errmsg">*</span>
                    </label>
                    <input
                      value={name}
                      onChange={(e) => namechange(e.target.value)}
                      type="name"
                      className="form-control"
                      placeholder="Sandy Baby"
                      required
                    />
                  </div>
                </div>
                <div className="column">
                  <div className="formGroup">
                    <label>
                      Password <span className="errmsg">*</span>
                    </label>
                    <input
                      value={password}
                      onChange={(e) => passwordchange(e.target.value)}
                      type="password"
                      className="form-control"
                      placeholder="888***88"
                      required
                    />
                  </div>
                </div>
                <div className="column">
                  <div className="formGroup">
                    <label>
                      Email <span className="errmsg">*</span>
                    </label>
                    <input
                      value={email}
                      onChange={(e) => emailchange(e.target.value)}
                      type="email"
                      className="form-control"
                      placeholder="Sandybaby@youremail.com"
                    />
                  </div>
                </div>
                <div className="column">
                  <label>others</label>
                  <span className="cardSelect">
                    <select
                      className="form-control"
                      value={age}
                      onChange={(e) => agechange(e.target.value)}
                    >
                      <option value="age">Age</option>
                      <option value="age">18-20</option>
                      <option value="age">18-20</option>
                    </select>
                    <select
                      className="form-control"
                      value={sex}
                      onChange={(e) => sexchange(e.target.value)}
                    >
                      <option value="sex">Sex</option>
                      <option value="female">female</option>
                      <option value="male">male</option>
                    </select>
                    <select
                      className="form-control"
                      value={hobbies}
                      onChange={(e) => hobbieschange(e.target.value)}
                    >
                      <option value="hobbies">Hobbies</option>
                      <option value="dancing">dancing</option>
                      <option value="reading">reading</option>
                    </select>
                    <select
                      className="form-control"
                      value={issues}
                      onChange={(e) => issueschange(e.target.value)}
                    >
                      <option value="age">Mental Health Issues</option>
                      <option value="pcos">Pcos</option>
                      <option value="eating disorder">eating disorder</option>
                    </select>
                  </span>
                </div>
              </div>
            </div>

            <div className="cardfooter">
              <button type="submit" className="btn btnSecondary">
                Register
              </button>
              <Link to="/login" className="btn btnPrimary">
                Login
              </Link>
            </div>
          </div>
          <img className="registerImage" src={image2} alt="image2" />
        </form>
      </div>
    </div>
  );
};

export default Register2;
