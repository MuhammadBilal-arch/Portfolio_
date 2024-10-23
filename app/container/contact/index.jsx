"use client";
import React, { useState } from "react";
import { CONTACT_SVG } from "@/public/assets/img/contact/contact_";
import { event } from "nextjs-google-analytics";
import { toast } from "react-toastify"; 
import toastConfig from "@/app/utils/constants";

export const Contact = () => {
  const [msg, setMessage] = useState(false);
  const [MessageSuccess, setMessageSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault(); 
    setMessage(true);
    setMessageSuccess(false);
    event("contact-form-submit", {
      category: "User",
      label: "Contact Form Submitted",
    });
    const formData = new FormData(e.target);

    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);
      setMessage(false);
      setMessageSuccess(true);
      e.target.reset();
      toast.success("Your message has been sent successfully! We'll get back to you shortly.", toastConfig);
    } catch (err) {
      console.error(err);
      setMessage(false);
      setMessageSuccess(false);
      toast.error("Oops! Something went wrong while sending your message. Please try again or contact us directly.", toastConfig);
    }
  };

  return (
    <div
      id="contact"
      className="bg-gray-extralight z-30 text-gray-normal page-padding py-10 md:py-16 "
    >
      <div className="max-w-screen-xl grid gap-8 grid-cols-1 md:grid-cols-2 py-16 mx-auto">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight Poppins-SemiBold">
              Lets talk about everything!
            </h2>
            <div className="text-gray-700 mt-8 Poppins-Regular">
              Hate forms? Send us an{" "}
              <a
                href='mailto:expbilal@gmal.com?subject = Feedback&body = Message"'
                className="underline"
              >
                email
              </a>{" "}
              instead.
            </div>
          </div>
          <div className="mt-8 text-center">{CONTACT_SVG}</div>
        </div>
        <form onSubmit={sendEmail}>
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            <div>
              <label className="uppercase text-sm text-gray-normal Poppins-SemiBold">
                Full Name
              </label>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 focus:outline-none focus:shadow-outline"
                type="text"
                required
                name="name"
                placeholder="Your Full Name"
              />
            </div>
            <div>
              <label className="uppercase text-sm text-gray-normal Poppins-SemiBold">
                Email
              </label>
              <input
                name="email"
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 focus:outline-none focus:shadow-outline"
                type="email"
                required
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="uppercase text-sm text-gray-normal Poppins-SemiBold">
                Message
              </label>
              <textarea
                name="message"
                required
                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="uppercase btn-purple-filled text-sm Poppins-SemiBold tracking-wide hover:text-orange-primary p-3 w-full"
                aria-live="polite"
              >
                {msg ? "Sending Email..." : "Send Message"}
              </button>
              <div
                className="text-purple-primary text-sm py-1 text-center"
                aria-live="assertive"
              >
                {MessageSuccess && "Message Sent Successfully "}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
