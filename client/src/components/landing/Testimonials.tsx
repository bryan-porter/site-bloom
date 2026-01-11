import { motion } from "framer-motion";

const testimonials = [
  {
    headline: "How CoinTracker Saves 30+ Hours Weekly",
    quote: "Juicebox transformed our recruiting process. We went from spending days sourcing to finding top candidates in hours.",
    author: "Sarah Martinez",
    role: "Head of Talent, CoinTracker",
    bgColor: "bg-orange-50",
  },
  {
    headline: "How Monte Carlo Filled 2 Roles in 3 Weeks",
    quote: "The AI agents are incredible. They found candidates we never would have discovered on our own.",
    author: "Michael Chen",
    role: "VP Engineering, Monte Carlo",
    bgColor: "bg-slate-100",
  },
  {
    headline: "How Figma Reduced Time-to-Hire by 60%",
    quote: "The quality of candidates from Juicebox is unmatched. Our hiring managers are thrilled.",
    author: "Emily Rodriguez",
    role: "Recruiting Lead, Figma",
    bgColor: "bg-slate-100",
  },
  {
    headline: "How Stripe Scaled Their Engineering Team",
    quote: "Juicebox gave us superpowers. We scaled from 50 to 200 engineers in just one year.",
    author: "David Kim",
    role: "Engineering Director, Stripe",
    bgColor: "bg-orange-50",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50" id="resources">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            How top teams win with Juicebox
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join hundreds of companies that trust Juicebox to build world-class teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.headline}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${testimonial.bgColor} rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300`}
              data-testid={`card-testimonial-${index}`}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {testimonial.headline}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF5A30] to-orange-400 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-slate-500 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
