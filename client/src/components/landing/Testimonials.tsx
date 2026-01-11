import { motion } from "framer-motion";

const testimonials = [
  {
    id: "cointracker",
    company: "CoinTracker",
    headline: "How CoinTracker Saves 30+ Hours Weekly",
    quote: "Juicebox transformed our recruiting process. We went from spending days sourcing to finding top candidates in hours. The AI actually understands what we're looking for.",
    author: "Sarah Martinez",
    role: "Head of Talent",
    gradient: "from-orange-500/10 to-red-500/10",
    borderColor: "border-orange-500/20",
  },
  {
    id: "montecarlo",
    company: "Monte Carlo",
    headline: "How Monte Carlo Filled 2 Roles in 3 Weeks",
    quote: "The AI agents are incredible. They found candidates we never would have discovered on our own. Our time-to-hire dropped by 60%.",
    author: "Michael Chen",
    role: "VP Engineering",
    gradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    id: "figma",
    company: "Figma",
    headline: "How Figma Reduced Time-to-Hire by 60%",
    quote: "The quality of candidates from Juicebox is unmatched. Our hiring managers are thrilled with every shortlist we send them.",
    author: "Emily Rodriguez",
    role: "Recruiting Lead",
    gradient: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    id: "stripe",
    company: "Stripe",
    headline: "How Stripe Scaled Their Engineering Team",
    quote: "Juicebox gave us superpowers. We scaled from 50 to 200 engineers in just one year without compromising on quality.",
    author: "David Kim",
    role: "Engineering Director",
    gradient: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/20",
  },
];

export function Testimonials() {
  return (
    <section 
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(180deg, #0D0C1D 0%, #1C1252 50%, #0D0C1D 100%)",
      }}
      id="customers"
      data-testid="section-testimonials"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#FF5A30] text-sm font-medium uppercase tracking-wider mb-4 block" data-testid="text-testimonials-label">
            [03] customers
          </span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            data-testid="text-testimonials-heading"
          >
            How top teams win with Juicebox
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto" data-testid="text-testimonials-subheading">
            Join hundreds of companies that trust Juicebox to build world-class teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-gradient-to-br ${testimonial.gradient} backdrop-blur-sm rounded-2xl p-8 border ${testimonial.borderColor} hover:border-opacity-40 transition-all duration-300`}
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <div className="mb-4">
                <span className="text-white/40 text-sm font-medium">{testimonial.company}</span>
              </div>
              <h3 
                className="text-xl font-bold text-white mb-4"
                data-testid={`text-testimonial-headline-${testimonial.id}`}
              >
                {testimonial.headline}
              </h3>
              <p 
                className="text-white/60 mb-6 leading-relaxed italic"
                data-testid={`text-testimonial-quote-${testimonial.id}`}
              >
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-white font-semibold text-sm border border-white/10"
                  data-testid={`avatar-testimonial-${testimonial.id}`}
                >
                  {testimonial.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p 
                    className="font-semibold text-white text-sm"
                    data-testid={`text-testimonial-author-${testimonial.id}`}
                  >
                    {testimonial.author}
                  </p>
                  <p 
                    className="text-white/40 text-sm"
                    data-testid={`text-testimonial-role-${testimonial.id}`}
                  >
                    {testimonial.role}, {testimonial.company}
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
