const Objective = () => {
  return (
    <section id="objective" className="min-h-screen flex items-center bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Objective
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            The main objective of this platform is to help students and
            professionals make informed career decisions using artificial
            intelligence.
          </p>

          <p className="mt-4 text-gray-600">
            Many individuals struggle to identify the right career path
            because they lack proper guidance. Our platform analyzes
            interests, strengths, academic background, and goals to
            provide accurate career recommendations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-14">

          <div className="p-8 bg-gray-50 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">AI Career Analysis</h3>
            <p className="mt-3 text-gray-600">
              Our system evaluates user inputs using AI models and
              provides suitable career paths tailored to each individual.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Skill Identification</h3>
            <p className="mt-3 text-gray-600">
              The platform identifies user strengths and skills and
              suggests careers where these abilities can be used effectively.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Career Roadmap</h3>
            <p className="mt-3 text-gray-600">
              Users receive a step-by-step roadmap including required
              education, certifications and job opportunities.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Objective;