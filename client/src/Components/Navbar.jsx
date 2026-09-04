


import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import {
  Home,
  Info,
  Settings,
  Phone,
  LogIn,
  LogOut,
  UserPlus,
  FileCode,
  Menu,
  X
} from "lucide-react";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()

  const linkClasses = "flex items-center gap-1 hover:underline hover:text-purple-700";

  return (
    <header className="shadow-md">
      <div       className="main flex items-center justify-between max-w-[140rem] mx-auto px-[4.2rem] py-[2.4rem]">
        {/* Logo */}
        <div className="logo flex items-center gap-2 text-2xl font-black text-purple-700 ">
          <FileCode      onClick={()=>navigate("/")} size={22} strokeWidth={2.2} className="text-purple-800" />
          EduForge
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-purple-700">
          <NavLink className={linkClasses} to="/">
            <Home size={18} /> Home
          </NavLink>
          <NavLink className={linkClasses} to="/about">
            <Info size={18} /> About
          </NavLink>
          <NavLink className={linkClasses} to="/service">
            <Settings size={18} /> Services
          </NavLink>
          <NavLink className={linkClasses} to="/contact">
            <Phone size={18} /> Contact
          </NavLink>
          {isLoggedIn ? (
            <NavLink className={linkClasses} to="/logout">
              <LogOut size={18} /> Logout
            </NavLink>
          ) : (
            <>
              <NavLink className={linkClasses} to="/login">
                <LogIn size={18} /> Login
              </NavLink>
              <NavLink className={linkClasses} to="/register">
                <UserPlus size={18} /> Signup
              </NavLink>
            </>
          )}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-purple-700 focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden px-6 py-4 bg-[#121212] text-white">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li>
              <NavLink
                onClick={() => setMenuOpen(false)}
                className={linkClasses}
                to="/"
              >
                <Home size={18} /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setMenuOpen(false)}
                className={linkClasses}
                to="/about"
              >
                <Info size={18} /> About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setMenuOpen(false)}
                className={linkClasses}
                to="/service"
              >
                <Settings size={18} /> Services
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setMenuOpen(false)}
                className={linkClasses}
                to="/contact"
              >
                <Phone size={18} /> Contact
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink
                  onClick={() => setMenuOpen(false)}
                  className={linkClasses}
                  to="/logout"
                >
                  <LogOut size={18} /> Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    onClick={() => setMenuOpen(false)}
                    className={linkClasses}
                    to="/login"
                  >
                    <LogIn size={18} /> Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setMenuOpen(false)}
                    className={linkClasses}
                    to="/register"
                  >
                    <UserPlus size={18} /> Signup
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
