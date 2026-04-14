import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    "Expert in Cosmetic Dentistry",
    "Painless Treatment Specialist",
    "Locally Trusted for 12+ Years",
    "Advanced Digital Equipment",
    "Patient-First Approach",
    "Affordable Premium Care"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img
                  src="https://www.drrahulsdentaville.com/wp-content/themes/dentaville/images/home-about/2.webp"
                  alt="Dr. Manash"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgXWOicwUQFT3y2dZWZOm5RV07BfowP93dmg&s"
                  alt="Modern Equipment"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6R0bxR2yihxmKGF3mc7K12o44ZbVpVbKFaw&s"
                  alt="Clinic Interior"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://media.oralhealthgroup.com/uploads/2022/07/iStock-1306143796-e1658325925195.jpg"
                  alt="Happy Patient"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-400 text-white p-8 rounded-full shadow-2xl border-8 border-white flex flex-col items-center justify-center text-center w-40 h-40">
              <span className="text-3xl font-bold">12+</span>
              <span className="text-xs uppercase tracking-widest font-bold">Years of Excellence</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-4">Meet Your Dentist</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-950 mb-6">
              Dr. Manash: <br />
              <span className="text-slate-500">Crafting Smiles with Care.</span>
            </h3>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Dr. Manash is a highly qualified dental surgeon with a passion for creating beautiful, healthy smiles. With over 12 years of experience in the local community, he has built a reputation for providing premium, painless, and personalized dental care.
            </p>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              At Manash Dental Care, we believe that every patient deserves a comfortable and stress-free experience. Our clinic is equipped with the latest technology to ensure the highest standards of hygiene and precision.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-400" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-brand-50 rounded-2xl border border-brand-100 flex items-center gap-6">
              <img
                src="https://res.cloudinary.com/dmiopetsn/image/upload/v1776131229/50f3181b-455e-42ca-b8df-2cbbf7dbb231_nv8nsw.png"
                alt="Signature"
                className="w-20 h-20 opacity-50 grayscale"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-serif text-xl font-bold text-brand-900">Dr. Manash</p>
                <p className="text-sm text-slate-500">BDS, MDS - Dental Surgeon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
