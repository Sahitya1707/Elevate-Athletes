"use client";
import { colorMapping } from "@/app/assets/colorMapping";
import { NavButton } from "@/app/components/navbar/NavButton";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import Login from "@/app/components/developer/login";

const login = () => {
  const handleDeveloperLogin = (e) => {
    e.preventDefault();
  };
  const loginData = useSelector((store) => {
    return store.developerLoginCredential;
  });
  console.log(loginData);
  const formData = new FormData();
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
          />

          <Login
            text="password"
            type="password"
            autoComplete={"off"}
            value={loginData.password}
          />

          <div className="flex justify-center my-4">
            <NavButton
              text={"Login"}
              color={"primary"}
              handleButton={handleDeveloperLogin}
            />{" "}
          </div>
        </form>
      </section>{" "}
    </>
  );
};

export default login;
