import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import GardeningServices from "./components/GardeningServices";
import IndoorGardening from "./components/IndoorGardening";
import PhotoGallery from "./components/PhotoGallery";
import BeforeAfter from "./components/BeforeAfter";
import Blog from "./components/Blog";
import QuoteForm from "./components/QuoteForm";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const [quoteSummary, setQuoteSummary] = useState("");

  return (
    <div className="min-h-screen bg-offwhite text-earth">
      <Header />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <GardeningServices />
        <IndoorGardening />
        <PhotoGallery />
        <BeforeAfter />
        <Blog />
        <QuoteForm onRequestQuote={setQuoteSummary} />
        <ContactForm prefillMessage={quoteSummary} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
