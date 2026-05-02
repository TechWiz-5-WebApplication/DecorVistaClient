import React from 'react';
import SidebarMenuAccount from '../components/Account/SidebarMenuAccount';

const ProfileHeader = () => {
  return (
    <div className="relative w-full h-60 bg-gray-200">
      {/* Cover Photo */}
      <img
        src="https://st.hzcdn.com/simgs/9a61266d0cff6a80_17-4641/home-design.jpg"
        alt="Cover"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Avatar and Profile Info */}
      <div className="relative flex items-center justify-between px-8 py-4">
        <div className="relative flex items-center space-x-4">
          {/* Avatar */}
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white">
            <img
              src="https://st.hzcdn.com/fimgs/8133285e06e921e6_4599-w173-h173-b0-p0--_.jpg"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
            <span
              onClick={() => alert('Edit photo clicked')}
              className="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full flex justify-center items-center cursor-pointer text-white"
            >
              <i className="icon-camera" />
            </span>
          </div>

          <div>
            <h1 className="text-2xl font-semibold text-white">Hậu Nguyễn Thanh</h1>
            <a
              href="#"
              className="text-sm text-gray-300 hover:underline"
            >
              Get Reviews
            </a>
          </div>
        </div>

        {/* Edit Button */}
        <button
          className="px-4 py-2 bg-white text-gray-800 rounded-lg shadow hover:bg-gray-100"
          onClick={() => alert('Done Editing clicked')}
        >
          Done Editing
        </button>
      </div>
    </div>
  );
};

const AccountInformation = () => {
  return (
    <section className="my-6 p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Account Information</h2>
      <div className="space-y-4">
        {/* Username */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">User Name</p>
            <p className="text-gray-500">hau_nguyenthanh</p>
          </div>
          <button className="text-blue-500 hover:underline">Edit</button>
        </div>

        {/* Email */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">Email (private)</p>
            <p className="text-gray-500">z1001st.com@gmail.com</p>
          </div>
          <button className="text-blue-500 hover:underline">Edit</button>
        </div>
      </div>
    </section>
  );
};

const BusinessInformation = () => {
  return (
    <section className="my-6 p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Public Business Information</h2>
      <div className="space-y-4">
        {/* Firm Name */}
        <div>
          <label className="block font-semibold" htmlFor="firmName">
            Professional/Firm Name
          </label>
          <input
            id="firmName"
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value="Hậu Nguyễn Thanh"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="Interior Designer">Interior Designer</option>
            <option value="Architect">Architect</option>
          </select>
        </div>

        {/* Website */}
        <div>
          <label className="block font-semibold" htmlFor="website">
            Website
          </label>
          <input
            id="website"
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter website"
          />
        </div>

        {/* First and Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value="Hậu"
            />
          </div>
          <div>
            <label className="block font-semibold" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value="Nguyễn Thanh"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfilePage = () => {
  return (
    <div className="container mx-auto p-6">
      <ProfileHeader />
      <div className="grid grid-cols-12 gap-6">
        {/* Left Sidebar (Account Links) */}
        <div className="col-span-2 space-y-4">
            <SidebarMenuAccount />
        </div>

        {/* Main Content */}
        <div className="col-span-10 space-y-6">
          <AccountInformation />
          <BusinessInformation />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
