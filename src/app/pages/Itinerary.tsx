import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Clock, DollarSign, Heart, Share2, Download, Calendar, Coffee, Utensils, Camera, Star, Map } from "lucide-react";

export default function Itinerary() {
  const [savedActivities, setSavedActivities] = useState<number[]>([]);

  const tripInfo = {
    destination: "Bali, Indonesia",
    duration: "7 days",
    dates: "May 20 - May 27, 2026",
    travelers: 2,
    budget: "$2,500",
  };

  const itinerary = [
    {
      day: 1,
      title: "Arrival & Ubud Exploration",
      activities: [
        {
          id: 1,
          time: "10:00 AM",
          title: "Arrive at Ngurah Rai Airport",
          description: "Pick up rental car and drive to Ubud (1.5 hours)",
          icon: MapPin,
          category: "transport",
        },
        {
          id: 2,
          time: "1:00 PM",
          title: "Lunch at Locavore",
          description: "Award-winning restaurant featuring local Indonesian cuisine",
          icon: Utensils,
          category: "food",
          price: "$$$$",
        },
        {
          id: 3,
          time: "3:00 PM",
          title: "Tegallalang Rice Terraces",
          description: "Iconic stepped rice paddies with jungle swings and photo ops",
          icon: Camera,
          category: "sightseeing",
          price: "$",
        },
        {
          id: 4,
          time: "6:00 PM",
          title: "Sunset at Campuhan Ridge Walk",
          description: "Scenic ridge walk through lush valleys",
          icon: Camera,
          category: "nature",
          price: "Free",
        },
      ],
    },
    {
      day: 2,
      title: "Temples & Culture",
      activities: [
        {
          id: 5,
          time: "8:00 AM",
          title: "Tirta Empul Temple",
          description: "Sacred water temple with purification pools",
          icon: MapPin,
          category: "culture",
          price: "$$",
        },
        {
          id: 6,
          time: "11:00 AM",
          title: "Coffee Plantation Tour",
          description: "Learn about Balinese coffee and try the famous Luwak coffee",
          icon: Coffee,
          category: "experience",
          price: "$",
        },
        {
          id: 7,
          time: "2:00 PM",
          title: "Ubud Monkey Forest",
          description: "Ancient sanctuary home to over 700 monkeys",
          icon: Camera,
          category: "nature",
          price: "$$",
        },
        {
          id: 8,
          time: "7:00 PM",
          title: "Traditional Kecak Dance",
          description: "Dramatic fire dance performance at Uluwatu Temple",
          icon: Star,
          category: "culture",
          price: "$$$",
        },
      ],
    },
    {
      day: 3,
      title: "Beach Day in Seminyak",
      activities: [
        {
          id: 9,
          time: "10:00 AM",
          title: "Drive to Seminyak Beach",
          description: "Relax on golden sands with beach clubs and cafes",
          icon: MapPin,
          category: "beach",
          price: "Free",
        },
        {
          id: 10,
          time: "1:00 PM",
          title: "Lunch at Potato Head Beach Club",
          description: "Trendy beach club with infinity pool and ocean views",
          icon: Utensils,
          category: "food",
          price: "$$$",
        },
        {
          id: 11,
          time: "4:00 PM",
          title: "Surf Lesson",
          description: "Beginner-friendly waves perfect for learning",
          icon: Star,
          category: "activity",
          price: "$$",
        },
        {
          id: 12,
          time: "6:30 PM",
          title: "Sunset Dinner at La Lucciola",
          description: "Beachfront Italian restaurant with stunning sunset views",
          icon: Utensils,
          category: "food",
          price: "$$$$",
        },
      ],
    },
  ];

  const toggleSave = (id: number) => {
    setSavedActivities((prev) =>
      prev.includes(id) ? prev.filter((actId) => actId !== id) : [...prev, id]
    );
  };

  const categoryColors: { [key: string]: string } = {
    transport: "from-blue-400 to-blue-600",
    food: "from-orange-400 to-red-500",
    sightseeing: "from-purple-400 to-pink-500",
    nature: "from-green-400 to-emerald-600",
    culture: "from-indigo-400 to-purple-600",
    beach: "from-cyan-400 to-blue-500",
    experience: "from-amber-400 to-orange-500",
    activity: "from-rose-400 to-pink-600",
  };

  return (
    <div className="min-h-screen pb-20">
      <section className="bg-gradient-to-br from-[#2BB3FF] to-[#8ED8FF] text-white px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4">{tripInfo.destination}</h1>
                <div className="flex items-center gap-6 text-lg opacity-90">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{tripInfo.dates}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{tripInfo.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    <span>{tripInfo.budget}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300">
                  <Download className="w-5 h-5" />
                </button>
                <button className="px-6 py-4 bg-white text-[#2BB3FF] rounded-2xl font-semibold hover:shadow-xl transition-all duration-300">
                  <Map className="w-5 h-5 inline mr-2" />
                  View Map
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {itinerary.map((day, dayIndex) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: dayIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2BB3FF] to-[#8ED8FF] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {day.day}
                  </div>
                  <div>
                    <div className="text-sm text-[#B5B5B5]">Day {day.day}</div>
                    <h2 className="text-2xl font-bold text-[#111111]">{day.title}</h2>
                  </div>
                </div>

                <div className="space-y-4 pl-8 border-l-4 border-[#EAF6FC] ml-8">
                  {day.activities.map((activity, actIndex) => {
                    const Icon = activity.icon;
                    const isSaved = savedActivities.includes(activity.id);

                    return (
                      <motion.div
                        key={activity.id}
                        className="group relative bg-white rounded-[24px] p-6 shadow-lg hover:shadow-xl transition-all duration-300 ml-8"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: dayIndex * 0.1 + actIndex * 0.05 }}
                      >
                        <div className="absolute -left-14 top-6 w-8 h-8 bg-white rounded-full border-4 border-[#EAF6FC] shadow-md" />

                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-3">
                              <div
                                className={`w-12 h-12 bg-gradient-to-br ${
                                  categoryColors[activity.category]
                                } rounded-xl flex items-center justify-center shadow-md`}
                              >
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-[#2BB3FF]">{activity.time}</div>
                                <h3 className="text-xl font-bold text-[#111111]">{activity.title}</h3>
                              </div>
                            </div>

                            <p className="text-[#7A7A7A] leading-relaxed mb-3 ml-16">{activity.description}</p>

                            <div className="flex items-center gap-3 ml-16">
                              {activity.price && (
                                <span className="px-4 py-1.5 bg-[#EAF6FC] text-[#2BB3FF] rounded-full text-sm font-semibold">
                                  {activity.price}
                                </span>
                              )}
                              <span className="px-4 py-1.5 bg-gray-100 text-[#7A7A7A] rounded-full text-sm font-medium capitalize">
                                {activity.category}
                              </span>
                            </div>
                          </div>

                          <button
                            onClick={() => toggleSave(activity.id)}
                            className={`p-3 rounded-xl transition-all duration-300 ${
                              isSaved
                                ? "bg-[#FF4F6D] text-white shadow-lg"
                                : "bg-gray-100 text-gray-400 hover:bg-[#FF4F6D] hover:text-white"
                            }`}
                          >
                            <Heart className={`w-5 h-5 ${isSaved ? "fill-current" : ""}`} />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 p-8 bg-gradient-to-br from-[#EAF6FC] to-white rounded-[32px] border-2 border-dashed border-[#2BB3FF]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#111111] mb-2">Want to customize your itinerary?</h3>
              <p className="text-[#7A7A7A] mb-6">
                Add, remove, or rearrange activities to make this trip truly yours
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-[#2BB3FF] to-[#8ED8FF] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Edit Itinerary
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
