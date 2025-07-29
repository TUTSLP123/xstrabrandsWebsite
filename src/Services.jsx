import React from "react";
import Navbar from "./components/Navbar"; // Adjust path if needed
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import "./index.css"; // Ensures font and layout consistency

export default function Services() {
  return (
    <>
      <Navbar />

      {/*This section is for the WELCOME TO XSTRA BRANDS text in the home page*/}
      <section className="welcome-section">
        <h1>
          <span className="logo-text">
            {" "}
            OUR <span className="highlight-brand">SERVICES</span>
          </span>
        </h1>
      </section>
      {/*End*/}

      {/*This is the code for list of services for xstrabrands*/}

      <div className="flex justify-center items-center min-h-screen p-6 bg-white">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-2xl shadow-md max-w-3xl w-full font-poppins" //bg-gray-100 p-8 bg-white rounded-2xl
        >
          <ul className="list-square list-inside text-gray-700 leading-relaxed space-y-3 text-base">
            <li>
              Wireless networks including satellite links, outdoor radio links,
              Optical Wireless Broadband links, Wireless Mesh Networks, and
              indoor Wi-Fi networks.
            </li>
            <li>
              Cabling infrastructure including fibre cabling, data cabling,
              network points, and electrical installations.
            </li>
            <li>
              VoIP telephone systems for making and receiving calls over the
              internet.
            </li>
            <li>
              Full turnkey fibre optic network solutions including planning,
              implementation, testing, certification, and maintenance.
            </li>
            <li>
              Data Centre & Server Room infrastructure including design,
              commissioning, data cabinets, network switches, VOIP
              infrastructure, UPS, generators, air-conditioning, access control,
              raised flooring, fire suppression, and monitoring equipment.
            </li>
            <li>
              Health & Safety Training — we enforce strict safety policies and
              provide ongoing training to ensure compliance and a safe work
              environment.
            </li>
            <li>
              Network design, civil excavation, tar & road works, paving, and
              rock demolition.
            </li>
            <li>
              Underground installations for piping, conduits, and cabling.
            </li>
            <li>
              Civil engineering services, fibre optic cabling, site
              construction, as-built documentation, hand trenching, horizontal
              drilling, and Ground Penetration Radar (GPR).
            </li>
          </ul>
        </motion.div>
      </div>

      {/*End*/}

      {/*Addin the Footer on the web page*/}
      <Footer />
      {/*End*/}
    </>
  );
}
