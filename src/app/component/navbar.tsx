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
    <div className=" shadow-sm z-10">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <Link
            href="/"
            className="flex items-center px-4 py-4 text-gray-700 hover:bg-blue-200 rounded-md font-bold text-xl"
          >
            <FiHome className="mr-3" /> Home
          </Link>
          <Link
            href="/notification"
            className="flex items-center px-4 py-4 text-gray-700 hover:bg-blue-200 rounded-md font-bold text-xl"
          >
            <IoNotificationsOutline className="mr-3" /> Notification
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center px-4 py-4 text-gray-700 hover:bg-blue-200 rounded-md font-bold text-xl"
          >
            <MdOutlineDashboard className="mr-3" /> Dashboard
          </Link>

          {user.username ? (
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 rounded-full cursor-pointer"
                  src={user.avatarUrl || ""}
                  alt={user.username || "username"}
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  {user.username}
                </div>
              </div>
            </div>
          ) : (
            <Link
              href="/signin"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
