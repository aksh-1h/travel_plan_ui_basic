import { motion } from "motion/react";
import { useState } from "react";
import { Search, MapPin, Star, Heart, TrendingUp, Globe, Mountain, Waves, Building2 } from "lucide-react";

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [likedIds, setLikedIds] = useState<number[]>([]);

  const categories = [
    { id: "all", label: "All Destinations", icon: Globe },
    { id: "beach", label: "Beach", icon: Waves },
    { id: "mountain", label: "Mountain", icon: Mountain },
    { id: "city", label: "City", icon: Building2 },
    { id: "trending", label: "Trending", icon: TrendingUp },
  ];

  const destinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      category: "beach",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
      rating: 4.9,
      reviews: 2847,
      price: "$$$",
      tags: ["Beaches", "Culture", "Adventure"],
      trending: true,
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      category: "city",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
      rating: 4.8,
      reviews: 3421,
      price: "$$$$",
      tags: ["Culture", "Food", "Technology"],
      trending: true,
    },
    {
      id: 3,
      name: "Swiss Alps",
      category: "mountain",
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
      rating: 4.9,
      reviews: 1923,
      price: "$$$$",
      tags: ["Nature", "Skiing", "Hiking"],
      trending: false,
    },
    {
      id: 4,
      name: "Santorini, Greece",
      category: "beach",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800",
      rating: 4.7,
      reviews: 2156,
      price: "$$$",
      tags: ["Romantic", "Beaches", "Sunsets"],
      trending: true,
    },
    {
      id: 5,
      name: "New York City",
      category: "city",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
      rating: 4.6,
      reviews: 4521,
      price: "$$$$",
      tags: ["Culture", "Shopping", "Food"],
      trending: false,
    },
    {
      id: 6,
      name: "Maldives",
      category: "beach",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
      rating: 5.0,
      reviews: 1834,
      price: "$$$$$",
      tags: ["Luxury", "Beaches", "Diving"],
      trending: true,
    },
    {
      id: 7,
      name: "Patagonia, Chile",
      category: "mountain",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800",
      rating: 4.9,
      reviews: 1247,
      price: "$$$",
      tags: ["Adventure", "Hiking", "Nature"],
      trending: false,
    },
    {
      id: 8,
      name: "Paris, France",
      category: "city",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
      rating: 4.7,
      reviews: 5234,
      price: "$$$$",
      tags: ["Culture", "Romance", "Food"],
      trending: true,
    },
  ];

  const filteredDestinations = destinations.filter((dest) => {
    const matchesCategory = selectedCategory === "all" || dest.category === selectedCategory || (selectedCategory === "trending" && dest.trending);
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleLike = (id: number) => {
    setLikedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen pb-20" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
      {/* Hero header with 3D globe background */}
      <section className="relative px-6 py-20 overflow-hidden">
        {/* Dark gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f3c] via-[#0a2a55] to-[#102060]" />

        {/* 3D Globe image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/explore_bg.png')",
            backgroundSize: "contain",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            opacity: 0.3,
          }}
        />

        {/* Fade overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f3c]/95 via-[#0d1f3c]/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F7F7F9] to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#8ED8FF] font-semibold text-sm uppercase tracking-widest mb-4">Destinations</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
              Explore{" "}
              <span style={{ fontFamily: "Caveat, cursive", fontWeight: 800 }} className="text-[#8ED8FF]">
                Amazing
              </span>{" "}
              Destinations
            </h1>
            <p className="text-lg text-white/65 mb-10 max-w-xl">
              Handpicked destinations from every corner of the globe — beaches, mountains, cities, and beyond.
            </p>

            <div className="relative max-w-2xl">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B5B5B5]" />
              <input
                type="text"
                placeholder="Search destinations, activities, or vibes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 bg-white rounded-full shadow-xl border-2 border-transparent focus:border-[#2BB3FF] outline-none transition-all duration-300 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="px-6 py-12 bg-[#F7F7F9]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 font-semibold ${
                    isActive
                      ? "bg-gradient-to-r from-[#2BB3FF] to-[#8ED8FF] text-white shadow-lg shadow-[#2BB3FF]/30"
                      : "bg-white text-[#7A7A7A] hover:bg-gray-50 shadow-md"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative overflow-hidden rounded-[28px] mb-4 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <button
                    onClick={() => toggleLike(destination.id)}
                    className={`absolute top-4 right-4 w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${likedIds.includes(destination.id) ? 'bg-[#FF4F6D]' : 'bg-white/90 hover:bg-white'}`}
                  >
                    <Heart className={`w-5 h-5 ${likedIds.includes(destination.id) ? 'text-white fill-current' : 'text-[#FF4F6D]'}`} />
                  </button>

                  {destination.trending && (
                    <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-[#FF4F6D] to-[#FF8A9B] rounded-full text-white text-sm font-semibold shadow-lg flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>Trending</span>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/85 to-transparent text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4" />
                      <h3 className="font-bold text-lg">{destination.name}</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{destination.rating}</span>
                        <span className="text-sm opacity-75">({destination.reviews})</span>
                      </div>
                      <span className="font-semibold">{destination.price}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {destination.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#EAF6FC] text-[#2BB3FF] rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-[#EAF6FC] rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-[#2BB3FF]" />
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-2">No destinations found</h3>
              <p className="text-[#7A7A7A]">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
