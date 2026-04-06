"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function AboutModal({ type, close }) {
  if (!type) return null;

  const education = [
    "2001г. - Медицинский университет штата Тамил-Наду. Лечебное дело",
    "2005г. – Ординатура по специальности травматология и ортопедия. ГБУЗ МО МОНИКИ им. М.Ф. Владимирского. ",
    "2008г. – Кандидат медицинских наук по специальностям травматологии и ортопедии, и онкология. ГБУЗ МО МОНИКИ им. М.Ф. Владимирского.",
    "2015г. – Профессиональная переподготовка по специальности онкология. ГБУЗ МО МОНИКИ им. М.Ф. Владимирского. ",
    "2018г. – Подтвердил сертификат травматолога -ортопеда.",
    "2023г. - Повышение квалификации по специальности травматология и ортопедия. ГБУЗ МО МОНИКИ им. М.Ф. Владимирского",
    "2023г. – Подтвердил высшую квалификационную категорию по специальности травматология и ортопедия.",
    "2023г. – Прошел аккредитацию по специальности травматология и ортопедия",
    "2025г. - Повышение квалификации по специальности онкология. ",
  ];

  const experience = [
    {
      role: "Врач травматолог - ортопед",
      year: "2005 - 2019",
      place: "ГБУЗ МО МОНИКИ им. М.Ф. Владимирского",
    },
    {
      role: "Координатор научных и образовательных программ",
      year: "2010 - 2019",
      place:
        "Факультет усовершенствования врачей ГБУЗ МО МОНИКИ им. М.Ф. Владимирского",
    },
    {
      role: "Член комитета Молодых хирургов",
      year: "2011 - 2017",
      place:
        "Международное общество ортопедической хирургии и травматологии (SICOT), Брюссель, Бельгия",
    },
    {
      role: "Генеральный секретарь",
      year: "2011 - 2019",
      place: "Международный Образовательный центр SICOT (Москва)",
    },
    {
      role: "Член комитета по образованию - SICOT",
      year: "2011 - 2019",
      place:
        "Международное общество ортопедической хирургии и травматологии (SICOT), Брюссель, Бельгия",
    },
    {
      role: "Старший научный сотрудник",
      year: "2013 - 2019",
      place: "ГБУЗ МО МОНИКИ им. М.Ф. Владимирского",
    },
    {
      role: "Доцент кафедры травматологии и ортопедии",
      year: "2013 - 2019",
      place: "ГБУЗ МО МОНИКИ им. М.Ф. Владимирского",
    },
    {
      role: "Генеральный секретарь",
      year: "2015 - 2020",
      place: "Русское общество тазобедренного сустава",
    },
    {
      role: "Врач травматолог - ортопед",
      year: "2020 - 2022",
      place: "ГБУЗ МО Щелковская городская больница",
    },
    {
      role: "Заместитель руководителя ГБУЗ МО «ЩГБ» обособленное подразделение им. М.В. Гольца в г. Фрязино, врач травматолог-ортопед",
      year: "2023 - 09.2024",
      place: "ГБУЗ МО Щелковская городская больница",
    },
    {
      role: "Заведующий отделением травматологии и ортопедии ГБУЗ МО «ЩБ» обособленное подразделение им. М.В. Гольца в г. Фрязино, врач травматолог-ортопед",
      year: "09.2024 - 09.2025",
      place: "ГБУЗ МО «ЩБ» обособленное подразделение им. М.В. Гольца",
    },
    {
      role: "Ведущий научный сотрудник",
      year: "09.2025 по наст. время",
      place: "АНО «Евразийская Федерация Онкологии»  (ЕАФО)",
    },
    {
      role: "Заведующий отделением травматологии и ортопедии",
      year: "02.2026 по наст. время",
      place: "Национальный диагностический центр",
    },
  ];

  const data = type === "education" ? education : experience;
  const title = type === "education" ? "Образование" : "Опыт работы";

  return (
    <AnimatePresence>
      <motion.div
        onClick={close}
        className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="overflow-hidden max-w-4xl w-full rounded-2xl  max-h-[90vh]"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
        >
          <div className="bg-white max-w-4xl w-full rounded-2xl p-4 md:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={close}
              className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer"
            >
              <X />
            </button>

            <h3 className="text-2xl text-primary  font-semibold mb-6">
              {title}
            </h3>

            {type === "education" ? (
              <ul className="space-y-3 text-primary">
                {education.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
                  {/* Header */}
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="text-left px-4 py-3 text-sm font-medium">
                        Должность
                      </th>
                      <th className="text-left px-4 py-3 text-sm font-medium ">
                        Год
                      </th>
                      <th className="text-left px-4 py-3 text-sm font-medium">
                        Место
                      </th>
                    </tr>
                  </thead>

                  {/* Body */}
                  <tbody className="text-primary text-sm">
                    {experience.map((item, i) => (
                      <tr
                        key={i}
                        className="border-t hover:bg-gray-50 transition"
                      >
                        <td className="px-4 py-3 font-medium text-primary">
                          {item.role}
                        </td>
                        <td className="px-4 py-3 text-primary md:whitespace-nowrap">
                          {item.year}
                        </td>
                        <td className="px-4 py-3">{item.place}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
