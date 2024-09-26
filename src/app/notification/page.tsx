import React from "react";
import NavBar from "../component/navbar";

import {
  FiSearch,
  FiMessageSquare,
  FiStar,
  FiPaperclip,
  FiMic,
} from "react-icons/fi";

const TickPortal = () => {
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

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        {/* Chat Section */}
        <div className="flex-1 flex overflow-hidden">
          {/* Message List */}
          <div className="w-1/3 border-r border-gray-200 bg-white overflow-y-auto">
            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search messages"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                />
                <div className="absolute top-3 left-3">
                  <FiSearch className="text-gray-500" />
                </div>
              </div>
            </div>
            {messages.map((message) => (
              <div
                key={message.id}
                className="flex items-center p-4 hover:bg-gray-100 cursor-pointer"
              >
                <img
                  src={message.avatar}
                  alt={message.name}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{message.name}</h3>
                  <p className="text-gray-600">{message.lastMessage}</p>
                </div>
                <div className="text-sm text-gray-500">{message.timestamp}</div>
                <button className="ml-2 text-gray-400 hover:text-yellow-500">
                  <FiStar className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>

          {/* Active Chat Window */}
          <div className="flex-1 flex flex-col bg-gray-50">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {conversation.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {message.type === "audio" ? (
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-500 hover:text-blue-600">
                          <svg
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                        <div className="text-sm">{message.duration}</div>
                      </div>
                    ) : (
                      <p>{message.text}</p>
                    )}
                    <div className="text-right mt-1 text-xs opacity-50">
                      {message.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white border-t border-gray-200 px-4 py-3">
              <div className="flex items-center">
                <button className="p-2 rounded-full text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <FiPaperclip className="h-5 w-5" />
                </button>
                <input
                  type="text"
                  placeholder="Type a message"
                  className="flex-1 mx-4 py-2 border rounded-full px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="p-2 rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <FiMessageSquare className="h-5 w-5" />
                </button>
                <button className="ml-2 p-2 rounded-full text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <FiMic className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TickPortal;
