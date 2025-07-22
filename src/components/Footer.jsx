import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaGithub, FaLinkedin, FaDiscord ,FaInstagram} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const quickLinks = [
    "Home", "About", "Features", "Blog", "Contact"
  ];

  const resources = [
    "Documentation", "Support", "API Reference", "Downloads", "Updates"
  ];

  const socialLinks = [
    { icon: FaTwitter, url: " https://x.com/venomsindex01?t=Easpl5fD_XHHK4rpmXPxCA&s=08 ", label: "Twitter" },
    // { icon: FaGithub, url: "#github", label: "GitHub" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/venom-s-index-90a818360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ", label: "LinkedIn" },
    { icon: FaInstagram, url: "https://www.instagram.com/venoms_index/?utm_source=qr&igsh=dGVxamdxczBuN3Fz#", label: "Instagram" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!subscriberEmail) return;
    const subject = encodeURIComponent("New Newsletter Subscription");
    const body = encodeURIComponent(`The following user has subscribed to your website:\n\nEmail: ${subscriberEmail}`);
    window.location.href = `mailto:venomsindex01@gmail.com?subject=${subject}&body=${body}`;
    setSubscriberEmail("");
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">V</span>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Venom Index
                </h3>
                <p className="text-sm text-gray-400">Next-Gen Technology</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering the future with innovative solutions and cutting-edge developments in blockchain technology.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <social.icon className="text-xl" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li key={link} whileHover={{ x: 2 }}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-200" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div> */}

          {/* Resources */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <motion.li key={resource} whileHover={{ x: 2 }}>
                  <a href={`#${resource.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-200" />
                    {resource}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div> */}

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
            <p className="text-sm text-gray-400">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={subscriberEmail}
                  onChange={e => setSubscriberEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="mt-3 w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                  disabled={subscribed}
                >
                  {subscribed ? "Subscribed" : "Subscribe"}
                </motion.button>
                {subscribed && (
                  <div className="absolute top-full left-0 mt-2 text-green-400 text-sm font-semibold">
                    Subscribed!
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Venom Index. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="#privacy-policy"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                onClick={e => {
                  e.preventDefault();
                  navigate("/privacypolicy");
                }}
              >
                Privacy Policy
              </a>
              {['Terms of Service', 'Cookie Policy'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
    </footer>
  );
};

export default Footer;
