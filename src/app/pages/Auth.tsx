import { motion } from "motion/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Mail, Lock, User, Plane, Eye, EyeOff, Chrome, Globe, MapPin, Star } from "lucide-react";

export default function Auth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
    >
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2140] to-[#0a2a55]" />

      {/* 3D Passport background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/auth_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
          mixBlendMode: "luminosity",
        }}
      />

      {/* Fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/60 to-[#0a1628]/30" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-16 left-10 w-28 h-28 bg-[#2BB3FF]/15 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
      />
      <motion.div
        className="absolute bottom-16 right-10 w-40 h-40 bg-[#8ED8FF]/10 rounded-full blur-3xl"
        animate={{ y: [0, -15, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
      />

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block"
        >
          <Link to="/" className="flex items-center gap-3 mb-10 group">
            <div className="w-14 h-14 bg-gradient-to-br from-[#2BB3FF] to-[#8ED8FF] rounded-2xl flex items-center justify-center shadow-xl shadow-[#2BB3FF]/30 group-hover:scale-110 transition-transform duration-300">
              <Plane className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-white">Roamy</span>
          </Link>

          <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight">
            Start Your{" "}
            <span style={{ fontFamily: "Caveat, cursive", fontWeight: 800 }} className="text-[#8ED8FF]">
              Next Adventure
            </span>{" "}
            Today
          </h1>

          <p className="text-lg text-white/65 mb-10 leading-relaxed">
            Join thousands of real travelers planning smarter trips — personalized itineraries,
            interactive maps, and seamless trip management, all in one place.
          </p>

          <div className="space-y-5">
            {[
              { icon: Star, title: "Personalized Planning", desc: "Get itineraries built around your style and budget" },
              { icon: MapPin, title: "Interactive Maps", desc: "View your full trip visually with pins and routes" },
              { icon: Globe, title: "180+ Countries", desc: "Explore destinations and community trip reports" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#8ED8FF]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="text-sm text-white/60">{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right panel — auth form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-[32px] shadow-2xl p-10 border border-white/80">
            <div className="mb-8">
              <div className="flex gap-2 p-2 bg-[#F7F7F9] rounded-2xl mb-8">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isLogin
                      ? "bg-white text-[#2BB3FF] shadow-md"
                      : "text-[#7A7A7A] hover:text-[#111111]"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    !isLogin
                      ? "bg-white text-[#2BB3FF] shadow-md"
                      : "text-[#7A7A7A] hover:text-[#111111]"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <h2 className="text-3xl font-bold text-[#111111] mb-2">
                {isLogin ? "Welcome Back!" : "Create Account"}
              </h2>
              <p className="text-[#7A7A7A]">
                {isLogin
                  ? "Sign in to continue planning your adventures"
                  : "Join Roamy and start exploring the world"}
              </p>
            </div>

            {/* Google only — Instagram removed */}
            <div className="mb-6">
              <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl font-semibold text-[#111111] hover:border-[#2BB3FF] hover:bg-[#EAF6FC]/50 transition-all duration-300">
                <Chrome className="w-5 h-5" />
                <span>Continue with Google</span>
              </button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-[#B5B5B5]">Or continue with email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-semibold text-[#111111] mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B5B5B5]" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full pl-14 pr-6 py-4 bg-[#F7F7F9] rounded-2xl border-2 border-transparent focus:border-[#2BB3FF] focus:bg-white outline-none transition-all duration-300"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B5B5B5]" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full pl-14 pr-6 py-4 bg-[#F7F7F9] rounded-2xl border-2 border-transparent focus:border-[#2BB3FF] focus:bg-white outline-none transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B5B5B5]" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Enter your password"
                    className="w-full pl-14 pr-14 py-4 bg-[#F7F7F9] rounded-2xl border-2 border-transparent focus:border-[#2BB3FF] focus:bg-white outline-none transition-all duration-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-[#B5B5B5] hover:text-[#2BB3FF] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-[#2BB3FF] focus:ring-[#2BB3FF]"
                    />
                    <span className="text-[#7A7A7A]">Remember me</span>
                  </label>
                  <a href="#" className="text-[#2BB3FF] font-semibold hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#2BB3FF] to-[#8ED8FF] text-white rounded-2xl font-bold shadow-xl shadow-[#2BB3FF]/30 hover:shadow-2xl hover:shadow-[#2BB3FF]/40 transition-all duration-300 hover:scale-[1.02]"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>

            {!isLogin && (
              <p className="mt-6 text-sm text-center text-[#7A7A7A]">
                By signing up, you agree to our{" "}
                <a href="#" className="text-[#2BB3FF] font-semibold hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#2BB3FF] font-semibold hover:underline">
                  Privacy Policy
                </a>
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
