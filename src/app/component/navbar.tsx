"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import Logo from "./logo";
import { useUserStore } from "../store/userStore";

const NavBar = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div className=" shadow-sm z-10 border-b-4">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="flex justify-between gap-3 md:gap-6 items-center">
            <Link
              href="/"
              className="flex items-center px-4 py-4 text-gray-700 hover:bg-gray-100 rounded-md font-bold text-xl"
            >
              <FiHome className="text-2xl" />{" "}
              <span className="hidden md:inline-block  ml-2">Home</span>
            </Link>
            <Link
              href="/notification"
              className="flex items-center px-4 py-4 text-gray-700 hover:bg-gray-100 rounded-md font-bold text-xl"
            >
              <IoNotificationsOutline className="text-2xl " />
              <span className="hidden md:inline-block  ml-2">Notification</span>
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center px-4 py-4 text-gray-700 hover:bg-gray-100 rounded-md font-bold text-xl"
            >
              <MdOutlineDashboard className="text-2xl" />
              <span className="hidden md:inline-block ml-2">Dashboard</span>
            </Link>
          </div>

          {user.username ? (
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full cursor-pointer"
                  src={user.avatarUrl || ""}
                  alt={user.username || "username"}
                />
              </div>
            </div>
          ) : (
            <Link
              href="/signin"
              className=" hover:bg-gray-100 font-bold border border-gray-300  py-2 px-4 rounded-full"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
