import { Outlet, Link, useLocation } from "react-router";
import { Plane, Compass, Sparkles, Map, LayoutDashboard, LogIn } from "lucide-react";

export default function Layout() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: Plane },
    { path: "/explore", label: "Explore", icon: Compass },
    { path: "/ai-planner", label: "AI Planner", icon: Sparkles },
    { path: "/itinerary", label: "Itinerary", icon: Map },
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F9]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#2BB3FF] to-[#8ED8FF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#2BB3FF]/20 group-hover:shadow-xl group-hover:shadow-[#2BB3FF]/30 transition-all duration-300">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[#111111]">Roamy</span>
          </Link>

          <div className="hidden md:flex items-center gap-2 bg-[#F7F7F9] rounded-full px-2 py-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                    active
                      ? "bg-white text-[#2BB3FF] shadow-lg shadow-black/5"
                      : "text-[#7A7A7A] hover:text-[#111111] hover:bg-white/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{link.label}</span>
                </Link>
              );
            })}
          </div>

          <Link
            to="/auth"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2BB3FF] to-[#8ED8FF] text-white rounded-full font-semibold shadow-lg shadow-[#2BB3FF]/30 hover:shadow-xl hover:shadow-[#2BB3FF]/40 transition-all duration-300 hover:scale-105"
          >
            <LogIn className="w-4 h-4" />
            <span>Sign In</span>
          </Link>
        </div>
      </nav>

      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
}
