import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    city: "",
    name: "",
    lastname: "",
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
    const credentials = {
      username,
      password,
      name,
      lastname,
      city
    };
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "Signup was unsuccessful! Please check the console.",
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleFormSubmission} className="auth__form">
      <label htmlFor="input-name">Name</label>
        <input
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
          id="input-password"
          type="password"
          name="password"
          placeholder="Ssshhhhht that's a secret!"
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
