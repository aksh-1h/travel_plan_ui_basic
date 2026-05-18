import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { MapPin, Clock, DollarSign, Heart, Share2, Download, Calendar, Coffee, Utensils, Camera, Star, Map, Plus, Trash2, X } from "lucide-react";

type Activity = {
  id: number;
  time: string;
  title: string;
  description: string;
  icon: React.ElementType;
  category: string;
  price?: string;
};

type DayPlan = {
  day: number;
  title: string;
  activities: Activity[];
};

const defaultItinerary: DayPlan[] = [
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

export default function Itinerary() {
  const [itinerary, setItinerary] = useState<DayPlan[]>(defaultItinerary);
  const [savedActivities, setSavedActivities] = useState<number[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [newActivity, setNewActivity] = useState({
    time: "",
    title: "",
    description: "",
    category: "sightseeing",
    price: "",
  });

  let nextId = Math.max(...itinerary.flatMap(d => d.activities.map(a => a.id))) + 1;

  const tripInfo = {
    destination: "Bali, Indonesia",
    duration: "7 days",
    dates: "May 20 - May 27, 2026",
    travelers: 2,
    budget: "$2,500",
  };

  const categoryStyles: { [key: string]: { bg: string; icon: string } } = {
    transport:   { bg: "bg-blue-50",   icon: "text-blue-500" },
    food:        { bg: "bg-orange-50", icon: "text-orange-500" },
    sightseeing: { bg: "bg-violet-50", icon: "text-violet-500" },
    nature:      { bg: "bg-emerald-50", icon: "text-emerald-600" },
    culture:     { bg: "bg-indigo-50", icon: "text-indigo-500" },
    beach:       { bg: "bg-cyan-50",   icon: "text-cyan-600" },
    experience:  { bg: "bg-amber-50",  icon: "text-amber-600" },
    activity:    { bg: "bg-rose-50",   icon: "text-rose-500" },
  };

  const categoryIcons: { [key: string]: React.ElementType } = {
    transport: MapPin,
    food: Utensils,
    sightseeing: Camera,
    nature: Camera,
    culture: Star,
    beach: MapPin,
    experience: Coffee,
    activity: Star,
  };

  const toggleSave = (id: number) => {
    setSavedActivities((prev) =>
      prev.includes(id) ? prev.filter((actId) => actId !== id) : [...prev, id]
    );
  };

  const deleteActivity = (dayIndex: number, actId: number) => {
    setItinerary(prev => prev.map((day, i) =>
      i === dayIndex
        ? { ...day, activities: day.activities.filter(a => a.id !== actId) }
        : day
    ));
  };

  const openAddModal = (dayIndex: number) => {
    setSelectedDay(dayIndex);
    setNewActivity({ time: "", title: "", description: "", category: "sightseeing", price: "" });
    setShowAddModal(true);
  };

  const handleAddActivity = () => {
    if (!newActivity.title.trim() || selectedDay === null) return;
    const IconComponent = categoryIcons[newActivity.category] || Camera;
    const activity: Activity = {
      id: nextId++,
      time: newActivity.time || "TBD",
      title: newActivity.title,
      description: newActivity.description,
      icon: IconComponent,
      category: newActivity.category,
      price: newActivity.price || undefined,
    };
    setItinerary(prev => prev.map((day, i) =>
      i === selectedDay
        ? { ...day, activities: [...day.activities, activity] }
        : day
    ));
    setShowAddModal(false);
  };

  return (
    <div className="min-h-screen pb-20" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
      {/* Hero section with compass 3D background */}
      <section className="relative px-6 py-16 overflow-hidden">
        {/* Dark gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2550] to-[#0a3565]" />

        {/* 3D compass image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/itinerary_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
            opacity: 0.28,
            mixBlendMode: "luminosity",
          }}
        />

        {/* Fade overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#F7F7F9] to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#8ED8FF] font-semibold text-sm uppercase tracking-widest mb-4">Your Itinerary</p>
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">{tripInfo.destination}</h1>
                <div className="flex flex-wrap items-center gap-6 text-lg text-white/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#8ED8FF]" />
                    <span>{tripInfo.dates}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#8ED8FF]" />
                    <span>{tripInfo.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#8ED8FF]" />
                    <span>{tripInfo.budget}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="p-4 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/25 transition-all duration-300 text-white">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-4 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/25 transition-all duration-300 text-white">
                  <Download className="w-5 h-5" />
                </button>
                <button className="px-6 py-4 bg-gradient-to-r from-[#2BB3FF] to-[#8ED8FF] text-white rounded-2xl font-semibold hover:shadow-xl transition-all duration-300">
                  <Map className="w-5 h-5 inline mr-2" />
                  View Map
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Itinerary Days */}
      <section className="px-6 py-12 bg-[#F7F7F9]">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {itinerary.map((day, dayIndex) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: dayIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Day header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2BB3FF] to-[#8ED8FF] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {day.day}
                    </div>
                    <div>
                      <div className="text-sm text-[#B5B5B5]">Day {day.day}</div>
                      <h2 className="text-2xl font-bold text-[#111111]">{day.title}</h2>
                    </div>
                  </div>
                  <button
                    onClick={() => openAddModal(dayIndex)}
                    className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#2BB3FF] to-[#8ED8FF] text-white rounded-full font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm"
                  >
                    <Plus className="w-4 h-4" />
                    Add Activity
                  </button>
                </div>

                {/* Activities */}
                <div className="space-y-4 pl-8 border-l-4 border-[#EAF6FC] ml-8">
                  <AnimatePresence>
                    {day.activities.length === 0 ? (
                      <div className="ml-8 p-6 bg-white rounded-[24px] shadow border-2 border-dashed border-[#2BB3FF]/30 text-center text-[#B5B5B5]">
                        No activities yet — click <strong className="text-[#2BB3FF]">Add Activity</strong> to get started
                      </div>
                    ) : (
                      day.activities.map((activity, actIndex) => {
                        const Icon = activity.icon;
                        const isSaved = savedActivities.includes(activity.id);

                        return (
                          <motion.div
                            key={activity.id}
                            layout
                            className="group relative bg-white rounded-[24px] p-6 shadow-lg hover:shadow-xl transition-all duration-300 ml-8"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20, scale: 0.95 }}
                            transition={{ duration: 0.3, delay: dayIndex * 0.05 + actIndex * 0.03 }}
                          >
                            <div className="absolute -left-14 top-6 w-8 h-8 bg-white rounded-full border-4 border-[#EAF6FC] shadow-md" />

                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-4 mb-3">
                                  <div
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                      categoryStyles[activity.category]?.bg ?? "bg-gray-100"
                                    }`}
                                  >
                                    <Icon className={`w-5 h-5 ${categoryStyles[activity.category]?.icon ?? "text-gray-500"}`} />
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

                              {/* Action buttons */}
                              <div className="flex items-center gap-2 ml-4">
                                <button
                                  onClick={() => toggleSave(activity.id)}
                                  className={`p-3 rounded-xl transition-all duration-300 ${
                                    isSaved
                                      ? "bg-[#FF4F6D] text-white shadow-lg"
                                      : "bg-gray-100 text-gray-400 hover:bg-[#FF4F6D] hover:text-white"
                                  }`}
                                  title="Save activity"
                                >
                                  <Heart className={`w-5 h-5 ${isSaved ? "fill-current" : ""}`} />
                                </button>
                                <button
                                  onClick={() => deleteActivity(dayIndex, activity.id)}
                                  className="p-3 rounded-xl bg-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all duration-300"
                                  title="Remove activity"
                                >
                                  <Trash2 className="w-5 h-5" />
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Activity Modal */}
      <AnimatePresence>
        {showAddModal && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAddModal(false)}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-white rounded-[32px] shadow-2xl p-8 w-full max-w-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-[#111111]">
                    Add Activity — Day {selectedDay !== null ? itinerary[selectedDay]?.day : ""}
                  </h3>
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-5 h-5 text-[#7A7A7A]" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#111111] mb-2">Activity Name *</label>
                    <input
                      type="text"
                      value={newActivity.title}
                      onChange={(e) => setNewActivity({ ...newActivity, title: e.target.value })}
                      placeholder="e.g., Visit Tanah Lot Temple"
                      className="w-full px-5 py-3.5 bg-[#F7F7F9] rounded-2xl border-2 border-transparent focus:border-[#2BB3FF] outline-none transition-all duration-300"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#111111] mb-2">Time</label>
                      <input
                        type="text"
                        value={newActivity.time}
                        onChange={(e) => setNewActivity({ ...newActivity, time: e.target.value })}
                        placeholder="e.g., 9:00 AM"
                        className="w-full px-5 py-3.5 bg-[#F7F7F9] rounded-2xl border-2 border-transparent focus:border-[#2BB3FF] outline-none transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#111111] mb-2">Price</label>
                      <input
                        type="text"
                        value={newActivity.price}
                        onChange={(e) => setNewActivity({ ...newActivity, price: e.target.value })}
                        placeholder="e.g., $, $$, Free"
                        className="w-full px-5 py-3.5 bg-[#F7F7F9] rounded-2xl border-2 border-transparent focus:border-[#2BB3FF] outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#111111] mb-2">Category</label>
                    <select
                      value={newActivity.category}
                      onChange={(e) => setNewActivity({ ...newActivity, category: e.target.value })}
                      className="w-full px-5 py-3.5 bg-[#F7F7F9] rounded-2xl border-2 border-transparent focus:border-[#2BB3FF] outline-none transition-all duration-300"
                    >
                      <option value="transport">Transport</option>
                      <option value="food">Food & Dining</option>
                      <option value="sightseeing">Sightseeing</option>
                      <option value="nature">Nature</option>
                      <option value="culture">Culture</option>
                      <option value="beach">Beach</option>
                      <option value="experience">Experience</option>
                      <option value="activity">Activity</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#111111] mb-2">Description</label>
                    <textarea
                      value={newActivity.description}
                      onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
                      placeholder="Brief description of the activity..."
                      rows={3}
                      className="w-full px-5 py-3.5 bg-[#F7F7F9] rounded-2xl border-2 border-transparent focus:border-[#2BB3FF] outline-none transition-all duration-300 resize-none"
                    />
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 py-4 bg-gray-100 text-[#111111] rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddActivity}
                    disabled={!newActivity.title.trim()}
                    className="flex-1 py-4 bg-gradient-to-r from-[#2BB3FF] to-[#8ED8FF] text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    Add to Itinerary
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
