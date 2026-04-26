import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MessageSquare, Send, ArrowLeft } from "lucide-react";
import { AuthContext } from "../context/AuthContext.jsx";

const defaultMessages = [
  {
    id: 1,
    sender: "bot",
    text: "Hello! I’m your career chatbot. Ask me anything about resumes, interviews, or career growth.",
  },
];

const cannedReplies = [
  "That sounds like a great question. Can you share a bit more detail?",
  "I recommend highlighting your achievements with metrics and specific results.",
  "For that role, emphasize relevant projects and technical skills.",
  "If you want, I can help you draft a stronger summary statement.",
  "A good next step is to quantify your work and mention tools you used.",
];

const getBotReply = (message) => {
  const text = message.toLowerCase();
  if (text.includes("resume") || text.includes("cv")) {
    return "I can help review your resume structure, skills, and suggestions for improvement.";
  }
  if (text.includes("interview")) {
    return "Prepare concise stories using STAR and focus on your results.";
  }
  if (text.includes("job") || text.includes("role")) {
    return "Tell me your target job role and I’ll help you align your resume.";
  }
  return cannedReplies[Math.floor(Math.random() * cannedReplies.length)];
};

const Chatbot = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [messages, setMessages] = useState(defaultMessages);
  const [input, setInput] = useState("");
  const chatBottomRef = useRef(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: getBotReply(text),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 px-4 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-blue-600" />
              Career Chatbot
            </h1>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Chat with a career assistant to get resume advice, interview tips,
              and role recommendations.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/resume-upload"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Analyzer
            </Link>
          </div>
        </div>

        <div className="rounded-3xl bg-white shadow-xl overflow-hidden">
          <div className="border-b border-slate-200 bg-slate-100 px-6 py-5 sm:px-8">
            <p className="text-sm font-semibold text-slate-700">Chat history</p>
          </div>

          <div className="h-140 overflow-y-auto px-6 py-6 sm:px-8 space-y-4 bg-linear-to-b from-slate-50 via-white to-slate-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xl rounded-3xl px-5 py-4 shadow-sm ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-slate-100 text-slate-800 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm leading-6 whitespace-pre-wrap">
                    {message.text}
                  </p>
                </div>
              </div>
            ))}
            <div ref={chatBottomRef} />
          </div>

          <div className="border-t border-slate-200 bg-white px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                rows={2}
                placeholder="Type your message..."
                className="min-h-16 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
              <button
                onClick={handleSend}
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                disabled={!input.trim()}
              >
                <Send className="w-4 h-4 mr-2" />
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
