import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Sparkles, 
  Activity, 
  Smile, 
  ShieldCheck, 
  Zap, 
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    title: "Teeth Cleaning",
    description: "Professional cleaning to remove plaque and tartar, ensuring fresh breath and healthy gums.",
    icon: Sparkles,
    color: "bg-blue-50 text-blue-500"
  },
  {
    title: "Root Canal Treatment",
    description: "Painless procedure to save an infected tooth and relieve severe toothache effectively.",
    icon: Activity,
    color: "bg-red-50 text-red-500"
  },
  {
    title: "Braces & Aligners",
    description: "Straighten your teeth with modern invisible aligners or traditional braces for a perfect smile.",
    icon: Smile,
    color: "bg-purple-50 text-purple-500"
  },
  {
    title: "Teeth Whitening",
    description: "Advanced whitening techniques to brighten your smile by several shades in just one visit.",
    icon: Zap,
    color: "bg-yellow-50 text-yellow-500"
  },
  {
    title: "Dental Implants",
    description: "Permanent and natural-looking replacement for missing teeth with high-quality implants.",
    icon: ShieldCheck,
    color: "bg-green-50 text-green-500"
  },
  {
    title: "Pediatric Dentistry",
    description: "Specialized and gentle dental care for children to ensure their lifelong oral health.",
    icon: Users,
    color: "bg-orange-50 text-orange-500"
  }
];

import { Users } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-brand-950 mb-6"
          >
            Comprehensive Dental Services <br />
            <span className="text-slate-500">for Your Whole Family.</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            We offer a wide range of dental treatments using state-of-the-art technology to ensure you get the best results with maximum comfort.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 rounded-[32px] overflow-hidden">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-brand-950 mb-4">{service.title}</h4>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <a href="#booking" className="inline-flex items-center gap-2 text-brand-600 font-bold group/link">
                    Learn More 
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-6">Need a specialized treatment not listed here?</p>
          <Button asChild variant="outline" className="rounded-full px-8 border-brand-200 text-brand-700 hover:bg-brand-50">
            <a href="#contact">View All Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
