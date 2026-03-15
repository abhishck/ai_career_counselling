import React from "react";
import { Link } from "react-router-dom";

function CareerStart() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-10 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          AI Career Assessment
        </h1>

        <p className="text-gray-600 mb-8 text-lg">
          Our AI-powered system will analyze your interests, skills, and
          personality to recommend the best career paths for you.
        </p>

        {/* Benefits */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold mb-2">Quick Test</h3>
            <p className="text-sm text-gray-600">
              Complete the assessment in just 3–5 minutes.
            </p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold mb-2">AI Analysis</h3>
            <p className="text-sm text-gray-600">
              Our AI analyzes your responses intelligently.
            </p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold mb-2">Career Suggestions</h3>
            <p className="text-sm text-gray-600">
              Get personalized career recommendations.
            </p>
          </div>
        </div>

        {/* Start Button */}

        <Link to="/career-form">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Start Assessment
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CareerStart;
