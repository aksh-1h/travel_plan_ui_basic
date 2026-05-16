import { motion } from "motion/react";
import { Link } from "react-router";
import { Sparkles, MapPin, Instagram, Heart, Globe, Plane, Star, Camera, Users, TrendingUp } from "lucide-react";

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
      icon: Instagram,
      title: "Import from Social Media",
      description: "Bring your saved posts from TikTok, Instagram, and Pinterest into one smart travel board.",
      color: "from-pink-400 to-rose-500",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Itineraries",
      description: "Get personalized day-by-day plans based on your interests, budget, and travel style.",
      color: "from-[#2BB3FF] to-[#8ED8FF]",
    },
    {
      icon: MapPin,
      title: "Live Interactive Maps",
      description: "Visualize your entire trip with pins, routes, and hidden gems recommended by locals.",
      color: "from-purple-400 to-indigo-500",
    },
    {
      icon: Users,
      title: "Community Discovery",
      description: "Explore itineraries from travelers like you and discover off-the-beaten-path destinations.",
      color: "from-amber-400 to-orange-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      location: "San Francisco, CA",
      text: "Roamy turned my chaotic Pinterest boards into an actual trip to Japan. The AI planner saved me weeks of research!",
      avatar: "SC",
    },
    {
      name: "Marcus Johnson",
      location: "New York, NY",
      text: "Finally, a travel app that actually gets me. The recommendations are spot-on and the interface is beautiful.",
      avatar: "MJ",
    },
    {
      name: "Emma Rodriguez",
      location: "Miami, FL",
      text: "I imported all my saved Instagram posts and had a full Bali itinerary in minutes. Game changer!",
      avatar: "ER",
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-24 bg-gradient-to-b from-[#EAF6FC] via-white to-[#F7F7F9]">
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-[#2BB3FF]/10 rounded-full blur-xl"
          animate={floatAnimation}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-[#FF4F6D]/10 rounded-full blur-xl"
          animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 0.5 } }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-[#8ED8FF]/10 rounded-full blur-xl"
          animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-6xl md:text-7xl font-extrabold text-[#111111] leading-tight mb-6">
              Plan{" "}
              <span
                className="text-[#2BB3FF] relative inline-block"
                style={{ fontFamily: "Caveat, cursive", fontWeight: 700 }}
              >
                Smarter Trips
              </span>
              <br />
              in Minutes, Not Hours
            </h1>
          </motion.div>

          <motion.p
            className="text-xl text-[#7A7A7A] mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Turn your travel inspiration from social media into real adventures. AI-powered planning,
            personalized recommendations, and everything you need in one beautiful place.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/ai-planner"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2BB3FF] to-[#8ED8FF] text-white rounded-full font-semibold shadow-xl shadow-[#2BB3FF]/30 hover:shadow-2xl hover:shadow-[#2BB3FF]/40 transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              <span>Start Planning Free</span>
            </Link>
            <Link
              to="/explore"
              className="flex items-center gap-3 px-8 py-4 bg-white text-[#111111] rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Globe className="w-5 h-5" />
              <span>Explore Destinations</span>
            </Link>
          </motion.div>

          <motion.div
            className="mt-16 flex items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#111111]">500K+</div>
              <div className="text-sm text-[#7A7A7A]">Trips Planned</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-[#111111]">4.9★</div>
              <div className="text-sm text-[#7A7A7A]">User Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-[#111111]">180+</div>
              <div className="text-sm text-[#7A7A7A]">Countries</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute right-10 top-1/4 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Plane className="w-32 h-32 text-[#2BB3FF]" />
        </motion.div>
      </section>

      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold text-[#111111] mb-6">
              Everything You Need to Plan Your{" "}
              <span style={{ fontFamily: "Caveat, cursive", fontWeight: 700 }} className="text-[#2BB3FF]">
                Dream Trip
              </span>
            </h2>
            <p className="text-xl text-[#7A7A7A] max-w-2xl mx-auto">
              From inspiration to itinerary, we've got you covered with intelligent tools that make travel
              planning effortless.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="group p-10 bg-gradient-to-br from-white to-[#EAF6FC] rounded-[32px] shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:scale-105"
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

      <section className="py-32 px-6 bg-gradient-to-b from-[#F7F7F9] to-[#EAF6FC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold text-[#111111] mb-6">
              Loved by{" "}
              <span style={{ fontFamily: "Caveat, cursive", fontWeight: 700 }} className="text-[#FF4F6D]">
                Travelers
              </span>{" "}
              Worldwide
            </h2>
            <p className="text-xl text-[#7A7A7A]">See what our community is saying about Roamy</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-[32px] shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2BB3FF] to-[#8ED8FF] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-[#111111]">{testimonial.name}</div>
                    <div className="text-sm text-[#B5B5B5]">{testimonial.location}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                  ))}
                </div>
                <p className="text-[#7A7A7A] leading-relaxed">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-br from-[#2BB3FF] to-[#8ED8FF] text-white relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={floatAnimation}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">Ready to Explore the World?</h2>
          <p className="text-xl mb-12 opacity-90">
            Join thousands of travelers who plan smarter with Roamy. Start your journey today.
          </p>
          <Link
            to="/ai-planner"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#2BB3FF] rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="w-6 h-6" />
            <span>Get Started Free</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
