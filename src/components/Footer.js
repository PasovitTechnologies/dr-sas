"use client";

import Link from "next/link";
import { Heart, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Обо мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Консультации", href: "#" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "Контакты", href: "#contacts" },
];

export default function Footer() {
  return (
    <footer id="contacts" className="bg-[#064d53] text-white pt-12  pb-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Top */}
        <div className="grid md:grid-cols-3 gap-12 pb-14 border-b border-white/10">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-teal-700 flex items-center justify-center text-2xl font-semibold">
                C
              </div>
              <div>
                <h3 className="text-4xl font-semibold">Д-р. Сас</h3>
              </div>
            </div>

            <p className="text-white/70 leading-relaxed max-w-md">
              Врач травматолог-ортопед, онколог. Кандидат медицинских наук, врач
              высшей категории.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-2xl font-semibold mb-6">Навигация</h4>

            <div className="space-y-4">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-white/70 hover:text-white transition"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-2xl font-semibold mb-6">Контакты</h4>

            <div className="space-y-4 text-white/70">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+7 (XXX) XXX-XX-XX</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>dr.sas@clinic.ru</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1" />
                <span>г. Москва, ул. Медицинская, д. 1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-white/60">
          <p>© 2026 Д-р. Сас. Все права защищены.</p>

          <p className="flex items-center gap-2">
            Сделано с <Heart size={16} className="text-red-400 fill-red-400" />{" "}
            для здоровья пациентов
          </p>
        </div>
      </div>
    </footer>
  );
}
