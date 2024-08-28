"use client";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
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
import LoginInput from "@/app/components/developer/LoginInput";
import { NavButton } from "@/app/components/navbar/NavButton";
import { colorMapping } from "@/app/assets/colorMapping";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import {
  updateIconColor,
  updatePopupIcon,
  updatePopupVisibility,
  updateText,
  updateVisibility,
  updateWarningSign,
} from "@/app/utils/reduxSlices/popupSlice";

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
    dispatch(updateEmail(e.target.value));
  };
  const handlePassword = (e) => {
    dispatch(updatePassword(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: loginData.email,
      password: loginData.password,
    };
    try {
      const loginResponse = await fetch(
        `${backendConnection}${developerConnectionString}login`,
        {
          method: "POST",
          // you have to include this inorder to set the cookies inside your browser
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (loginResponse.ok) {
        router.push("/developer/api/dashboard");
      } else {
        console.log(loginResponse.status);
        if (loginResponse.status === 401) console.log("Invalid Error");
        dispatch(updatePopupVisibility(true));
        dispatch(updateWarningSign(true));
        dispatch(updateIconColor("red"));
        dispatch(updateText("Cannot logged you in"));
      }
      const data = await loginResponse.json();
    } catch (err) {
      console.error("error: ", err);
    } finally {
      console.log("fetch Completed");
    }
  };
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authResponse = await fetch(
          `
    ${backendConnection}${developerConnectionString}verify
    `,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (authResponse.ok) {
          router.push("/developer/api/dashboard");
        }
      } catch (err) {
        console.log(err);
      }
    };
    checkAuth();
  }, []);

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
        <LoginInput
          text={"email"}
          type={"email "}
          autoComplete="off"
          value={loginData.email}
          handleInput={handleMail}
        />
        <div className="relative">
          <LoginInput
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
