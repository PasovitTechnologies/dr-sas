"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "Палатный врач Сараванан Арумугам очень замечательный, спокойный! Все доступно объяснит и поможет во всем в чем он может!!! Огромное Вам спасибо!",
    name: "Марина Афонина",
    role: "Пациент",
  },
  {
    text: "Огромное спасибо врачу Отделения ОТО Сараванану Арумугаму. Он просто умничка, доктор от бога!",
    name: "Благодарный пациент",
    role: "Пациент",
  },
  {
    text: "Дорогой и любимый доктор Сараванан, огромное спасибо за Ваш нелёгкий и такой нужный и важный труд! Советую всем не бояться, а обращаться с заболеваниями костной системы к доктору Сараванану, он врач от бога. Мне сделал он эндопротезирование тазобедренного сустава, чувствую себя отлично.",
    name: "Ольга Дегтярева",
    role: "Пациент",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#f7fbfb] py-12">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full ">
            Отзывы
          </span>

          <h2 className="text-4xl font-semibold text-teal-900 mt-4">
            Что говорят пациенты
          </h2>

          {/* <p className="text-gray-500 mt-2">
            Мнения пациентов о качестве лечения и обслуживания
          </p> */}
        </div>

        {/* Slider */}
        <div className="relative ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            pagination={{
              clickable: true,
              el: ".testimonial-pagination",
            }}
            autoplay={{
              delay: 5000,
            }}
            loop
          >
            {testimonials.map((item, index) => (
              <SwiperSlide className="p-4" key={index}>
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-4 sm:p-6 md:p-10 min-h-116 md:min-h-84">
                  <Quote className="text-teal-200 mb-2" size={34} />

                  {/* Stars */}
                  <div className="flex text-teal-600 mb-2">{"★★★★★"}</div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    "{item.text}"
                  </p>

                  <div>
                    <p className="font-semibold text-teal-900">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows */}
          <button className="testimonial-prev absolute -left-4 top-1/2 -translate-y-1/2 z-10 text-teal-700 cursor-pointer">
            <ChevronLeft size={24} />
          </button>

          <button className="testimonial-next absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-teal-700 cursor-pointer">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination */}
        <div className="testimonial-pagination flex gap-2 justify-center mt-2" />

        {/* CTA */}
        <div className="text-center mt-6">
          <button className="bg-teal-700 text-white px-8 py-3 rounded-xl hover:bg-teal-800 transition">
            Написать отзыв
          </button>
        </div>
      </div>
    </section>
  );
}
