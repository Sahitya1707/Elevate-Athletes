"use client";
import { colorMapping } from "@/app/assets/colorMapping";
import { NavButton } from "@/app/components/navbar/NavButton";
import React from "react";

const login = () => {
  const handleDeveloperLogin = (e) => {
    e.preventDefault();
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
          <div className="flex flex-col my-2">
            <span>Email</span>
            <input
              type="email"
              className="border-textColor border-solid border-[0.1px] 
              px-2 py-1 text-xl"
              name="email"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col">
            <span>Password</span>
            <input
              type="password"
              className="border-textColor border-solid border-[0.1px] px-2 py-1 text-2xl"
              autoComplete="off"
              name="password"
              minLength={8}
            />
          </div>
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
