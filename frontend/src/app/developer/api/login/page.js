"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import cookie from "cookie";
import { useSelector, useDispatch } from "react-redux";
import {
  updateEmail,
  updatePassword,
} from "@/app/utils/reduxSlices/developerLogin";
import Cookies from "js-cookie";
import {
  backendConnection,
  developerConnectionString,
} from "@/app/utils/constant";
import Login from "@/app/components/developer/Login";
import { NavButton } from "@/app/components/navbar/NavButton";
import { colorMapping } from "@/app/assets/colorMapping";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Page = () => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const token = Cookies.get("accessToken");

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
      // you have to include this inorder to set the cookies inside your browser
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        console.log(res);
        console.log(res.headers);
        return res.json();
      })
      .then((data) => {
        // setToken(data.token);
        // Cookies.set("token", data.token, {
        //   expires: 1,
        //   secure: true,
        //   sameSite: "Strict",
        // });
        console.log(data);
        setAccessToken(data.accessToken);
        console.log(document.cookie);
        router.push("/developer/api/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setAccessToken(null);
      });
  };

  console.log(accessToken);
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
        <div className="relative">
          <Login
            text="password"
            type={`${showPassword ? "text" : "password"}`}
            autoComplete={"off"}
            value={loginData.password}
            handleInput={handlePassword}
          />
          <span
            className="absolute top-[50%] right-4 cursor-pointer p-1 hover:bg-[lightgrey] rounded-full "
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
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
