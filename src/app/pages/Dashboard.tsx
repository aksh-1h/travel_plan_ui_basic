import { motion } from "motion/react";
import { Link } from "react-router";
import { MapPin, Calendar, Heart, TrendingUp, Globe, Plane, Star, Plus, Clock, Map } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { label: "Countries Visited", value: "12", icon: Globe, color: "from-[#2BB3FF] to-[#8ED8FF]" },
    { label: "Trips Planned", value: "24", icon: Plane, color: "from-purple-400 to-indigo-500" },
    { label: "Places Saved", value: "156", icon: Heart, color: "from-pink-400 to-rose-500" },
    { label: "Hours Saved", value: "48", icon: Clock, color: "from-amber-400 to-orange-500" },
  ];

  const upcomingTrips = [
    {
      id: 1,
      destination: "Bali, Indonesia",
      dates: "May 20 - May 27, 2026",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
      status: "upcoming",
      daysUntil: 4,
    },
    {
      id: 2,
      destination: "Tokyo, Japan",
      dates: "Jun 15 - Jun 22, 2026",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
      status: "upcoming",
      daysUntil: 30,
    },
  ];

  const pastTrips = [
    {
      id: 3,
      destination: "Paris, France",
      dates: "Mar 10 - Mar 17, 2026",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
      rating: 5,
    },
    {
      id: 4,
      destination: "Santorini, Greece",
      dates: "Feb 5 - Feb 12, 2026",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800",
      rating: 5,
    },
    {
      id: 5,
      destination: "New York City",
      dates: "Jan 8 - Jan 15, 2026",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
      rating: 4,
    },
  ];

  const savedPlaces = [
    { name: "Tegallalang Rice Terraces", location: "Bali", image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400" },
    { name: "Senso-ji Temple", location: "Tokyo", image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400" },
    { name: "Amalfi Coast", location: "Italy", image: "https://images.unsplash.com/photo-1558929996-da64ba858215?w=400" },
    { name: "Blue Lagoon", location: "Iceland", image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400" },
  ];

  return (
    <div className="min-h-screen pb-20">
      <section className="bg-gradient-to-br from-[#EAF6FC] to-white px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#111111] mb-4">
              Welcome back,{" "}
              <span style={{ fontFamily: "Caveat, cursive", fontWeight: 700 }} className="text-[#2BB3FF]">
                Sarah
              </span>
            </h1>
            <p className="text-xl text-[#7A7A7A]">Your travel dashboard and trip planning hub</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-[24px] p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-4xl font-extrabold text-[#111111] mb-1">{stat.value}</div>
                  <div className="text-sm text-[#7A7A7A] font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-extrabold text-[#111111]">Upcoming Trips</h2>
            <Link
              to="/ai-planner"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2BB3FF] to-[#8ED8FF] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Plus className="w-5 h-5" />
              <span>Plan New Trip</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingTrips.map((trip, index) => (
              <motion.div
                key={trip.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to={`/itinerary/${trip.id}`}>
                  <div className="relative overflow-hidden rounded-[28px] shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={trip.image}
                        alt={trip.destination}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    <div className="absolute top-4 right-4 px-5 py-2.5 bg-gradient-to-r from-[#2BB3FF] to-[#8ED8FF] rounded-full text-white font-bold shadow-lg flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>{trip.daysUntil} days away</span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent text-white">
                      <h3 className="text-2xl font-bold mb-2">{trip.destination}</h3>
                      <div className="flex items-center gap-2 text-sm opacity-90">
                        <Calendar className="w-4 h-4" />
                        <span>{trip.dates}</span>
                      </div>
                      <button className="mt-4 px-6 py-3 bg-white text-[#2BB3FF] rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                        <Map className="w-4 h-4" />
                        <span>View Itinerary</span>
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-[#F7F7F9]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#111111] mb-8">Past Adventures</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pastTrips.map((trip, index) => (
              <motion.div
                key={trip.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={trip.image}
                      alt={trip.destination}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#111111] mb-2">{trip.destination}</h3>
                    <div className="flex items-center gap-2 text-sm text-[#7A7A7A] mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{trip.dates}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < trip.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-extrabold text-[#111111]">
              Saved Places{" "}
              <span className="text-[#B5B5B5] font-normal text-2xl">({savedPlaces.length})</span>
            </h2>
            <Link
              to="/explore"
              className="text-[#2BB3FF] font-semibold hover:underline flex items-center gap-2"
            >
              <span>Explore More</span>
              <TrendingUp className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {savedPlaces.map((place, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative overflow-hidden rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <div className="text-white">
                      <h4 className="font-bold mb-1">{place.name}</h4>
                      <div className="flex items-center gap-1 text-sm opacity-90">
                        <MapPin className="w-3 h-3" />
                        <span>{place.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-[#FF4F6D] fill-current" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
