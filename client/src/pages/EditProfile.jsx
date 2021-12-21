import React, { useState } from "react";
import { editProfile } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import { PropertySafetyFilled } from "@ant-design/icons";

export default function EditProfile({ authenticate, user }) {
  const [form, setForm] = useState({
    username: user.username,
    password: "",
    city: user.city,
    name: user.name,
    lastname: user.lastname,
  });
  const { username, password, name, lastname, city } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const body = {
      username,
      password,
      name,
      lastname,
      city
    };
    editProfile(body, user._id).then((res) => {
      if (!res.status) {
        // unsuccessful EditProfile
        console.error("EditProfile was unsuccessful: ", res);
        return setError({
          message: "EditProfile was unsuccessful! Please check the console.",
        });
      }
      // successful EditProfile
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.PROFILEPAGE);
    });
  }

  return (
    <div>
      <h1>Hey {user.username}!</h1> 
      <h2>Edit the field you want, put your password amd click on Submit.</h2>
      <form onSubmit={handleFormSubmission} className="auth__form">
      <h3>Your current username is {user.username} </h3>
      <label htmlFor="input-name">Name</label>
        <input
          className="formsInput"
          id="input-name"
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={handleInputChange}
          required
        />

      <label htmlFor="input-lastname">Last Name</label>
        <input
          className="formsInput"
          id="input-lastname"
          type="text"
          name="lastname"
          placeholder="Your Last Name"
          value={lastname}
          onChange={handleInputChange}
          required
        />

      <label htmlFor="input-city">City</label>
        <select
          className="formsInput"
          id="input-city"
          type="text"
          name="city"
          value={city}
          onChange={handleInputChange}
          required>
                <option value="Barcelona">Barcelona</option>
                <option value="Madrid">Madrid</option>
                <option value="Sevilla">Sevilla</option>
                <option value="Bilbao">Bilbao</option>
        </select>


        <label htmlFor="input-username">Username</label>
        <input
          className="formsInput"
          id="input-username"
          type="text"
          name="username"
          placeholder="How do you want to be called?"
          value={username}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-password">Password</label>
        <input
          className="formsInput"
          id="input-password"
          type="password"
          name="password"
          placeholder="Sshhhht that's a secret!"
          value={password}
          onChange={handleInputChange}
          required
          minLength="8"
        />

        {error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
          </div>
        )}

        <button className="button__submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
