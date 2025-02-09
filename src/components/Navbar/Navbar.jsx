import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: "Events", path: "/events" },
    { name: "Timeline", path: "/timeline" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Teams", path: "/teams" },
  ];

  return (
    <nav className={`w-full p-4 fixed top-0 z-20 transition-all duration-300
      ${scrolled ? "bg-black/50 backdrop-blur-md shadow-lg" : "bg-transparent"}
    `}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center gap-6">
          <Link
            to="/"
            className="text-2xl font-bold"
          >
            AROHANA
          </Link>
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`opacity-50 hover:opacity-100 ${
                  location.pathname === link.path ? "opacity-100 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            to="/login_signup"
            className="bg-blue-500 px-8 py-1 rounded-full font-semibold hover:bg-white hover:text-blue-500 transition-all duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar