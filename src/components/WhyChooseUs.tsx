import { motion } from 'motion/react';
import { 
  Stethoscope, 
  Clock, 
  HeartHandshake, 
  CreditCard, 
  ShieldCheck, 
  Award,
  Zap
} from 'lucide-react';

const reasons = [
  {
    title: "Digital Smile Design",
    description: "We use AI-driven smile simulation to let you preview your perfect smile before we even begin treatment.",
    icon: Stethoscope
  },
  {
    title: "Microscopic Precision",
    description: "Utilizing high-magnification dental microscopes for root canals and restorations, ensuring unmatched accuracy.",
    icon: ShieldCheck
  },
  {
    title: "Global Certifications",
    description: "Dr. Manash is a Fellow of the ICOI (USA) and a certified Invisalign Platinum Provider.",
    icon: Award
  },
  {
    title: "Holistic Approach",
    description: "We focus on the oral-systemic connection, ensuring your dental health supports your overall heart and body wellness.",
    icon: HeartHandshake
  },
  {
    title: "Painless Technology",
    description: "Computer-controlled local anesthesia (The Wand) for a completely needle-free and anxiety-free experience.",
    icon: Zap
  },
  {
    title: "Award-Winning Care",
    description: "Voted 'Most Trusted Dental Clinic' in the region for 3 consecutive years (2021-2023).",
    icon: Award
  }
];

const stats = [
  { label: "Successful Implants", value: "2,500+" },
  { label: "Smile Makeovers", value: "1,200+" },
  { label: "Years Experience", value: "12+" },
  { label: "Patient Satisfaction", value: "99.8%" }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-950 text-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-400/5 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-600/5 rounded-full blur-[120px] -z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-4">The Manash Advantage</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Where Artistry Meets <br />
              <span className="text-brand-300">Clinical Excellence.</span>
            </h3>
            <p className="text-lg text-brand-100/70 mb-12 leading-relaxed max-w-xl">
              Dr. Manash combines over a decade of specialized training with the world's most advanced dental technologies to deliver results that are as durable as they are beautiful.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {reasons.map((reason, index) => (
                <div key={index} className="group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-400 mb-5 group-hover:bg-brand-400 group-hover:text-white transition-all duration-300">
                    <reason.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
                    <p className="text-sm text-brand-100/60 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="rounded-[40px] overflow-hidden border-8 border-white/5 shadow-2xl relative group">
                <img
                  src="https://media.istockphoto.com/id/2200192665/photo/senior-man-laughing-during-dental-checkup-with-female-dentist.jpg?s=612x612&w=0&k=20&c=KATuuzlYF7wkUQEERaZTk57Z3bkk4S_XX8leaSi9tmU="
                  alt="Advanced Dental Technology"
                  className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent" />
                
                {/* Success Story Overlay */}
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                  <p className="text-brand-300 font-bold text-sm uppercase tracking-widest mb-2">Patient Success Story</p>
                  <p className="text-lg font-medium italic">"The Digital Smile Design process was life-changing. I saw my future smile before we even started, and the result was identical!"</p>
                  <p className="mt-4 text-sm font-bold">— Rajesh K., Full Mouth Rehabilitation</p>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-brand-400 mb-1">{stat.value}</p>
                  <p className="text-xs font-bold text-brand-100/40 uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Accreditations Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-white/10 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <span className="text-xl font-bold tracking-tighter">ICOI FELLOW</span>
          <span className="text-xl font-bold tracking-tighter">INVISALIGN PLATINUM</span>
          <span className="text-xl font-bold tracking-tighter">DSD CERTIFIED</span>
          <span className="text-xl font-bold tracking-tighter">ADA MEMBER</span>
        </motion.div>
      </div>
    </section>
  );
}
