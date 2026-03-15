const Reviews = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Engineering Student",
      text: "This AI career platform helped me discover new career paths that perfectly matched my interests."
    },
    {
      name: "Ananya Singh",
      role: "MBA Aspirant",
      text: "The recommendations were very accurate and the career roadmap helped me plan my future."
    },
    {
      name: "Amit Verma",
      role: "Computer Science Student",
      text: "A great tool for students who are confused about their career choices."
    }
  ];

  return (
    <section id="reviews" className="min-h-screen flex items-center bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-800">
          User Reviews
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Thousands of students have already used our platform to discover
          their ideal career paths.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-14">

          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md">

              <p className="text-gray-600">"{review.text}"</p>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-800">
                  {review.name}
                </h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Reviews;