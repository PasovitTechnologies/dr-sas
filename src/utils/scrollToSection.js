export const scrollToSection = (id, offset = 80) => {
  if (typeof window === "undefined") return;

  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};
