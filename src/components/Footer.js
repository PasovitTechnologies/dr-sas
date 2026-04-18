"use client";

import Link from "next/link";
import { Heart, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Обо мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Блог", href: "#blog" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "Контакты", href: "#contacts" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12  pb-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Top */}
        <div className="grid md:grid-cols-2 gap-12 pb-14 border-b border-white/10">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary transition-all duration-300">
                <Image
                  src="/doctor/profile.jpg"
                  alt="Doctor"
                  width={60}
                  height={60}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-4xl font-semibold">Доктор САС</h3>
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

            <div className="grid grid-cols-2 gap-4">
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
          {/* <div>
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
          </div> */}
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
