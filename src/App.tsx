/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import BookingForm from './components/BookingForm';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
      <Chatbot />
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-slate-100 md:hidden z-40 flex gap-3">
        <a href="tel:+919258711610" className="flex-1">
          <button className="w-full py-3 rounded-xl border border-brand-200 text-brand-600 font-bold text-sm flex items-center justify-center gap-2">
            Call Now
          </button>
        </a>
        <a href="#booking" className="flex-[2]">
          <button className="w-full py-3 rounded-xl bg-brand-400 text-white font-bold text-sm shadow-lg shadow-brand-100">
            Book Appointment
          </button>
        </a>
      </div>
    </div>
  );
}

