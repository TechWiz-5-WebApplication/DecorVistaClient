import React, { useState } from "react";
import { FaUser, FaExchangeAlt, FaKey, FaGoogle, FaBell, FaCog, FaUpload, FaFolder, FaSearch, FaShare } from "react-icons/fa";
import { RiRefund2Fill } from "react-icons/ri";
import { AiOutlineApi } from "react-icons/ai";

const AccountDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    accountStatus: "Active",
    recentTransactions: [
      { id: 1, date: "2023-06-01", amount: 100, description: "Subscription payment" },
      { id: 2, date: "2023-05-28", amount: 50, description: "Referral bonus" },
    ],
    referralCredits: 200,
    apiKeys: [
      { id: 1, name: "Production API Key", key: "prod_api_123456" },
      { id: 2, name: "Development API Key", key: "dev_api_789012" },
    ],
    driveStorage: {
      used: 5,
      total: 15,
    },
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={user.profilePicture}
                  alt={user.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">{user.name}</h3>
                  <p className="text-gray-600">{user.email}</p>
                  <span className="inline-block bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                    {user.accountStatus}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                  Update Personal Information
                </button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300 ml-2">
                  Manage Security Settings
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Amount</th>
                    <th className="pb-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {user.recentTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="py-2">{transaction.date}</td>
                      <td className="py-2">${transaction.amount}</td>
                      <td className="py-2">{transaction.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case "referral":
        return (
          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Referral Credits</h2>
            <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
              <div>
                <p className="text-lg font-semibold">Available Credits</p>
                <p className="text-3xl font-bold text-green-500">${user.referralCredits}</p>
              </div>
              <RiRefund2Fill className="text-5xl text-green-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Refer a Friend</h3>
              <p className="mb-4">Share your referral code and earn credits when friends sign up!</p>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value="REF123456"
                  readOnly
                  className="border rounded px-3 py-2 w-full"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                  Copy
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Share on Social Media</h3>
              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                  Facebook
                </button>
                <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300">
                  Twitter
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        );
      case "api":
        return (
          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <h2 className="text-2xl font-semibold mb-4">API Management</h2>
            <div>
              <h3 className="text-xl font-semibold mb-2">API Keys</h3>
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="pb-2">Name</th>
                    <th className="pb-2">Key</th>
                    <th className="pb-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {user.apiKeys.map((apiKey) => (
                    <tr key={apiKey.id}>
                      <td className="py-2">{apiKey.name}</td>
                      <td className="py-2">
                        <code className="bg-gray-100 px-2 py-1 rounded">{apiKey.key}</code>
                      </td>
                      <td className="py-2">
                        <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                        <button className="text-red-500 hover:text-red-700">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                Generate New API Key
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">API Documentation</h3>
              <p className="mb-2">
                Access our comprehensive API documentation to integrate our services into your
                applications.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                View API Documentation
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">API Usage Analytics</h3>
              <p className="mb-2">Monitor your API usage and performance metrics.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                View Analytics Dashboard
              </button>
            </div>
          </div>
        );
      case "drive":
        return (
          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Google Drive Integration</h2>
            <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
              <div>
                <p className="text-lg font-semibold">Storage Usage</p>
                <p className="text-3xl font-bold">
                  {user.driveStorage.used}GB / {user.driveStorage.total}GB
                </p>
              </div>
              <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${(user.driveStorage.used / user.driveStorage.total) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                <FaUpload className="mr-2" /> Upload File
              </button>
              <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                <FaFolder className="mr-2" /> Create Folder
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Recent Files</h3>
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="pb-2">Name</th>
                    <th className="pb-2">Size</th>
                    <th className="pb-2">Modified</th>
                    <th className="pb-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">Document.pdf</td>
                    <td className="py-2">2.5 MB</td>
                    <td className="py-2">2023-06-01</td>
                    <td className="py-2">
                      <button className="text-blue-500 hover:text-blue-700 mr-2">
                        <FaSearch />
                      </button>
                      <button className="text-green-500 hover:text-green-700">
                        <FaShare />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2">Image.jpg</td>
                    <td className="py-2">1.8 MB</td>
                    <td className="py-2">2023-05-28</td>
                    <td className="py-2">
                      <button className="text-blue-500 hover:text-blue-700 mr-2">
                        <FaSearch />
                      </button>
                      <button className="text-green-500 hover:text-green-700">
                        <FaShare />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Account Management Dashboard</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <nav className="bg-white p-4 rounded-lg shadow-md">
            <ul className="space-y-2">
              <li>
                <button
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeTab === "overview" ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("overview")}
                >
                  <FaUser className="inline-block mr-2" /> Account Overview
                </button>
              </li>
              <li>
                <button
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeTab === "referral" ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("referral")}
                >
                  <FaExchangeAlt className="inline-block mr-2" /> Referral Credits
                </button>
              </li>
              <li>
                <button
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeTab === "api" ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("api")}
                >
                  <AiOutlineApi className="inline-block mr-2" /> API Management
                </button>
              </li>
              <li>
                <button
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeTab === "drive" ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("drive")}
                >
                  <FaGoogle className="inline-block mr-2" /> Google Drive Integration
                </button>
              </li>
            </ul>
          </nav>
          <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
            <ul className="space-y-2">
              <li>
                <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">
                  <FaBell className="inline-block mr-2" /> Notifications
                </button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">
                  <FaCog className="inline-block mr-2" /> Settings
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-3/4">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default AccountDashboard;
