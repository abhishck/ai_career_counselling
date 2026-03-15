const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            AI Powered <span className="text-blue-600">Career Counselling</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Choosing the right career path can be confusing. Our AI powered
            system helps students and professionals discover the best career
            opportunities based on their interests, skills and education.
          </p>

          <p className="mt-4 text-gray-600">
            The platform analyzes multiple factors and generates personalized
            career recommendations along with a clear roadmap for success.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Start Assessment
            </button>

            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              Explore Careers
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/professional-career-elements-design_1200-212.jpg?semt=ais_hybrid&w=740&q=80"
            className="w-96 rounded-lg cursor-pointer"
          />
        </div>

      </div>

    </section>
  );
};

export default Hero;