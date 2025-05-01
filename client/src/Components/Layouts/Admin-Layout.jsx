
import React, { useState } from 'react';
import { Navigate, NavLink, Outlet } from 'react-router-dom';
import { Contact, User, Settings, Home, Menu, X } from 'lucide-react';
import { useAuth } from '../../store/auth';

const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#121212] text-white text-2xl">
        Loading...
      </div>
    );
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <header className="bg-[#1a1a1a] shadow-md py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-purple-500 text-xl sm:text-2xl font-bold">Admin Dashboard</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 text-white text-base sm:text-lg">
              <li>
                <NavLink
                  to="/admin/users"
                  className="flex items-center gap-2 hover:text-purple-400 transition"
                >
                  <User className="w-5 h-5" />
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/contacts"
                  className="flex items-center gap-2 hover:text-purple-400 transition"
                >
                  <Contact className="w-5 h-5" />
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className="flex items-center gap-2 hover:text-purple-400 transition"
                >
                  <Settings className="w-5 h-5" />
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="flex items-center gap-2 hover:text-purple-400 transition"
                >
                  <Home className="w-5 h-5" />
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden px-6 pt-4 pb-2 bg-[#1a1a1a]">
            <ul className="flex flex-col gap-4 text-white text-base">
              <li>
                <NavLink
                  to="/admin/users"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-purple-400"
                >
                  <User className="w-5 h-5" />
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/contacts"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-purple-400"
                >
                  <Contact className="w-5 h-5" />
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-purple-400"
                >
                  <Settings className="w-5 h-5" />
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-purple-400"
                >
                  <Home className="w-5 h-5" />
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main className="bg-[#121212] min-h-screen px-4 sm:px-6 py-8">
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;


