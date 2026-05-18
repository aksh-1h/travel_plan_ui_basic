import { motion } from "motion/react";
import { Link } from "react-router";
import { Sparkles, MapPin, Heart, Globe, Plane, Star, Camera, Users, TrendingUp, BookOpen } from "lucide-react";

export default function Home() {
  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const features = [
    {
      icon: BookOpen,
      title: "Smart Trip Planning",
      description: "Build detailed day-by-day itineraries with drag-and-drop ease. Add activities, restaurants, and lodging all in one place.",
      color: "from-[#2BB3FF] to-[#8ED8FF]",
    },
    {
      icon: Sparkles,
      title: "Personalized Recommendations",
      description: "Get handpicked suggestions based on your interests, travel style, and budget — no generic lists.",
      color: "from-[#2BB3FF] to-[#8ED8FF]",
    },
    {
      icon: MapPin,
      title: "Interactive Maps",
      description: "Visualize your entire trip with pins, routes, and hidden gems recommended by local experts.",
      color: "from-indigo-400 to-[#2BB3FF]",
    },
    {
      icon: Users,
      title: "Community Itineraries",
      description: "Explore real trip plans from seasoned travelers and discover off-the-beaten-path destinations.",
      color: "from-amber-400 to-orange-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      location: "San Francisco, CA",
      text: "Roamy turned my chaotic saved spots into a proper Japan itinerary. Saved me weeks of planning and everything actually worked out perfectly.",
      avatar: "SC",
    },
    {
      name: "Marcus Johnson",
      location: "New York, NY",
      text: "Finally, a travel app that understands what I actually want. The recommendations felt curated, not generic — like a friend who's been there.",
      avatar: "MJ",
    },
    {
      name: "Emma Rodriguez",
      location: "Miami, FL",
      text: "I had a full Bali trip planned in under 20 minutes. Everything was already mapped out with times, costs, and alternatives. Absolute game changer.",
      avatar: "ER",
    },
  ];

  return (
    <div className="overflow-hidden" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
      {/* Hero Section with 3D background */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        {/* Background gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2140] to-[#0a3060]" />

        {/* 3D Background Image - faded */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/hero_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
            opacity: 1,
            mixBlendMode: "luminosity",
          }}
        />

        {/* Fade overlay to blend image into background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-[#0a1628]/30" />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-[#2BB3FF]/20 rounded-full blur-2xl"
          animate={floatAnimation}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-32 h-32 bg-[#8ED8FF]/15 rounded-full blur-3xl"
          animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 text-sm font-medium mb-8">
              <Star className="w-4 h-4 text-[#8ED8FF]" />
              <span>Trusted by 500,000+ travelers worldwide</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Plan{" "}
              <span
                className="text-[#8ED8FF] relative inline-block"
                style={{ fontFamily: "Caveat, cursive", fontWeight: 800 }}
              >
                Smarter Trips
              </span>
              <br />
              <span className="text-white">in Minutes, Not Hours</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            From inspiration to a complete day-by-day itinerary — Roamy helps you plan real trips
            with personalized recommendations, interactive maps, and seamless collaboration.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/ai-planner"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2BB3FF] to-[#8ED8FF] text-white rounded-full font-semibold shadow-xl shadow-[#2BB3FF]/40 hover:shadow-2xl hover:shadow-[#2BB3FF]/50 transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              <span>Start Planning Free</span>
            </Link>
            <Link
              to="/explore"
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Globe className="w-5 h-5" />
              <span>Explore Destinations</span>
            </Link>
          </motion.div>

          <motion.div
            className="mt-16 flex items-center justify-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500K+</div>
              <div className="text-sm text-white/60 mt-1">Trips Planned</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.9★</div>
              <div className="text-sm text-white/60 mt-1">User Rating</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">180+</div>
              <div className="text-sm text-white/60 mt-1">Countries</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#2BB3FF] font-semibold text-sm uppercase tracking-widest mb-4">Everything You Need</p>
            <h2 className="text-5xl font-extrabold text-[#111111] mb-6">
              Plan Your{" "}
              <span style={{ fontFamily: "Caveat, cursive", fontWeight: 800 }} className="text-[#2BB3FF]">
                Dream Trip
              </span>
            </h2>
            <p className="text-xl text-[#7A7A7A] max-w-2xl mx-auto">
              From inspiration to itinerary — intelligent tools that make travel planning feel effortless and personal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="group p-10 bg-gradient-to-br from-white to-[#EAF6FC] rounded-[32px] shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:scale-[1.02]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111] mb-4">{feature.title}</h3>
                  <p className="text-lg text-[#7A7A7A] leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#F7F7F9] to-[#EAF6FC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#2BB3FF] font-semibold text-sm uppercase tracking-widest mb-4">Real Travelers</p>
            <h2 className="text-5xl font-extrabold text-[#111111] mb-6">
              Loved by{" "}
              <span style={{ fontFamily: "Caveat, cursive", fontWeight: 800 }} className="text-[#FF4F6D]">
                Explorers
              </span>{" "}
              Worldwide
            </h2>
            <p className="text-xl text-[#7A7A7A]">Hear from travelers who've used Roamy to plan their adventures</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-[32px] shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                  ))}
                </div>
                <p className="text-[#444] leading-relaxed mb-6 text-base italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2BB3FF] to-[#8ED8FF] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-[#111111]">{testimonial.name}</div>
                    <div className="text-sm text-[#B5B5B5]">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#0a1628] to-[#0a3060] text-white relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/hero_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#2BB3FF]/10 rounded-full blur-3xl"
          animate={floatAnimation}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-[#8ED8FF]/10 rounded-full blur-3xl"
          animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[#8ED8FF] font-semibold text-sm uppercase tracking-widest mb-4">Start Today</p>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">Ready to Explore the World?</h2>
          <p className="text-xl mb-12 text-white/70 max-w-xl mx-auto">
            Join hundreds of thousands of travelers who plan smarter, travel better, and discover more.
          </p>
          <Link
            to="/ai-planner"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#2BB3FF] to-[#8ED8FF] text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          >
            <Plane className="w-6 h-6" />
            <span>Plan Your Trip Now</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
