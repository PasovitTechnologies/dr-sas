"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-medical.jpg')",
        }}
      />

      {/* Teal Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0E6C71]/95 via-[#0E6C71]/80 to-transparent" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 pt-24  w-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-white"
        >
          {/* Top heading */}
          <p className="text-base md:text-xl text-teal-100 mb-4 leading-tight font-medium">
            Профессиональная помощь в травматологии и ортопедии
          </p>

          {/* Doctor name */}
          <h1 className="text-4xl md:text-5xl  xl:text-6xl font-semibold leading-tight mb-4">
            Санкаранараянан Арумугам Сараванан
            <span className="block text-2xl md:text-3xl font-normal mt-2 text-teal-100">
              (Доктор САС)
            </span>
          </h1>

          {/* Qualifications */}
          <div className=" text-teal-100 text-lg mb-8">
            <p>Кандидат медицинских наук, врач высшей категории</p>
            <p>Врач травматолог-ортопед, онко-ортопед</p>
            <p>Заведующий отделением травматологии и ортопедии в НДЦ</p>
            <p>Ведущий научный сотрудник ЕАФО</p>
            <p>Организатор здравоохранения</p>
          </div>

          {/* CTA */}
          <button className="flex items-center gap-2 bg-white text-teal-900 px-7 py-3 rounded-xl font-medium hover:bg-gray-100 transition cursor-pointer">
            <Calendar size={18} />
            Записаться на прием
          </button>
        </motion.div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20 md:h-32"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,120 480,120 720,90 C960,60 1200,20 1440,40 L1440,160 L0,160 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
