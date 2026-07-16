import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import QuoteForm from "./components/QuoteForm";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-offwhite text-earth">
      <Header />
      <main>
        <Hero />
        <Services />
        <QuoteForm />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
