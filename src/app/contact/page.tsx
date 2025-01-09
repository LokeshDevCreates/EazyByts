"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_4p9coge",
          "template_dwska5i",
          form.current,
          "MZUmGUqXRnYBE66DZ"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("Message sent");
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl w-full max-w-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">
          Contact Me
        </h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="user_name"
              placeholder="Enter Your Name"
              required
              className="block w-full px-4 py-3 text-lg rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-blue-400 dark:focus:border-blue-400"
            />
          </div>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="user_email"
              placeholder="Enter Your Email"
              required
              className="block w-full px-4 py-3 text-lg rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-blue-400 dark:focus:border-blue-400"
            />
          </div>
          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter Your Message Here"
              required
              className="block w-full px-4 py-3 text-lg rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-blue-400 dark:focus:border-blue-400"
              rows={5}
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
