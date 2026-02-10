import { motion } from "framer-motion";

const testimonials = [
  {
    id: "greenfield",
    company: "Greenfield Co.",
    headline: "From 6-Second Load Time to Under 2",
    quote: "Our old site was embarrassing. Sitebloom rebuilt it from scratch and our bounce rate dropped 47% in the first month. Customers actually stay now.",
    author: "Sarah Martinez",
    role: "Founder",
  },
  {
    id: "peakfit",
    company: "PeakFit Studio",
    headline: "Online Bookings Up 3x After Redesign",
    quote: "We were losing clients to competitors with better websites. Sitebloom gave us a site that actually converts. Membership signups tripled.",
    author: "Michael Chen",
    role: "Owner",
  },
  {
    id: "luxehome",
    company: "LuxeHome",
    headline: "Mobile Revenue Went from $0 to $40K/Month",
    quote: "Our old site was basically unusable on phones. Sitebloom rebuilt everything mobile-first and we unlocked an entire revenue channel we were missing.",
    author: "Emily Rodriguez",
    role: "E-Commerce Director",
  },
  {
    id: "arcvault",
    company: "ArcVault",
    headline: "SEO Rankings Jumped 32 Positions in 60 Days",
    quote: "Sitebloom didn't just make our site look better. They rebuilt the architecture so Google actually finds us. Organic traffic is up 200%.",
    author: "David Kim",
    role: "Marketing Lead",
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
            [03] RESULTS
          </span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-6 tracking-tight"
            data-testid="text-testimonials-heading"
          >
            Real businesses. Real transformations.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto" data-testid="text-testimonials-subheading">
            We don't just redesign websites. We fix what's broken and build what's missing.
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
