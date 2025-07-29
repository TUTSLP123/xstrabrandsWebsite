import React from "react";
import Navbar from "./components/Navbar";
import "./home.css";
import Carousel from "./components/Carousel";
import pic3 from "./pics/pic3.jpeg";
import pic4 from "./pics/pic4.jpeg";
import pic5 from "./pics/pic5.jpeg";
import pic6 from "./pics/pic6.jpeg";
import pic7 from "./pics/pic7.jpeg";
import pic8 from "./pics/pic8.jpeg";
import pic9 from "./pics/pic9.jpeg";
import pic10 from "./pics/pic10.jpeg";
import Footer from "./components/Footer";

// Define slides array here
const slides = [pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];

//Adding the navigation bar
function App() {
  return (
    <>
      <Navbar />

      {/*This section is for the WELCOME TO XSTRA BRANDS text in the home page*/}
      <section className="welcome-section">
        <h1>
          <span className="logo-text">
            {" "}
            Welcome to XSTRA <span className="highlight-brand">BRANDS</span>
          </span>
        </h1>
      </section>
      {/*End*/}

      {/*Adding the Carousel here*/}
      <main className="App px-10 py-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="max-w-lg pl-10">
            <Carousel autoSlide={true}>
              {slides.map((s, i) => (
                <img key={i} src={s} />
              ))}
            </Carousel>
          </div>

          {/*End*/}

          {/*This section is for the description next to the Caraosel in the home page*/}
          <div className="flex-1 animate-slide-in-right text-gray-800 text-lg leading-relaxed px-6">
            <p>
              <span className="font-semibold">Xstra Brands</span> is a 100%
              black-owned telecommunications leader, specializing in expert
              cabling, wireless, and data infrastructure solutions since{" "}
              <span className="font-bold">2017</span>. We build reliable
              networks that power businesses across South Africa.
            </p>
          </div>
          {/*End*/}
        </div>
      </main>

      {/*Addin the Footer on the web page*/}
      <Footer />
      {/*End*/}
    </>
  );
}

export default App;
