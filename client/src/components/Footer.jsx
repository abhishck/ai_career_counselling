const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-xl font-semibold text-white">
            AI Career Counselling
          </h3>

          <p className="mt-4">
            Helping students and professionals discover their ideal
            career path using artificial intelligence.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">
            Quick Links
          </h4>

          <ul className="space-y-2">
            <li>Home</li>
            <li>Assessment</li>
            <li>Careers</li>
            <li>Dashboard</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">
            Contact
          </h4>

          <p>Email: support@aicareer.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      </div>

      <p className="text-center text-sm mt-10">
        © 2026 AI Career Counselling Platform
      </p>

    </footer>
  );
};

export default Footer;