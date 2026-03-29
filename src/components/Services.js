"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Bone,
  ShieldPlus,
  HeartPulse,
  ScanSearch,
  Hand,
  Footprints,
  Dna,
  HeartHandshake,
} from "lucide-react";

import { CalendarDays, Award, Users, Heart } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Диагностика и общехирургические манипуляции",
    desc: "Комплексная диагностика и современные методы лечения заболеваний опорно-двигательного аппарата.",
  },
  {
    icon: Bone,
    title: "Лечение артрозов",
    desc: "Консервативное и хирургическое лечение артрозов различной степени тяжести.",
  },
  {
    icon: ShieldPlus,
    title: "Эндопротезирование",
    desc: "Замена суставов современными эндопротезами для восстановления подвижности.",
  },
  {
    icon: HeartPulse,
    title: "Лечение травм",
    desc: "Современные методы лечения переломов, вывихов и спортивных травм.",
  },
  {
    icon: ScanSearch,
    title: "Артроскопия",
    desc: "Малоинвазивная диагностика и лечение патологий суставов.",
  },
  {
    icon: Hand,
    title: "Хирургия кисти",
    desc: "Лечение заболеваний и травм кисти с сохранением функции и подвижности.",
  },
  {
    icon: Footprints,
    title: "Хирургия стопыn",
    desc: "Исправление деформаций и восстановление функции стопы.",
  },
  {
    icon: Dna,
    title: "Костная онкология",
    desc: "Современные подходы к диагностике и лечению опухолей костной ткани.",
  },
  {
    icon: HeartHandshake,
    title: "Реабилитация",
    desc: "Программы восстановления после травм, операций и эндопротезирования.",
  },
];

const stats = [
  {
    value: "25+",
    label: "лет опыта",
    sub: "В области ортопедии и травматологии",
    icon: CalendarDays,
  },
  {
    value: "26",
    label: "сертификатов",
    sub: "Профессиональные квалификации",
    icon: Award,
  },
  {
    value: "5000+",
    label: "пациентов",
    sub: "Успешно прошли лечение",
    icon: Users,
  },
  {
    value: "98%",
    label: "довольных",
    sub: "Пациентов рекомендуют нас",
    icon: Heart,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full ">
            Услуги
          </span>

          <h2 className="text-4xl font-semibold text-teal-900 mt-4">
            Сфера деятельности{" "}
          </h2>
          {/* <p className="text-gray-500 max-w-2xl mx-auto">
            Полный спектр ортопедических и травматологических услуг для
            восстановления здоровья и свободы движения.
          </p> */}
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-6 hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-700 text-white flex items-center justify-center mb-4">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-medium text-teal-900 ">
                  {service.title}
                </h3>
                {/* 
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {service.desc}
                </p> */}
              </motion.div>
            );
          })}
        </div>

        {/* Stats Band */}
        <div className="mt-12 rounded-3xl bg-teal-700 p-8 md:p-10">
          {/* Heading */}
          <div className="text-center text-white mb-8">
            <h3 className="text-3xl font-semibold mb-2">Опыт и достижения</h3>
            <p className="text-sm text-white/70">
              Цифры, которые говорят о нашей работе
            </p>
          </div>

          {/* Cards */}
          <div className="grid  md:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="bg-white/10 rounded-2xl p-6 text-center text-white"
                >
                  <div className="w-10 h-10 mx-auto rounded-xl bg-white/15 flex items-center justify-center mb-4">
                    <Icon size={18} />
                  </div>

                  <p className="text-4xl font-semibold mb-1">{stat.value}</p>

                  <p className="text-sm font-medium">{stat.label}</p>

                  {/* <p className="text-xs text-white/70 mt-2 leading-relaxed">
                    {stat.sub}
                  </p> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
