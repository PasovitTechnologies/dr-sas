"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Menu, X, MapPin, Instagram, Send } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Обо мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Консультации", href: "#" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "Контакты", href: "#contacts" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Top bar */}
        <div className="flex justify-between items-center text-sm text-gray-500 py-1.5">
          {/* Location */}
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Москва, Щелково</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-1 hover:text-teal-700 transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="#"
              className="flex items-center gap-1 hover:text-teal-700 transition"
            >
              <Send size={20} />
            </a>
          </div>
        </div>

        {/* Main navbar */}
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-teal-700 flex items-center justify-center text-white text-lg font-semibold">
              C
            </div>

            <div>
              <p className="text-lg font-semibold text-gray-800">Доктор САС</p>
              <p className="text-xs  text-gray-500 leading-tight">
                Врач травматолог-ортопед
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-teal-700 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <button className="flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-6 py-2.5 rounded-xl transition cursor-pointer">
              <Phone size={18} />
              Записаться
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-black"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t"
        >
          <div className="flex flex-col text-gray-700  gap-4 px-6 py-6">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}

            <button className="flex items-center justify-center gap-2 bg-teal-700 text-white py-3 rounded-xl cursor-pointer">
              <Phone size={18} />
              Записаться
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
