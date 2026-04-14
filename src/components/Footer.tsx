import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck,
  ArrowUp
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-400 rounded-lg flex items-center justify-center text-white font-serif text-2xl font-bold">
                M
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Manash<span className="text-brand-400">Dental</span>
              </span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Providing premium dental care with a focus on patient comfort and advanced technology. Your smile is our greatest achievement.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-400 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-400 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-400 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-brand-400 transition-colors">About Dr. Manash</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Our Services</a></li>
              <li><a href="#reviews" className="hover:text-brand-400 transition-colors">Patient Reviews</a></li>
              <li><a href="#booking" className="hover:text-brand-400 transition-colors">Book Appointment</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-400 shrink-0" />
                <span>123 Dental Street, Medical Square, <br />Haridwar, Uttarakhand - 249401</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-400 shrink-0" />
                <a href="tel:+919258711610" className="hover:text-brand-400 transition-colors">+91 92587 11610</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-400 shrink-0" />
                <a href="mailto:info@manashdental.com" className="hover:text-brand-400 transition-colors">info@manashdental.com</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span>Mon - Fri:</span>
                <span className="text-white font-medium">09:00 AM - 08:00 PM</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Saturday:</span>
                <span className="text-white font-medium">10:00 AM - 06:00 PM</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Sunday:</span>
                <span className="text-brand-400 font-bold">Emergency Only</span>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-slate-800/50 rounded-xl border border-slate-700 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-400" />
              <span className="text-xs font-bold uppercase tracking-tight">Verified Local Clinic</span>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-64 bg-slate-800 rounded-3xl mb-16 overflow-hidden relative group">
          <div className="absolute inset-0 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBfxs3AtpU2uJ26jzel7TDp5UFlyfSch40g&s')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center">
              <MapPin className="w-8 h-8 text-brand-400 mx-auto mb-2" />
              <p className="text-white font-bold">Find Us on Google Maps</p>
              <Button variant="link" className="text-brand-400 p-0 h-auto font-bold">Get Directions</Button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Manash Dental Care. All rights reserved. Designed for Excellence.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-brand-400 transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
