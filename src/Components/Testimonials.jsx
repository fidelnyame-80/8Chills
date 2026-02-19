// === 1. PASTE THIS AT THE TOP (imports) ===
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// === 2. MAIN COMPONENT (paste everything below) ===
const Testimonials = () => {
  const testimonials = [
    {
      name: "Abel Kwame Asare",
      role: "Regular Customer",
      text: "Best liquor store in Accra. Fast delivery, authentic bottles, and great prices. My go-to every weekend!",
      rating: 5,
    },
    {
      name: "Abena Serwaah Mensah",
      role: "Event Planner",
      text: "Ordered for a wedding — everything arrived on time, perfectly packed. The Hennessy XO was a huge hit!",
      rating: 5,
    },
    {
      name: "Kojo Boateng",
      role: "VIP Client",
      text: "Finally a store that stocks rare whiskies. Got my Macallan 18 here. Will definitely order again.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black lg:py-12">
      <div className="max-w-6xl lg:max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
          className="text-4xl md:text-5xl lg:text-[2.45rem] font-bold text-zinc-100 mb-4"
        >
          Loved by Our Customers
        </motion.h2>
        <motion.p
         initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
        className="text-xl lg:text-[1.22rem] text-zinc-400 mb-16 lg:mb-8">
          Real people. Real vibes. Real drinks.
        </motion.p>

        <div
         className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
               initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
              className="bg-zinc-900 rounded-2xl shadow-xl p-8 lg:p-5 border border-zinc-800 hover:shadow-2xl transition"
            >
              <div className="flex justify-center mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 lg:w-5 lg:h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-zinc-300 italic mb-6 leading-relaxed lg:text-[0.92rem] lg:leading-8">"{t.text}"</p>
              <div>
                <p className="font-semibold text-zinc-100">{t.name}</p>
                <p className="text-sm text-zinc-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
