import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Sparkles, MapPin, Calendar, Users, DollarSign, Heart } from "lucide-react";

export default function AIPlanner() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: "",
    duration: "",
    travelers: "1",
    budget: "",
    interests: [] as string[],
    startDate: "",
  });


  const interestOptions = [
    { id: "culture", label: "Culture & History", icon: "🏛️" },
    { id: "food", label: "Food & Dining", icon: "🍜" },
    { id: "adventure", label: "Adventure", icon: "🏔️" },
    { id: "relaxation", label: "Relaxation", icon: "🧘" },
    { id: "nightlife", label: "Nightlife", icon: "🎉" },
    { id: "shopping", label: "Shopping", icon: "🛍️" },
    { id: "nature", label: "Nature", icon: "🌿" },
    { id: "photography", label: "Photography", icon: "📸" },
  ];

  const toggleInterest = (id: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(id)
        ? formData.interests.filter((i) => i !== id)
        : [...formData.interests, id],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/itinerary/1");
  };

  return (
    <div className="min-h-screen pb-20" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
      {/* Hero header with 3D map background */}
      <section className="relative px-6 pt-16 pb-32 overflow-hidden">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f3c] via-[#0a2550] to-[#0c3070]" />

        {/* 3D Map image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/planner_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
            mixBlendMode: "luminosity",
          }}
        />

        {/* Fade overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f3c]/30 via-transparent to-[#0d1f3c]/60" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F7F7F9] to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-[#2BB3FF] to-[#8ED8FF] rounded-[24px] flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-[#2BB3FF]/40">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <p className="text-[#8ED8FF] font-semibold text-sm uppercase tracking-widest mb-4">Trip Planner</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
              Plan Your{" "}
              <span style={{ fontFamily: "Caveat, cursive", fontWeight: 800 }} className="text-[#8ED8FF]">
                Perfect Trip
              </span>
            </h1>
            <p className="text-lg text-white/65">
              Tell us about your dream trip and we'll build a personalized itinerary tailored to you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form section */}
      <section className="px-6 pb-20 bg-[#F7F7F9]">
        <div className="max-w-4xl mx-auto -mt-16 relative z-10">
          <motion.div
            className="bg-white rounded-[32px] shadow-2xl p-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Step indicator */}
            <div className="flex items-center justify-between mb-10">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      s <= step
                        ? "bg-gradient-to-r from-[#2BB3FF] to-[#8ED8FF] text-white shadow-lg"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`flex-1 h-1 mx-4 rounded-full transition-all duration-300 ${
                        s < step ? "bg-gradient-to-r from-[#2BB3FF] to-[#8ED8FF]" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-[#111111] mb-8">Where & When?</h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#111111] mb-3">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Destination
                      </label>
                      <input
                        type="text"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        placeholder="e.g., Bali, Tokyo, Paris..."
                        className="w-full px-6 py-4 bg-[#F7F7F9] rounded-2xl border-2 border-transparent focus:border-[#2BB3FF] outline-none transition-all duration-300 text-lg"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#111111] mb-3">
                          <Calendar className="w-4 h-4 inline mr-2" />
                          Start Date
                        </label>
                        <input
                          type="date"
                          value={formData.startDate}
                          onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                          className="w-full px-6 py-4 bg-[#F7F7F9] rounded-2xl border-2 border-transparent focus:border-[#2BB3FF] outline-none transition-all duration-300"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#111111] mb-3">
                          <Calendar className="w-4 h-4 inline mr-2" />
                          Duration (days)
                        </label>
                        <input
                          type="number"
                          value={formData.duration}
                          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                          placeholder="7"
                          min="1"
                          max="30"
                          className="w-full px-6 py-4 bg-[#F7F7F9] rounded-2xl border-2 border-transparent focus:border-[#2BB3FF] outline-none transition-all duration-300 text-lg"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#111111] mb-3">
                        <Users className="w-4 h-4 inline mr-2" />
                        Number of Travelers
                      </label>
                      <select
                        value={formData.travelers}
                        onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                        className="w-full px-6 py-4 bg-[#F7F7F9] rounded-2xl border-2 border-transparent focus:border-[#2BB3FF] outline-none transition-all duration-300 text-lg"
                      >
                        <option value="1">Solo</option>
                        <option value="2">2 people</option>
                        <option value="3-5">3-5 people</option>
                        <option value="6+">6+ people</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-[#111111] mb-8">Budget & Interests</h2>

                  <div className="space-y-8">
                    <div>
                      <label className="block text-sm font-semibold text-[#111111] mb-3">
                        <DollarSign className="w-4 h-4 inline mr-2" />
                        Total Trip Budget
                      </label>
                      <div className="relative">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#7A7A7A] font-semibold text-lg select-none">$</span>
                        <input
                          type="number"
                          min="0"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          placeholder="e.g. 2500"
                          className="w-full pl-10 pr-6 py-4 bg-[#F7F7F9] rounded-2xl border-2 border-transparent focus:border-[#2BB3FF] outline-none transition-all duration-300 text-lg"
                        />
                      </div>
                      <p className="text-sm text-[#B5B5B5] mt-2">Enter your estimated total budget in USD for the entire trip</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#111111] mb-4">
                        <Heart className="w-4 h-4 inline mr-2" />
                        Travel Interests (select all that apply)
                      </label>
                      <div className="grid md:grid-cols-4 gap-3">
                        {interestOptions.map((option) => (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => toggleInterest(option.id)}
                            className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                              formData.interests.includes(option.id)
                                ? "border-[#2BB3FF] bg-[#EAF6FC] shadow-md"
                                : "border-gray-200 hover:border-[#2BB3FF]/50"
                            }`}
                          >
                            <div className="text-2xl mb-1">{option.icon}</div>
                            <div className="text-sm font-semibold text-[#111111]">{option.label}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-[#111111] mb-8">Review Your Trip</h2>

                  <div className="space-y-4">
                    <div className="p-6 bg-[#F7F7F9] rounded-2xl">
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="w-5 h-5 text-[#2BB3FF]" />
                        <span className="font-semibold text-[#111111]">Destination</span>
                      </div>
                      <div className="text-lg text-[#7A7A7A] ml-8">{formData.destination || "Not set"}</div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-6 bg-[#F7F7F9] rounded-2xl">
                        <div className="flex items-center gap-3 mb-2">
                          <Calendar className="w-5 h-5 text-[#2BB3FF]" />
                          <span className="font-semibold text-[#111111]">Duration</span>
                        </div>
                        <div className="text-lg text-[#7A7A7A] ml-8">{formData.duration ? `${formData.duration} days` : "Not set"}</div>
                      </div>

                      <div className="p-6 bg-[#F7F7F9] rounded-2xl">
                        <div className="flex items-center gap-3 mb-2">
                          <Users className="w-5 h-5 text-[#2BB3FF]" />
                          <span className="font-semibold text-[#111111]">Travelers</span>
                        </div>
                        <div className="text-lg text-[#7A7A7A] ml-8">{formData.travelers}</div>
                      </div>
                    </div>

                    <div className="p-6 bg-[#F7F7F9] rounded-2xl">
                      <div className="flex items-center gap-3 mb-2">
                        <DollarSign className="w-5 h-5 text-[#2BB3FF]" />
                        <span className="font-semibold text-[#111111]">Budget</span>
                      </div>
                      <div className="text-lg text-[#7A7A7A] ml-8">{formData.budget ? `$${Number(formData.budget).toLocaleString()}` : "Not set"}</div>
                    </div>

                    <div className="p-6 bg-[#F7F7F9] rounded-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <Heart className="w-5 h-5 text-[#2BB3FF]" />
                        <span className="font-semibold text-[#111111]">Interests</span>
                      </div>
                      <div className="flex flex-wrap gap-2 ml-8">
                        {formData.interests.length === 0 ? (
                          <span className="text-[#B5B5B5]">None selected</span>
                        ) : formData.interests.map((id) => {
                          const interest = interestOptions.find((opt) => opt.id === id);
                          return (
                            <span
                              key={id}
                              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#2BB3FF] border border-[#2BB3FF]"
                            >
                              {interest?.label}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="flex items-center justify-between mt-10">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-8 py-4 bg-gray-100 text-[#111111] rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
                  >
                    Back
                  </button>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="ml-auto px-8 py-4 bg-gradient-to-r from-[#2BB3FF] to-[#8ED8FF] text-white rounded-full font-semibold shadow-lg shadow-[#2BB3FF]/30 hover:shadow-xl hover:shadow-[#2BB3FF]/40 transition-all duration-300 hover:scale-105"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2BB3FF] to-[#8ED8FF] text-white rounded-full font-semibold shadow-lg shadow-[#2BB3FF]/30 hover:shadow-xl hover:shadow-[#2BB3FF]/40 transition-all duration-300 hover:scale-105"
                  >
                    <Sparkles className="w-5 h-5" />
                    <span>Build My Itinerary</span>
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
