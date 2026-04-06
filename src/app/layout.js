import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Dr. SAS",
  description: "Доктор САС — травматолог-ортопед",

  icons: {
    icon: "/SANKARANARAYANAN ARUMUGAM Saravanan.jpg",
  },

  openGraph: {
    title: "Dr. SAS",
    description: "Доктор САС — травматолог-ортопед",
    images: ["/SANKARANARAYANAN ARUMUGAM Saravanan.jpg"], // optional but good if you have it
  },
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
