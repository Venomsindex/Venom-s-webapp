import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-gray-100">
      <div className="max-w-5xl mx-auto bg-gray-9ap00 rounded-xl shadow-2xl p-8 sm:p-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-8 animate-fade-in">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 text-center mb-12">
          <strong>Effective Date:</strong> April 21, 2025
        </p>

        {/* Section 1 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            1. No Data Collection
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            The <strong>Venoms Index</strong> Chrome Extension{" "}
            <strong>does not collect, store, or share any personal information</strong>.
            We do not gather any personally identifiable information such as your name, email address, or browsing activity.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our extension solely provides access to publicly available news related to business and finance. No data from your usage is collected or stored.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            2. Our Services
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            The <strong>Venoms Index</strong> Chrome Extension aggregates and displays{" "}
            <strong>publicly available news articles</strong> related to business and finance.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We fetch content from third-party news sources and present it to you without tracking, storing, or analyzing your activity or engagement.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            3. No User Tracking
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            We do not track or store any information about how you interact with the <strong>Venoms Index</strong> Chrome Extension.
          </p>
          <p className="text-gray-300 leading-relaxed">
            No cookies, local storage, or tracking technologies are used. We do not monitor user behavior or collect data such as articles viewed, time spent, or interaction details.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            4. Third-Party Services
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            The extension may link to third-party websites or services for news content. These external services are not controlled by us, and we are not responsible for their privacy practices.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We encourage you to review the privacy policies of any external websites you access through the extension.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            5. Data Security
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            As we do not collect personal data, there is no user data to secure.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We ensure the extension is developed with high standards to prevent any potential misuse.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            6. Policy Updates
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            We may update this Privacy Policy from time to time. Significant changes will be reflected by an updated effective date, and we will notify users if required.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Please check this page periodically for updates.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            7. Contact Us
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            For any questions or concerns, please reach out to us:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@venomsindex.com"
                className="text-blue-400 underline hover:text-blue-300 transition-colors duration-200"
                aria-label="Email support"
              >
                support@venomsindex.com
              </a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.venomsindex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300 transition-colors duration-200"
                aria-label="Visit our website"
              >
                www.venomsindex.com
              </a>
            </li>
          </ul>
        </section>

        {/* Section 8 */}
        <section className="mb-12 transition-all duration-300 hover:bg-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            8. Your Consent
          </h2>
          <p className="text-gray-300 leading-relaxed">
            By using the <strong>Venoms Index</strong> Chrome Extension, you agree to the privacy practices outlined in this policy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;