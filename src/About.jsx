import React from "react";
import Navbar from "./components/Navbar"; // Adjust path if needed
import { motion } from "framer-motion"; //This is for the right slide in animation
import Footer from "./components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      {/*This section is for the WELCOME TO XSTRA BRANDS text in the home page*/}
      <section className="welcome-section">
        <h1>
          <span className="logo-text">
            {" "}
            ABOUT <span className="highlight-brand">US</span>
          </span>
        </h1>
      </section>
      {/*End*/}

      {/*This is the description of the company, whith animation code*/}

      <div className="about-page p-6 md:p-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-white rounded-2xl shadow-lg p-6 space-y-4"
        >
          <p className="text-gray-700 leading-relaxed text-lg">
            Xstra Brands is a 100% black-owned telecommunications delivery and
            support company, founded in 2017.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            We are a leading provider of wireless and data infrastructure
            solutions across Southern Africa. Our services include the supply of
            wireless links and related technologies to network operators,
            internet service providers, and data system integrators.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Xstra Brands is the preferred partner for both private and public
            enterprises in South Africa, offering wireless, cabling, and a
            variety of networking solutions. We collaborate with top industry
            players to deliver efficient Wi-Fi and RF solutions.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            We follow strict business processes to ensure that our products and
            services meet the highest quality standards. Our mission is to boost
            our clients’ competitiveness by providing timely, reliable, and
            cost-effective solutions—a value deeply rooted in our company's
            ethos.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            To uphold our commitment to excellence, Xstra Brands ensures we are
            continuously certified and aligned with industry best practices. We
            focus on the ongoing improvement of our operations, technical
            expertise, product knowledge, and employee skills.
          </p>
        </motion.div>
      </div>
      {/*End*/}

      {/*Addin the Footer on the web page*/}
      <Footer />
      {/*End*/}
    </>
  );
}
