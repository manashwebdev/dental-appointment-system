import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock, User, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export default function BookingForm() {
  const [date, setDate] = useState<Date>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-24 bg-brand-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-[40px] shadow-xl text-center border border-brand-100"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold text-brand-950 mb-4">Appointment Requested!</h3>
            <p className="text-slate-600 mb-8 text-lg">
              Thank you for choosing Manash Dental Care. Our team will call you within 30 minutes to confirm your slot.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-brand-400 hover:bg-brand-500 text-white rounded-full px-8"
            >
              Book Another Appointment
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-brand-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-brand-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-4">Book Now</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-950 mb-6">
              Ready to Transform <br />
              <span className="text-slate-500">Your Smile?</span>
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Fill out the form to request an appointment. Our team will get back to you shortly to confirm the best time for your visit.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-brand-100">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-400 flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-brand-950">Quick Response</p>
                  <p className="text-sm text-slate-500">We respond to all requests within 30 mins.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-brand-100">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-400 flex items-center justify-center">
                  <CalendarIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-brand-950">Flexible Slots</p>
                  <p className="text-sm text-slate-500">Morning, evening, and weekend slots available.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-4 bg-yellow-50 border border-yellow-100 rounded-xl flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-yellow-400 animate-pulse" />
              <p className="text-sm font-bold text-yellow-800">Only 3 slots left for today!</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-brand-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700 font-semibold">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input id="name" placeholder="John Doe" className="pl-10 rounded-xl border-slate-200 focus:border-brand-400 focus:ring-brand-400 h-12" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700 font-semibold">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input id="phone" type="tel" placeholder="+91 92587 11610" className="pl-10 rounded-xl border-slate-200 focus:border-brand-400 focus:ring-brand-400 h-12" required />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-slate-700 font-semibold">Preferred Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal h-12 rounded-xl border-slate-200",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-slate-700 font-semibold">Service Needed</Label>
                  <select id="service" className="w-full h-12 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2" required>
                    <option value="">Select a service</option>
                    <option value="cleaning">Teeth Cleaning</option>
                    <option value="root-canal">Root Canal</option>
                    <option value="braces">Braces & Aligners</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="implants">Dental Implants</option>
                    <option value="other">Other Consultation</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-700 font-semibold">Additional Message (Optional)</Label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-slate-400" />
                  <Textarea id="message" placeholder="Tell us about your dental concern..." className="pl-10 rounded-xl border-slate-200 focus:border-brand-400 focus:ring-brand-400 min-h-[100px]" />
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-brand-400 hover:bg-brand-500 text-white rounded-full py-7 text-lg font-bold shadow-lg shadow-brand-200 transition-all hover:scale-[1.02]"
              >
                {isLoading ? "Processing..." : "Book My Appointment Now"}
              </Button>
              
              <p className="text-center text-xs text-slate-400">
                By clicking "Book Now", you agree to our terms and privacy policy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}