import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import clipboard from "../assets/clipboard.png";
import grant from "../assets/grant.png";
import kyc from "../assets/kyc.png";
import logo from "../assets/logo.png";
import monthly from "../assets/monthly-reporting.png";
import start from "../assets/start.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();
  // FAQ data
  const faqData = [
    {
      question: "What is StartupSync?",
      answer:
        "StartupSync is an all-in-one platform designed to help startups manage their journey, from KYC compliance to progress tracking and grant management.",
    },
    {
      question: "How does the KYC management feature work?",
      answer:
        "Our KYC management feature allows you to easily upload, update, and manage all your company's KYC documents in one secure place, ensuring you're always compliant.",
    },
    {
      question: "Can I track my startup's progress using StartupSync?",
      answer:
        "Yes, StartupSync provides intuitive tools to track various metrics of your startup's growth, allowing you to visualize progress and identify areas for improvement.",
    },
  ];

  // State to track open FAQs
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-blue-600">StartupSync</div>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="text-gray-600 hover:text-blue-600 active"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-600 hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="text-gray-600 hover:text-blue-600">
                Announcement
              </a>
            </li>
            <li>
              <a href="#faq" className="text-gray-600 hover:text-blue-600">
                FAQ?
              </a>
            </li>
            <li>
              <a href="#footer" className="text-gray-600 hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
          <div className="space-x-4">
            <button
              className="border 
            border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition"
              onClick={() => navigate("/auth/login")}
            >
              Login
            </button>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              onClick={() => navigate("/auth/register")}
            >
              Register
            </button>
          </div>
        </nav>
      </header>
      <main className="flex-grow">
        <section
          id="home"
          className="flex flex-col md:flex-row items-center justify-between container mx-auto px-4 py-16 h-screen"
        >
          <div className="text-center md:text-left lg:w-1/2">
            <motion.h1
              className="text-4xl font-bold text-gray-800"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Track, Manage, and Grow Your Startup
            </motion.h1>
            <motion.p
              className="mt-4 text-gray-600"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              StartupTrack provides all the tools you need to monitor your
              progress, manage KYC, and access grants.
            </motion.p>
            <motion.button
              className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
          <div className="mt-8 md:mt-0">
            <motion.img
              src={start}
              alt="Startup growth illustration"
              className="w-full h-auto max-w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </section>

        <section id="features" className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold text-gray-800"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Key Features
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {[
                {
                  img: kyc,
                  title: "KYC Management",
                  desc: "Easily manage and update your company's KYC information.",
                },
                {
                  img: clipboard,
                  title: "Progress Tracking",
                  desc: "Monitor your startup's growth with intuitive tracking tools.",
                },
                {
                  img: monthly,
                  title: "Monthly Reports",
                  desc: "Generate and submit detailed monthly progress reports.",
                },
                {
                  img: grant,
                  title: "Grant Management",
                  desc: "Access and manage various grant schemes and applications.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow"
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-16 h-16 mx-auto"
                  />
                  <h3 className="text-lg font-semibold mt-4">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="container mx-auto py-16 text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-800"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            About StartupSync
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            StartupTrack is your all-in-one solution for managing your startup's
            journey. From KYC compliance to progress tracking and grant
            management, we provide the tools you need to focus on what matters
            most - growing your business.
          </motion.p>
        </section>

        <section id="testimonials" className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold text-gray-800"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              What People Are Saying
            </motion.h2>
            <div className="flex flex-wrap justify-center mt-8">
              {[
                {
                  quote:
                    "This app has been a game changer for my son. He can now learn at his own pace and practice at home with ease.",
                  name: "Rahul Patel",
                  role: "Parent",
                },
                {
                  quote:
                    "As a teacher, this app has provided me with all the tools I need to help my students excel in their studies.",
                  name: "Nisha Shah",
                  role: "Teacher",
                },
                {
                  quote:
                    "Finally, an app that bridges the communication gap. The sign language conversion feature is amazing!",
                  name: "Amit Joshi",
                  role: "HR Professional",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 m-4 rounded-lg shadow max-w-xs"
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="italic">"{testimonial.quote}"</p>
                  <p className="mt-4 font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="container mx-auto py-16">
          <div className="text-center">
            <motion.h2
              className="text-3xl font-bold text-gray-800"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="mt-8">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 py-4">
                  <motion.div
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                    <motion.span
                      className={`text-2xl transition-transform duration-200 ${
                        openIndex === index ? "transform rotate-180" : ""
                      }`}
                    >
                      {openIndex === index ? "−" : "+"}
                    </motion.span>
                  </motion.div>
                  <motion.p
                    className={`mt-2 text-gray-600 ${
                      openIndex === index ? "block" : "hidden"
                    }`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: openIndex === index ? 1 : 0,
                      height: openIndex === index ? "auto" : 0,
                    }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="bg-gray-800 py-6 text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-xl font-bold">Stay Connected</div>
            <p className="mt-2 text-gray-300">
              Join our community and never miss an update!
            </p>
          </div>

          <div className="flex justify-center space-x-4 mb-4 md:mb-0">
            <motion.a
              href="#"
              className="hover:text-blue-500 transition duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-blue-400 transition duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-blue-600 transition duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-pink-500 transition duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaInstagram />
            </motion.a>
          </div>

          <div className="flex flex-col items-center md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md border border-gray-300 mb-2 md:mb-0"
            />
            <button className="bg-blue-600 p-2 rounded-r-md hover:bg-blue-500 transition">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a href="#" className="text-gray-300 hover:text-blue-400 mx-2">
            Privacy Policy
          </a>
          <span className="text-gray-500">|</span>
          <a href="#" className="text-gray-300 hover:text-blue-400 mx-2">
            Terms of Service
          </a>
        </div>

        <p className="mt-4 text-gray-400 text-center">
          &copy; {new Date().getFullYear()} StartupSync. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
