import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaBriefcase, FaBuilding, FaLink, FaPen } from "react-icons/fa";

const ProfessionalRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    profession: "",
    companyName: "",
    portfolioLink: "",
    bio: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    switch (name) {
      case "fullName":
        newErrors.fullName = value.trim() === "" ? "Full name is required" : "";
        break;
      case "email":
        newErrors.email = !/^\S+@\S+\.\S+$/.test(value) ? "Invalid email address" : "";
        break;
      case "password":
        newErrors.password = value.length < 8 ? "Password must be at least 8 characters long" : "";
        break;
      case "profession":
        newErrors.profession = value === "" ? "Please select a profession" : "";
        break;
      case "companyName":
        newErrors.companyName = value.trim() === "" ? "Company name is required" : "";
        break;
      case "bio":
        newErrors.bio = value.trim().length > 500 ? "Bio must be 500 characters or less" : "";
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields before submission
    Object.keys(formData).forEach(key => validateField(key, formData[key]));
    
    // Check if there are any errors
    if (Object.values(errors).every(error => error === "")) {
      console.log("Form submitted:", formData);
      // TODO: Add API call to submit form data
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
     <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md mt-1">
        <h2 className=" text-center text-3xl font-extrabold text-gray-900">
          Register as a Professional
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Join our network of interior designers, architects, and contractors
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  autoComplete="name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${errors.fullName ? "border-red-500" : ""}`}
                  placeholder="John Doe"
                />
              </div>
              {errors.fullName && <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${errors.email ? "border-red-500" : ""}`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
            </div>

       

            <div>
              <label htmlFor="profession" className="block text-sm font-medium text-gray-700">
                Profession
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaBriefcase className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <select
                  name="profession"
                  id="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  className={`block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${errors.profession ? "border-red-500" : ""}`}
                >
                  <option value="">Select a profession</option>
                  <option value="interior-designer">Interior Designer</option>
                  <option value="architect">Architect</option>
                  <option value="contractor">Contractor</option>
                </select>
              </div>
              {errors.profession && <p className="mt-2 text-sm text-red-600">{errors.profession}</p>}
            </div>

            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaBuilding className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${errors.companyName ? "border-red-500" : ""}`}
                  placeholder="Your Company Ltd."
                />
              </div>
              {errors.companyName && <p className="mt-2 text-sm text-red-600">{errors.companyName}</p>}
            </div>

            <div>
              <label htmlFor="portfolioLink" className="block text-sm font-medium text-gray-700">
                Portfolio Link (Optional)
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLink className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="url"
                  name="portfolioLink"
                  id="portfolioLink"
                  value={formData.portfolioLink}
                  onChange={handleChange}
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                Short Bio
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 pt-2 flex items-start pointer-events-none">
                  <FaPen className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <textarea
                  name="bio"
                  id="bio"
                  rows="3"
                  value={formData.bio}
                  onChange={handleChange}
                  className={`block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${errors.bio ? "border-red-500" : ""}`}
                  placeholder="Tell us about your experience and expertise..."
                ></textarea>
              </div>
              {errors.bio && <p className="mt-2 text-sm text-red-600">{errors.bio}</p>}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div></>
  );
};

export default ProfessionalRegistration;
