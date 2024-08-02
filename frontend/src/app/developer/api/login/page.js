import React from "react";

const login = () => {
  return (
    <seciton className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="border-solid border-2 border-[black] p-2 shadow-lg">
        <div className="flex flex-col">
          <span>Email</span>
          <input type="email" />
        </div>
        <div>
          <span>Password</span>
          <input type="password" />
        </div>
      </div>
    </seciton>
  );
};

export default login;
