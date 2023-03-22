import React, { useState } from "react";
import axios from "axios";

import "./login.css";
import Button from "../components/comp_button";

import input_placeholders from "../components/string.json";
import button_inputs from "../components/string.json";
import StrengthMeter from "../components/StrengthMeter";

import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";


import googleLogo from "../icon/icons8-google-30.png";
import appleLogo from "../icon/icons8-apple-logo-30.png";

// const http = require('axios');

function LoginPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    signUpUser(username, email, password);
  };
  function signUpUser(email, name, password) {
    let data = JSON.stringify({
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://reqres.in/api/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div id="padding_top_of_the_container">
      <Navbar />
      <div
        className="container"
        class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700"
        id="container"
      >
        <div id="head">
          <div>
            <div>
              <h2 class="flex-auto text-lg font-semibold text-slate-900">
                Getting Started
              </h2>
            </div>
            <div
              class="w-full flex-none text-sm font-medium text-slate-700 mt-2"
              className="for_a_single_line"
            >
              Create an account to continue!
            </div>
          </div>
          <div>
            {button_inputs.button_inputs.map((but_in) => (
              <div
                class="flex space-x-4 mb-6 text-sm font-medium"
                id="google_apple_buttons"
              >
                <div id="google" key={but_in.name}>
                  <Button
                    className={but_in.name}
                    onClick={() => console.log("Clicked!")}
                    type={but_in.type}
                    color={but_in.color}
                  >
                    <div id="buttontextalligned">
                      <div>
                        <img
                          src={googleLogo}
                          alt="Google logo"
                          className="google-logo"
                        />
                      </div>
                      <div></div>
                      Sign Up with Google
                    </div>
                  </Button>
                </div>
                <div id="apple">
                  <Button
                    className={but_in.name}
                    onClick={() => console.log("Clicked!")}
                    type={but_in.type}
                    color={but_in.color}
                  >
                    <div id="buttontextalligned">
                      <div>
                        <img
                          src={appleLogo}
                          alt="Apple logo"
                          className="apple-logo"
                        />
                      </div>
                      <div>Sign Up with Apple</div>
                    </div>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className=".lining">
            <div className="word">
              ------------------------- OR -------------------------
            </div>
          </div>

          <div className="form_class">
            <form onSubmit={handleSubmit}>
              {input_placeholders.input_placeholders.map((input_level) => (
                <div key={input_level.name}>
                  <input
                    type={input_level.type}
                    id={input_level.id}
                    placeholder={input_level.placeholder}
                    value={
                      input_level.name === "email"
                        ? email
                        : input_level.name === "username"
                        ? username
                        : password
                    }
                    onChange={(event) => {
                      if (input_level.name === "email") {
                        setEmail(event.target.value);
                      } else if (input_level.name === "username") {
                        setUsername(event.target.value);
                      } else {
                        setPassword(event.target.value);
                      }
                    }}
                  />
                </div>
              ))}
              <StrengthMeter />
              <div>
                <div
                  class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"
                  className="checkbox"
                >
                  <input
                    class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 dark:border-neutral-600 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-100 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary dark:checked:border-primary checked:bg-primary dark:checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                    type="checkbox"
                    value=""
                    id="checkboxChecked"
                  />
                  <label
                    class="inline-block pl-[0.15rem] hover:cursor-pointer"
                    for="checkboxChecked"
                  >
                    I agree to the terms & conditions
                  </label>
                </div>
                <div className="sign_up_button">
                  <Button
                    className="primary-button"
                    onClick={() => console.log("Clicked!")}
                    type="submit"
                    color={"#007bff"}
                  >
                    Sign In
                  </Button>
                </div>
              </div>
              <div>
                <div
                  class="w-full flex-none text-sm font-medium text-slate-700 mt-2"
                  id="have_an_acc"
                >
                  I already have an account!
                  <a href="#home" className="sign_in">
                    Sign In
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
