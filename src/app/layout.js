import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Dr. Sas",
  description: "Доктор САС — травматолог-ортопед",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
