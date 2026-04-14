import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Phone, Calendar, Star, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-100/30 rounded-l-[100px] -z-10 hidden lg:block" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            <span>#1 Rated Dental Clinic in the City</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-brand-950 leading-[1.1] mb-6">
            Your Smile, <br />
            <span className="text-brand-400">Our Priority.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
            Experience premium dental care with Dr. Manash. We combine advanced technology with a gentle touch to give you the smile you deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-brand-400 hover:bg-brand-500 text-white rounded-full px-8 py-7 text-lg shadow-lg shadow-brand-200 transition-all hover:scale-105">
              <a href="#booking">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-7 text-lg border-brand-200 text-brand-700 hover:bg-brand-50 transition-all">
              <a href="tel:+919258711610">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brand-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl font-bold text-brand-950">1000+</p>
                <p className="text-sm text-slate-500">Happy Patients</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brand-400">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div>
                <p className="text-xl font-bold text-brand-950">5+ Years</p>
                <p className="text-sm text-slate-500">Experience</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="https://res.cloudinary.com/dmiopetsn/image/upload/v1776130654/Gemini_Generated_Image_m59as7m59as7m59a_jhvtnv.png"
              alt="Modern Dental Clinic"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[240px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://media.istockphoto.com/id/1388931724/photo/shot-of-a-young-woman-checking-her-results-in-the-dentists-office.jpg?s=612x612&w=0&k=20&c=DPgd_dmIYUkClQLe0p7f_nJy4xfKYBTOE8KGF2zJLVg=`}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    alt="Patient"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-400">+4.9 Rating</span>
            </div>
            <p className="text-sm font-medium text-slate-700 italic">
              "The most painless root canal I've ever had. Highly recommend Dr. Manash!"
            </p>
          </motion.div>
          
          {/* Decorative Circles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-300/20 rounded-full blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
