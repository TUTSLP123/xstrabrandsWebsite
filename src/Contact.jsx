import React from "react";
import Navbar from "./components/Navbar";
import FormContact from "./components/FormContact";
import Footer from "./components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      {/*This section is for the WELCOME TO XSTRA BRANDS text in the home page*/}
      <section className="welcome-section">
        <h1>
          <span className="logo-text">
            {" "}
            CONTACT <span className="highlight-brand">US</span>
          </span>
        </h1>
      </section>
      {/*End*/}

      {/*Adding a contact form */}
      <div className="flex justify-center items-center w-full py-5 ">
        <FormContact />
      </div>
      {/*End*/}

      {/*Addin the Footer on the web page*/}
      <Footer />
      {/*End*/}
    </>
  );
}

export default Contact;
