import React from "react";
import NavBar from "./component/navbar";

import {
  FiSearch,
  FiMessageSquare,
  FiStar,
  FiPaperclip,
  FiMic,
} from "react-icons/fi";
import {
  FaFacebook,
  FaEnvelope,
  FaGlobe,
  FaDiscord,
  FaComments,
  FaCog,
} from "react-icons/fa";

const TickPortal = () => {
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

  const features = [
    {
      title: "Centralized Messaging",
      description:
        "Aggregate all messages from Facebook, Email, and Website into a single interface.",
    },
    {
      title: "Discord Integration",
      description:
        "All messages are sent to TickLab Discord server for improved visibility and quicker responses.",
    },
    {
      title: "Targeted Communication",
      description:
        "Send messages directly to specific users or groups based on their preferred channel.",
    },
    {
      title: "Automated Responses",
      description:
        "Configure pre-defined messages for automatic sending, reducing manual effort.",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main>
          <section
            id="home"
            className="bg-gradient-to-r from-green-400 to-green-600 text-white py-20 text-center"
          >
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-4">
                Welcome to TickLab Communication Hub
              </h2>
              <p className="text-xl mb-8">
                Streamline your communication across multiple platforms with our
                centralized messaging solution.
              </p>
              <a
                href="#features"
                className="bg-white text-green-500 py-2 px-6 rounded-full font-semibold hover:bg-green-100 transition duration-300"
              >
                Explore Features
              </a>
            </div>
          </section>
          

          <section id="features" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold mb-12 text-center">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md text-center"
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="bg-green-100 py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold mb-8 text-center">
                About TickLab Communication Hub
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
                TickLab Communication Hub is designed to address the challenges
                of managing multiple communication channels. By consolidating
                messages from Facebook, Email, and our Website, we aim to
                improve response times, prevent missed inquiries, and streamline
                our communication process.
              </p>
            </div>
          </section>

          <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold mb-8 text-center">
                Contact Us
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <a
                  href="https://facebook.com/ticklab.vn"
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <FaFacebook className="text-2xl mr-2" /> /ticklab.vn
                </a>
                <a
                  href="mailto:ticklab.vn@gmail.com"
                  className="flex items-center text-red-600 hover:text-red-800"
                >
                  <FaEnvelope className="text-2xl mr-2" /> ticklab.vn@gmail.com
                </a>
                <a
                  href="https://ticklab.vn"
                  className="flex items-center text-green-600 hover:text-green-800"
                >
                  <FaGlobe className="text-2xl mr-2" /> ticklab.vn
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 text-white py-6 text-center">
          <p>&copy; 2023 TickLab Communication Hub. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default TickPortal;
