import { motion } from "framer-motion";

const testimonials = [
  {
    id: "cointracker",
    company: "CoinTracker",
    headline: "How CoinTracker Saves 30+ Hours Weekly",
    quote: "Juicebox transformed our recruiting process. We went from spending days sourcing to finding top candidates in hours. The AI actually understands what we're looking for.",
    author: "Sarah Martinez",
    role: "Head of Talent",
  },
  {
    id: "montecarlo",
    company: "Monte Carlo",
    headline: "How Monte Carlo Filled 2 Roles in 3 Weeks",
    quote: "The AI agents are incredible. They found candidates we never would have discovered on our own. Our time-to-hire dropped by 60%.",
    author: "Michael Chen",
    role: "VP Engineering",
  },
  {
    id: "figma",
    company: "Figma",
    headline: "How Figma Reduced Time-to-Hire by 60%",
    quote: "The quality of candidates from Juicebox is unmatched. Our hiring managers are thrilled with every shortlist we send them.",
    author: "Emily Rodriguez",
    role: "Recruiting Lead",
  },
  {
    id: "stripe",
    company: "Stripe",
    headline: "How Stripe Scaled Their Engineering Team",
    quote: "Juicebox gave us superpowers. We scaled from 50 to 200 engineers in just one year without compromising on quality.",
    author: "David Kim",
    role: "Engineering Director",
  },
];

export function Testimonials() {
  return (
    <section 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
      id="testimonials"
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
          <span 
            className="text-[#9333EA] text-sm uppercase tracking-wider mb-4 block"
            style={{ fontFamily: "'VT323', monospace" }}
            data-testid="text-testimonials-label"
          >
            [03] CUSTOMERS
          </span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-6 tracking-tight"
            data-testid="text-testimonials-heading"
          >
            How top teams win with Juicebox
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto" data-testid="text-testimonials-subheading">
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
              className="relative bg-gray-50 rounded-lg p-8 border border-gray-200 hover:border-[#9333EA]/30 transition-all duration-300"
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <div className="mb-4">
                <span 
                  className="text-[#9333EA] text-sm tracking-wider"
                  style={{ fontFamily: "'VT323', monospace" }}
                >
                  {testimonial.company.toUpperCase()}
                </span>
              </div>
              <h3 
                className="text-xl font-semibold text-gray-900 mb-4"
                data-testid={`text-testimonial-headline-${testimonial.id}`}
              >
                {testimonial.headline}
              </h3>
              <p 
                className="text-gray-500 mb-6 leading-relaxed italic"
                data-testid={`text-testimonial-quote-${testimonial.id}`}
              >
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full bg-[#9333EA]/10 flex items-center justify-center text-[#9333EA] font-semibold text-sm border border-[#9333EA]/20"
                  data-testid={`avatar-testimonial-${testimonial.id}`}
                >
                  {testimonial.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p 
                    className="font-semibold text-gray-900 text-sm"
                    data-testid={`text-testimonial-author-${testimonial.id}`}
                  >
                    {testimonial.author}
                  </p>
                  <p 
                    className="text-gray-400 text-sm"
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
