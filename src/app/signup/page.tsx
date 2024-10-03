"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Use the new 'next/navigation' hook for the App Router
import { Alert, Button, Label, Navbar, TextInput } from "flowbite-react";
import axios from "axios";
import Logo from "../component/logo";
import dotenv from "dotenv";
import { HiInformationCircle } from "react-icons/hi";

dotenv.config();
const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    //password: "",
    username: "",
  });
  const [err, setErr] = useState("");
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);

    axios
      .post(process.env.NEXT_PUBLIC_SERVER_URL + "/auth/signup", formData)
      .then((res) => {
        console.log(res.data);
        router.push("/signin");
      })
      .catch((err) => {
        console.log(err);
        setErr(err.response.data.message);
      });
  };

  return (
    <div className="min-h-screen mt-20 ">
      <div className="flex max-w-3xl px-5 mx-auto flex-col md:flex-row ">
        <div className="flex-1 mt-24">
          <Link href="/" className="self-center text-4xl font-bold ">
            <Logo />
          </Link>
          <p className="mt-5">TickLab Communication Hub</p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <Label value="Email"></Label>
            <TextInput
              type="email"
              placeholder="Email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            ></TextInput>
            <Label value="Username"></Label>
            <TextInput
              type="text"
              placeholder="Username"
              id="username"
              value={formData.username}
              onChange={handleChange}
            ></TextInput>
            <Label value="Password"></Label>

            {/* <TextInput
              type="password"
              placeholder="Password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            ></TextInput> */}

            <button className="text-white bg-green-600 rounded-lg py-1 font-bold">
              Sign Up
            </button>
            <p>
              Already have an account?{" "}
              <Link href="/signin" className="t">
                Sign In
              </Link>
            </p>
          </form>
          {err && (
            <Alert
              color="failure"
              className="text-center"
              icon={HiInformationCircle}
            >
              {err}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
