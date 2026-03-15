import React from "react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-blue-600 text-white py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Discover Your Future Career?
      </h2>

      <p className="mb-6 text-blue-100">
        Take our AI-powered career assessment and get personalized career
        recommendations.
      </p>

      <Link to="/career-start">
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg cursor-pointer">
          Start Career Test
        </button>
      </Link>
    </section>
  );
}

export default CTA;
