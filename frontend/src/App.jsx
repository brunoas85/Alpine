import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
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
        <BeforeAfter />
        <QuoteForm onRequestQuote={setQuoteSummary} />
        <ContactForm prefillMessage={quoteSummary} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
