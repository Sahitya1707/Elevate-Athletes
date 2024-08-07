import React, { useState } from "react";

const Login = ({ text, value, type, autoComplete, handleInput }) => {
  return (
    <div className="flex flex-col my-2">
      <span className="capitalize">{text}</span>
      <input
        type={type}
        className="border-textColor border-solid border-[0.1px] 
              px-2 py-1 text-xl"
        // name={type}
        placeholder="Enter Your Email"
        autoComplete={autoComplete}
        value={value}
        onChange={handleInput}
      />
    </div>
  );
};

export default Login;
