import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CareerForm() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    education: "",
    interest: "",
    skill: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("User Data:", formData);

    // Later we will send this data to backend
    navigate("/career-test");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-2xl">

        <h1 className="text-3xl font-bold text-center mb-6">
          Start Your Career Assessment
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Fill in the details below and begin your AI career test
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}

          <div>
            <label className="block mb-2 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              placeholder="Enter your email"
            />
          </div>

          {/* Education */}

          <div>
            <label className="block mb-2 font-medium">Education Level</label>
            <select
              name="education"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            >
              <option value="">Select</option>
              <option>High School</option>
              <option>Undergraduate</option>
              <option>Postgraduate</option>
            </select>
          </div>

          {/* Interest */}

          <div>
            <label className="block mb-2 font-medium">Primary Interest</label>
            <select
              name="interest"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            >
              <option value="">Select</option>
              <option>Technology</option>
              <option>Business</option>
              <option>Healthcare</option>
              <option>Arts & Design</option>
              <option>Science</option>
            </select>
          </div>

          {/* Skills */}

          <div>
            <label className="block mb-2 font-medium">Your Strongest Skill</label>
            <select
              name="skill"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            >
              <option value="">Select</option>
              <option>Problem Solving</option>
              <option>Creativity</option>
              <option>Communication</option>
              <option>Leadership</option>
            </select>
          </div>

          {/* Submit */}

         <Link to="/career-test">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Start Career Test
          </button></Link>

        </form>

      </div>

    </div>
  );
}

export default CareerForm;