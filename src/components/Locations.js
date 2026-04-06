"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";

const locations = [
  {
    city: "г. Москва",
    clinic: "Медиицнский центр «СОФОС»",
    address: "Аминьевское шоссе, д 6, этаж 4,5 \nБизнес-центр KVARTAL WEST",
    phones: ["+7 (495) 324-11-11"],
    map: "https://yandex.ru/map-widget/v1/?um=constructor%3A9f08441217932be054dd0ad3bb188f1956778ef4132ab9cb791b036a5eee7192&amp;source=constructor",
  },
  // {
  //   city: "г. Москва",
  //   clinic: "Открытая клиника",
  //   address: "ул. 1905 года, 7, стр. 1",
  //   phones: ["+7 (495) 255-37-37"],
  //   map: "https://yandex.ru/map-widget/v1/?um=constructor%3A9f08441217932be054dd0ad3bb188f1956778ef4132ab9cb791b036a5eee7192&amp;source=constructor",
  // },
  {
    city: "г. Щелково",
    clinic: "Национальный диагностический центр",
    address: "ул. Фабричная, д. 1 \nул. Комсомольская, д. 5Б",
    phones: [
      "+7 (499) 112-39-09",
      "+7 (496) 250-06-78",
      "+7 (495) 127-07-75",
      "+7 (926) 900-79-58 (WhatsApp)",
    ],
    map: "https://yandex.ru/map-widget/v1/?um=constructor%3A9f08441217932be054dd0ad3bb188f1956778ef4132ab9cb791b036a5eee7192&amp;source=constructor",
  },
];

export default function Locations() {
  return (
    <section id="contacts" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-primary">
            Где принимает доктор САС
          </h2>
        </div>

        {/* Clinics */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.clinic}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
            >
              {/* Info */}
              <div className="p-6 md:p-8 bg-white">
                <p className="text-sm text-primary font-medium mb-2">
                  {location.city}
                </p>

                <h3 className="text-2xl font-semibold text-primary/90 mb-4">
                  {location.clinic}
                </h3>

                <div className="flex gap-2 text-primary/80 mb-4 whitespace-pre-line">
                  <MapPin size={18} className="shrink-0 mt-1 text-primary" />
                  <p>{location.address}</p>
                </div>

                <div className="space-y-2">
                  {location.phones.map((phone) => (
                    <div
                      key={phone}
                      className="flex items-center gap-2 text-primary/80"
                    >
                      {phone.includes("WhatsApp") ? (
                        <MessageCircle size={16} className="text-secondary" />
                      ) : (
                        <Phone size={16} className="text-primary" />
                      )}
                      <span>{phone}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Map */}
        <iframe
          src="https://yandex.com/map-widget/v1/?um=constructor%3A4ab72941424d689fa479966cfcc6fc32c829ea7a0d8225e03a532daf5a9003ed&amp;source=constructor"
          width="100%"
          height="450"
          frameBorder="0"
        ></iframe>
      </div>
    </section>
  );
}
