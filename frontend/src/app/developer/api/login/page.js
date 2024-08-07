"use client";
import { colorMapping } from "@/app/assets/colorMapping";
import { NavButton } from "@/app/components/navbar/NavButton";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import Login from "@/app/components/developer/login";
import {
  updateEmail,
  updatePassword,
} from "@/app/utils/reduxSlices/developerLogin";
import {
  backendConnection,
  developerConnectionString,
} from "@/app/utils/constant";

const login = () => {
  const loginData = useSelector((store) => {
    return store.developerLoginCredential;
  });
  const dispatch = useDispatch();

  const handleMail = (e) => {
    console.log(e.target.value);
    dispatch(updateEmail(e.target.value));
  };
  const handlePassword = (e) => {
    console.log(e.target.value);
    dispatch(updatePassword(e.target.value));
  };
  const formData = new FormData();
  const handleSubmit = async (e) => {
    e.preventDefault();

    formData.append("email", loginData.email);
    formData.append("password", loginData.password);
    console.log(...formData.entries());
    console.log(loginData.email);
    console.log(loginData.password);
    const fetchData = await fetch(
      `${backendConnection}${developerConnectionString}login`,
      {
        method: "POST",
        body: formData,
        // headers: {
        //   "Content-type": "application/json; charset=UTF-8",
        // },
      }
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(fetchData);
  };
  return (
    <>
      <section className="w-[100vw] h-[100vh] flex items-center justify-center bg-primary">
        <form
          className="border-solid border-[0.2px] border-primary py-4 px-4 shadow-xl w-[30rem] rounded-xl bg-revTextColor"
          name="developer"
        >
          <h2
            className="uppercase text-3xl font-semibold tracking-widest  my-4"
            style={{
              textShadow: `rgb(${colorMapping["secondary"]}) -2px 2px 10px`,
            }}
          >
            Welcome to developer login
          </h2>

          <Login
            text={"email"}
            type={"email "}
            autoComplete="off"
            value={loginData.email}
            handleInput={handleMail}
          />

          <Login
            text="password"
            type="password"
            autoComplete={"off"}
            value={loginData.password}
            handleInput={handlePassword}
          />

          <div className="flex justify-center my-4">
            <NavButton
              text={"Login"}
              color={"primary"}
              handleButton={handleSubmit}
            />{" "}
          </div>
        </form>
      </section>{" "}
    </>
  );
};

export default login;
