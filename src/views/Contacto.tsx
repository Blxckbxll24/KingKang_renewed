import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ContactoComponent from "../components/forms/ContactoComponent";

export default function Contacto() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <ContactoComponent />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
