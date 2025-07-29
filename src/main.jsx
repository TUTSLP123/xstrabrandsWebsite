// Importing React library
import React from "react";

// Importing StrictMode to highlight potential problems in the app
import { StrictMode } from "react";

// Importing createRoot to mount the React app
import { createRoot } from "react-dom/client";

// Importing BrowserRouter, Routes, and Route from react-router-dom to enable routing
import { HashRouter, Routes, Route } from "react-router-dom";

// Importing global CSS styles
import "./index.css";

// Importing the App component (this is your home page)
import App from "./App.jsx";

// Importing the Contact component (this is your Contact Us page)
import Contact from "./Contact.jsx";
import Services from "./Services.jsx";
import About from "./About.jsx";

// Mounting the app inside the HTML element with id="root"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrapping the app in BrowserRouter to enable client-side routing */}
    <HashRouter>
      {/* Defining the routes for the app */}
      <Routes>
        {/* Route for the home page (path "/") */}
        <Route path="/" element={<App />} />

        {/* Route for the Contact Us page (path "/contact") */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);

//import React from "react";
//import { StrictMode } from "react";
//import { createRoot } from "react-dom/client";
//import "./index.css";
//import App from "./App.jsx";
//import Contact from "./Contact.jsx";

//createRoot(document.getElementById("root")).render(
//<StrictMode>
//<App />
//</StrictMode>
//);
