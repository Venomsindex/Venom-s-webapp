import React from 'react'
import './style.css'

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Instant Insights, Zero Hassle
              </h1>
              <p className="text-gray-300 text-lg md:text-xl">
                Add Venom's Index to your browser for real-time market sentiment analysis and curated news updates.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-500/25">
                Download Now
              </button>
              <button className="px-8 py-4 bg-white/10 rounded-lg text-white font-semibold hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {[
                "Real-time News Updates",
                "Sentiment Analysis",
                "Market Mood Monitor",
                "Credibility Scoring"
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Info Box */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                About VENOM'S Index
              </h3>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  VENOM'S Index is a cutting-edge stock market insights extension designed to help investors make data-driven decisions. It aggregates real-time market trends, sentiment analysis, and predictive analytics into a single, easy-to-use dashboard.
                </p>
                
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-500/10 p-2 rounded-lg mt-1">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <p className="text-sm">Leverages AI and machine learning to identify undervalued stocks, potential breakouts, and market anomalies.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/10 p-2 rounded-lg mt-1">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm">Analyzes news, social media, and financial reports to gauge investor sentiment with risk ratings and investment scores.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-purple-500/10 p-2 rounded-lg mt-1">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm">Features customizable alerts and visualizations, suitable for both beginners and seasoned traders.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
