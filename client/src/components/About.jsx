const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/professional-career-elements-design_1200-212.jpg?semt=ais_hybrid&w=740&q=80"
            className="w-96 rounded-lg cursor-pointer"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            About Our Platform
          </h2>

          <p className="mt-6 text-gray-600">
            AI Career Counselling is designed to help students and
            professionals identify the most suitable career paths
            using advanced artificial intelligence technology.
          </p>

          <p className="mt-4 text-gray-600">
            The platform collects information about users' interests,
            education, and skills. Using AI algorithms, it analyzes
            this data and provides personalized career recommendations
            and development plans.
          </p>

          <p className="mt-4 text-gray-600">
            Our mission is to reduce career confusion and guide
            individuals towards opportunities that match their
            potential and passion.
          </p>
        </div>

      </div>

    </section>
  );
};

export default About;