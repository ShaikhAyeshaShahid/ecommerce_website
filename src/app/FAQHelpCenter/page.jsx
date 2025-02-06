"use client";

import React, { useState, useCallback, useMemo } from "react";
import { FiSearch, FiMail, FiPhone, FiMessageCircle, FiSun, FiMoon } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { MdProductionQuantityLimits, MdOutlineAccountCircle, MdOutlinePayments } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

const FAQHelpCenter = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "general",
    message: ""
  });

  const faqData = [
    {
      category: "Product Information",
      icon: <MdProductionQuantityLimits className="text-2xl" />,
      items: [
        {
          question: "What are the main features of your product?",
          answer: "Our product includes cloud synchronization, real-time collaboration, and advanced security features.",
          tags: ["features", "overview", "basics"]
        },
        {
          question: "How do I get started?",
          answer: "Simply sign up for an account and follow our interactive onboarding tutorial.",
          tags: ["getting started", "tutorial", "basics"]
        }
      ]
    },
    {
      category: "Troubleshooting",
      icon: <RiCustomerService2Line className="text-2xl" />,
      items: [
        {
          question: "Why can't I log in to my account?",
          answer: "Check if your credentials are correct and ensure caps lock is off. If issues persist, reset your password.",
          tags: ["login", "access", "account"]
        },
        {
          question: "How do I reset my password?",
          answer: "Click on 'Forgot Password' on the login page and follow the instructions sent to your email.",
          tags: ["password", "security", "account"]
        }
      ]
    },
    {
      category: "Billing",
      icon: <MdOutlinePayments className="text-2xl" />,
      items: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and bank transfers.",
          tags: ["payment", "billing", "money"]
        },
        {
          question: "How do I update my billing information?",
          answer: "Go to Account Settings > Billing to update your payment details.",
          tags: ["billing", "account", "settings"]
        }
      ]
    },
    {
      category: "Account Management",
      icon: <MdOutlineAccountCircle className="text-2xl" />,
      items: [
        {
          question: "How do I change my email address?",
          answer: "Visit Account Settings and update your email in the Profile section.",
          tags: ["account", "settings", "email"]
        },
        {
          question: "Can I have multiple users on one account?",
          answer: "Yes, our Business and Enterprise plans support multiple user accounts.",
          tags: ["users", "account", "teams"]
        }
      ]
    }
  ];

  const filteredFAQs = useMemo(() => {
    if (!searchQuery) return faqData;

    return faqData.map(category => ({
      ...category,
      items: category.items.filter(
        item =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    })).filter(category => category.items.length > 0);
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Help Center</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? <FiSun className="text-2xl" /> : <FiMoon className="text-2xl" />}
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* FAQ Sections */}
        <div className="grid gap-6 mb-12">
          {filteredFAQs.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setExpandedCategory(expandedCategory === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {category.icon}
                  <h2 className="text-xl font-semibold">{category.category}</h2>
                </div>
                <IoMdArrowDropdown
                  className={`text-2xl transform transition-transform ${expandedCategory === index ? "rotate-180" : ""}`}
                />
              </button>
              {expandedCategory === index && (
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="mb-4 last:mb-0">
                      <h3 className="font-medium mb-2">{item.question}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{item.answer}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Contact Support</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Full Name</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900"
              />
            </div>
            <div>
              <label className="block mb-1">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900"
              />
            </div>
            <div>
              <label className="block mb-1">Subject</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900"
              >
                <option value="general">General Inquiry</option>
                <option value="technical">Technical Support</option>
                <option value="billing">Billing Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center gap-4">
            <FiMail className="text-3xl text-blue-600" />
            <div>
              <h3 className="font-semibold">Email Support</h3>
              <p className="text-gray-600 dark:text-gray-300">support@example.com</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center gap-4">
            <FiMessageCircle className="text-3xl text-blue-600" />
            <div>
              <h3 className="font-semibold">Live Chat</h3>
              <p className="text-gray-600 dark:text-gray-300">Available 24/7</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center gap-4">
            <FiPhone className="text-3xl text-blue-600" />
            <div>
              <h3 className="font-semibold">Phone Support</h3>
              <p className="text-gray-600 dark:text-gray-300">1-800-123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQHelpCenter;
