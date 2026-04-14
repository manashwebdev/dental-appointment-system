import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Arjun Sharma",
    role: "Local Resident",
    content: "Dr. Manash is incredibly professional. I was terrified of root canals, but he made the whole process completely painless. The clinic is spotless!",
    rating: 5,
    image: "https://picsum.photos/seed/arjun/100/100"
  },
  {
    name: "Priya Patel",
    role: "Teacher",
    content: "Best dental experience I've ever had. The staff is so friendly and Dr. Manash explains everything clearly. My teeth whitening results are amazing!",
    rating: 5,
    image: "https://picsum.photos/seed/priya/100/100"
  },
  {
    name: "Rahul Verma",
    role: "Software Engineer",
    content: "I got my dental implants here. The technology they use is top-notch. It's been 6 months and they feel just like my natural teeth.",
    rating: 5,
    image: "https://picsum.photos/seed/rahul/100/100"
  },
  {
    name: "Anjali Gupta",
    role: "Business Owner",
    content: "Very affordable pricing for such a premium service. Dr. Manash is very patient and took the time to answer all my questions. Highly recommended!",
    rating: 5,
    image: "https://picsum.photos/seed/anjali/100/100"
  },
  {
    name: "Vikram Singh",
    role: "Retired Officer",
    content: "The clinic has a very calming atmosphere. Dr. Manash is a true expert. He handled my complex tooth extraction with great care.",
    rating: 5,
    image: "https://picsum.photos/seed/vikram/100/100"
  },
  {
    name: "Sneha Reddy",
    role: "Student",
    content: "I'm currently undergoing orthodontic treatment here. The aligners are so comfortable and I'm already seeing great results. Thank you!",
    rating: 5,
    image: "https://picsum.photos/seed/sneha/100/100"
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-950">
              What Our Patients <br />
              <span className="text-slate-500">Are Saying About Us.</span>
            </h3>
          </div>
          <div className="flex items-center gap-4 bg-brand-50 px-6 py-4 rounded-2xl border border-brand-100">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-brand-900 text-lg">4.9/5.0</span>
            <span className="text-slate-500 text-sm">Based on 500+ Reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border border-slate-100 shadow-sm hover:shadow-md transition-shadow rounded-[32px] relative">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-brand-100 absolute top-8 right-8 -z-0" />
                  <div className="relative z-10">
                    <div className="flex text-yellow-400 mb-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-600 mb-8 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <p className="font-bold text-brand-950">{testimonial.name}</p>
                        <p className="text-xs text-slate-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
