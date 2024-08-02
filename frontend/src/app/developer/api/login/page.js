import { NavButton } from "@/app/components/navbar/NavButton";
import React from "react";

const login = () => {
  return (
    <>
      <seciton className="w-[100vw] h-[100vh] flex items-center justify-center">
        <div className="border-solid border-[0.2px] border-primary py-4 px-4 shadow-lg w-[30rem] rounded">
          <h2 className="uppercase text-2xl font-semibold tracking-widest my-4">
            Welcome to developer login
          </h2>
          <div className="flex flex-col my-2">
            <span>Email</span>
            <input
              type="email"
              className="border-textColor border-solid border-[0.1px] px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <span>Password</span>
            <input
              type="password"
              className="border-textColor border-solid border-[0.1px] px-2 py-1"
            />
          </div>
          <div className="flex justify-center my-4">
            <NavButton text={"Login"} color={"tertiary"} />{" "}
          </div>
        </div>
      </seciton>{" "}
    </>
  );
};

export default login;
