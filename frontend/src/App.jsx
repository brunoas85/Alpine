import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import ServiceArea from "./components/ServiceArea";
import QuoteForm from "./components/QuoteForm";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const [quoteSummary, setQuoteSummary] = useState("");

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Pricing />
        <Reviews />
        <ServiceArea />
        <QuoteForm onRequestQuote={setQuoteSummary} />
        <ContactForm prefillMessage={quoteSummary} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
