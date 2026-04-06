"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  User,
  Bone,
  Activity,
  Smile,
  HeartPulse,
  Accessibility,
  Calendar,
  Badge,
  Users,
  Heart,
} from "lucide-react";

const stats = [
  { id: 1, value: 25, suffix: "+", label: "лет опыта", icon: Calendar },
  { id: 2, value: 26, suffix: "", label: "сертификатов", icon: Badge },
  { id: 3, value: 5000, suffix: "+", label: "пациентов", icon: Users },
  {
    id: 4,
    value: 98,
    suffix: "%",
    label: "довольных",
    icon: Heart,
  },
];

function CountUp({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1500;
    const step = value / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsOverlap() {
  return (
    <section className="relative py-20 md:pb-42 lg:pb-33 bg-white overflow-hidden">
      <div className=" mx-auto  relative">
        {/* LEFT IMAGE */}
        <div className="w-full md:w-[45%]">
          <img
            src="/stats-image.jpeg"
            alt="Orthopedic"
            className="w-full h-60 md:h-96 lg:h-112 object-cover "
          />
        </div>

        {/* OVERLAY PANEL */}
        <div
          className="
          relative md:absolute 
          md:top-16 
          md:right-0 
          md:w-[65%] 
          bg-secondary 
          text-white 
          p-6 md:p-12 
          mt-6 md:mt-0
          
          shadow-xl
        "
        >
          <div className="max-w-2xl ">
            {/* Heading */}

            <h2 className="text-3xl md:text-4xl font-semibold mb-2 leading-snug">
              Опыт и достижения
            </h2>

            <p className="uppercase tracking-widest text-xs opacity-80 mb-8">
              Цифры, которые говорят о нашей работе
            </p>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2  ">
              {stats.map((stat, i) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={i}
                    className={`py-4  md:p-4 lg:p-6 flex justify-start gap-4   ${stat.id === 1 || stat.id === 2 ? "md:border-b" : ""} ${stat.id === 1 || stat.id === 3 ? "md:border-r" : ""}  border-white/30 `}
                  >
                    <Icon className="shrink-0  " size={40} />

                    <div className="">
                      <p className="text-4xl font-semibold">
                        <CountUp value={stat.value} />
                        {stat.suffix}
                      </p>

                      <p className="opacity-80 text-lg ">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
