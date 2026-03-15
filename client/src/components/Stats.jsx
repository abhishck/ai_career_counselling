import React from "react";

function Stats() {
  return (
    <section className="py-16 bg-gray-100">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">

        <div>
          <h2 className="text-4xl font-bold text-blue-600">10,000+</h2>
          <p className="text-gray-600 mt-2">Students Guided</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-600">150+</h2>
          <p className="text-gray-600 mt-2">Career Paths</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-600">95%</h2>
          <p className="text-gray-600 mt-2">Satisfaction Rate</p>
        </div>

      </div>

    </section>
  );
}

export default Stats;