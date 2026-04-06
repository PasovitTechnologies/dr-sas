"use client";

import { Loader } from "lucide-react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function ReviewModal({ open, onClose, onSuccess, onError }) {
  const [form, setForm] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    email: "",
    phone: "",
    review: "",
  });
  const [rating, setRating] = useState(0);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.lastName.trim()) newErrors.lastName = "Введите фамилию";
    if (!form.firstName.trim()) newErrors.firstName = "Введите имя";
    if (!form.review.trim()) newErrors.review = "Введите отзыв";
    if (rating === 0) newErrors.rating = "Выберите рейтинг";

    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Неверный email";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);

      const res = await fetch("/api/send-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, rating }),
      });

      const data = await res.json();

      if (data.success) {
        onSuccess();

        onClose();
        setForm({
          lastName: "",
          firstName: "",
          middleName: "",
          email: "",
          phone: "",
          review: "",
        });
        setRating(0);
      } else {
        onError();
      }
    } catch {
      onError();
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="   w-full max-h-[80vh] max-w-2xl z-10 overflow-hidden">
        {/* Close */}
        <div className="relative bg-white  p-6 md:p-8 w-full max-h-[80vh] max-w-2xl overflow-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-black cursor-pointer"
          >
            ✕
          </button>

          <h3 className="text-xl font-semibold mb-6 text-teal-900">
            Оставить отзыв
          </h3>

          <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm mb-1 text-gray-700">
                Фамилия *
              </label>
              <input
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="w-full text-primary border border-primary p-2 "
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-700">Имя *</label>
              <input
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                className="w-full text-primary border border-primary p-2 "
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-700">
                Отчество
              </label>
              <input
                value={form.middleName}
                onChange={(e) =>
                  setForm({ ...form, middleName: e.target.value })
                }
                className="w-full text-primary border border-primary p-2 "
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-700">
                Электронная почта
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full text-primary border border-primary p-2 "
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm mb-1 text-gray-700">
                Телефон
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full text-primary border border-primary p-2 "
              />
            </div>

            {/* Rating */}
            <div className="md:col-span-2">
              <label className="block text-sm mb-2 text-gray-700">
                Рейтинг *
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    onClick={() => setRating(star)}
                    className={`cursor-pointer ${
                      star <= rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              {errors.rating && (
                <p className="text-red-500 text-xs mt-1">{errors.rating}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm mb-1 text-gray-700">
                Ваш отзыв *
              </label>
              <textarea
                value={form.review}
                onChange={(e) => setForm({ ...form, review: e.target.value })}
                rows={4}
                className="w-full text-primary border border-primary p-2 "
              />
              {errors.review && (
                <p className="text-red-500 text-xs mt-1">{errors.review}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-secondary hover:bg-primary text-white px-8 py-3 font-semibold transition-all duration-300 md:col-span-2 flex justify-center items-center cursor-pointer"
            >
              {loading ? <Loader className="animate-spin" /> : "Отправить"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
