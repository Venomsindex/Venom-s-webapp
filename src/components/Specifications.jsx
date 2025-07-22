import React from "react";
import { motion } from "framer-motion";

const Specifications = () => {
  const features = [
    {
      title: "Real-Time News Updates",
      description: "Stay ahead with AI-curated market insights and trends",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
    {
      title: "Sentiment Analysis",
      description: "Get the market mood and emotional insights on review",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
    },
    {
      title: "Credibility Score",
      description: "Reliability check for each piece of information",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      ),
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
      {/* Background Accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Why Choose Venom Index?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the next generation of market analysis with our comprehensive suite of tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                
                {/* Hover Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-500/25">
            Get Started Now
          </button>
          <p className="mt-4 text-sm text-gray-400">
            Join thousands of users already benefiting from Venom Index
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Specifications;
