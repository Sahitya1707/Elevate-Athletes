"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateEmail,
  updatePassword,
} from "@/app/utils/reduxSlices/developerLogin";
import {
  backendConnection,
  developerConnectionString,
} from "@/app/utils/constant";
import Login from "@/app/components/developer/login";
import { NavButton } from "@/app/components/navbar/NavButton";
import { colorMapping } from "@/app/assets/colorMapping";

const Page = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: loginData.email,
      password: loginData.password,
    };

    await fetch(`${backendConnection}${developerConnectionString}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <section className="w-[100vw] h-[100vh] flex items-center justify-center bg-primary">
      <form
        className="border-solid border-[0.2px] border-primary py-4 px-4 shadow-xl w-[30rem] rounded-xl bg-revTextColor"
        name="developer"
        encType="multipart/form-data"
        method="post"
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
    </section>
  );
};

export default Page;
