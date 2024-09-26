"use client";

import React, { useState } from "react";
import {
  FiHome,
  FiMail,
  FiFacebook,
  FiPieChart,
  FiLogOut,
  FiSearch,
  FiBell,
  FiSettings,
  FiMessageSquare,
  FiStar,
  FiPaperclip,
  FiMic,
  FiUser,
  FiLock,
  FiUserPlus,
  FiUsers,
  FiTrash2,
  FiEdit,
  FiUserCheck,
  FiUserX,
  FiList,
  FiActivity,
  FiShield,
} from "react-icons/fi";

const TickPortal = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const user = {
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };

  const messages = [
    {
      id: 1,
      name: "Alice Smith",
      lastMessage: "Hey, how are you?",
      timestamp: "10:30 AM",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      name: "Bob Johnson",
      lastMessage: "Did you see the latest update?",
      timestamp: "9:45 AM",
      avatar:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 3,
      name: "Charlie Brown",
      lastMessage: "Let's meet tomorrow",
      timestamp: "Yesterday",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  const conversation = [
    { id: 1, text: "Hi there!", sender: "user", timestamp: "10:30 AM" },
    {
      id: 2,
      text: "Hello! How can I help you today?",
      sender: "other",
      timestamp: "10:31 AM",
    },
    {
      id: 3,
      text: "I have a question about the new feature.",
      sender: "user",
      timestamp: "10:32 AM",
    },
    {
      id: 4,
      text: "Sure, I'd be happy to help. What would you like to know?",
      sender: "other",
      timestamp: "10:33 AM",
    },
    {
      id: 5,
      type: "audio",
      duration: "0:30",
      sender: "user",
      timestamp: "10:35 AM",
    },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return (
          <div className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">Total Users</h3>
                <p className="text-2xl md:text-3xl font-bold">1,234</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">Active Users</h3>
                <p className="text-2xl md:text-3xl font-bold">987</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">Total Messages</h3>
                <p className="text-2xl md:text-3xl font-bold">5,678</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">New Signups</h3>
                <p className="text-2xl md:text-3xl font-bold">45</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">Active Sessions</h3>
                <p className="text-2xl md:text-3xl font-bold">234</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">Inactive Users</h3>
                <p className="text-2xl md:text-3xl font-bold">247</p>
              </div>
            </div>
          </div>
        );
      case "user-management":
        return (
          <div className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              User Management
            </h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Add User</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 border rounded"
                />
                <select className="w-full p-2 border rounded">
                  <option>Admin</option>
                  <option>Moderator</option>
                  <option>User</option>
                </select>
                <select className="w-full p-2 border rounded">
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
                <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                  Add User
                </button>
              </form>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">User List</h3>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="p-2">Name</th>
                      <th className="p-2">Email</th>
                      <th className="p-2">Role</th>
                      <th className="p-2">Status</th>
                      <th className="p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2">John Doe</td>
                      <td className="p-2">john@example.com</td>
                      <td className="p-2">Admin</td>
                      <td className="p-2">Active</td>
                      <td className="p-2">
                        <button className="mr-2 text-blue-500 hover:text-blue-700">
                          <FiEdit />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <FiTrash2 />
                        </button>
                      </td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case "security":
        return (
          <div className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Security and Logs
            </h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Audit Logs</h3>
              <div className="bg-white p-4 rounded-lg shadow">
                <p>Log entry 1: User removed (2023-06-10 14:30)</p>
                <p>Log entry 2: Permission changed (2023-06-10 15:45)</p>
                {/* Add more log entries */}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Ban/Unban Users</h3>
              <div className="bg-white p-4 rounded-lg shadow">
                <input
                  type="text"
                  placeholder="User email"
                  className="w-full p-2 border rounded mb-2"
                />
                <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600 mr-2">
                  Ban User
                </button>
                <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
                  Unban User
                </button>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Security Settings</h3>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-2">
                  <input type="checkbox" id="twoFactor" className="mr-2" />
                  <label htmlFor="twoFactor">
                    Enforce Two-Factor Authentication
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="passwordPolicy" className="mr-2" />
                  <label htmlFor="passwordPolicy">Strict Password Policy</label>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`md:w-64 bg-white shadow-md ${
          isSidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        
        <nav className="mt-2">
          <button
            onClick={() => setCurrentPage("dashboard")}
            className={`flex items-center w-full px-4 py-2 text-left ${
              currentPage === "dashboard"
                ? "text-white bg-blue-500"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <FiHome className="mr-3" /> Dashboard
          </button>
          <button
            onClick={() => setCurrentPage("user-management")}
            className={`flex items-center w-full px-4 py-2 text-left ${
              currentPage === "user-management"
                ? "text-white bg-blue-500"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <FiUsers className="mr-3" /> User Management
          </button>
          <button
            onClick={() => setCurrentPage("security")}
            className={`flex items-center w-full px-4 py-2 text-left ${
              currentPage === "security"
                ? "text-white bg-blue-500"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <FiShield className="mr-3" /> Security
          </button>

          <button className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200 mt-auto">
            <FiLogOut className="mr-3" /> Log out
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">


        {/* Page Content */}
        <div className="flex-1 overflow-y-auto">{renderPage()}</div>
      </div>
    </div>
  );
};

export default TickPortal;
