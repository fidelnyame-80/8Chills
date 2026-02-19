import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Images } from "../assets/Images";

const Newsletter = () => {
  return (
    <section className="relative py-32 lg:py-18 overflow-hidden text-zinc-300">
      <div className="absolute inset-0">
        <img
          src={Images.hero2}
          alt="Luxury wines background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>

      <div className="relative max-w-5xl lg:max-w-3xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[2.45rem] font-bold tracking-tight mb-6"
        >
          LUXURY WINES
        </motion.h2>

        <div className="flex justify-center items-center gap-4 mb-10">
          <div className="w-24 h-px bg-amber-600"></div>
          <div className="w-8 h-8 rotate-45 border-2 border-amber-600"></div>
          <div className="w-24 h-px bg-amber-600"></div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl lg:text-[1.2rem] text-gray-300 mb-12 lg:mb-9 max-w-2xl mx-auto leading-relaxed"
        >
          Join our exclusive list for rare vintages, private tastings, and first access to limited releases.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 max-w-xl lg:max-w-lg mx-auto justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative w-full">
            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="email"
              placeholder="Your email address"
              required
              className="w-full pl-16 pr-8 py-5 lg:py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:bg-white/20 transition text-lg lg:text-base"
            />
          </div>

          <button className="btn-arcade sm:px-12 sm:py-[1.24rem] lg:w-auto lg:px-10 lg:py-[0.92rem]">
            Join the List
          </button>
        </motion.form>

        <p className="text-sm text-zinc-500 mt-8">
          No spam | Unsubscribe anytime | Your privacy is sacred
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
