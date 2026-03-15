import React from "react";

function HowItWorks() {
  return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-12">
          How Our AI Career Counsellor Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              1️⃣ Take Career Test
            </h3>
            <p className="text-gray-600">
              Answer a few questions about your interests,
              skills, and personality.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              2️⃣ AI Analysis
            </h3>
            <p className="text-gray-600">
              Our AI analyzes your responses and
              identifies the best career paths.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              3️⃣ Get Career Recommendations
            </h3>
            <p className="text-gray-600">
              Receive personalized career suggestions
              tailored to you.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;