import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Dr. SAS",
  description: "Доктор САС — травматолог-ортопед",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Dr. SAS",
    description: "Доктор САС — травматолог-ортопед",
    images: ["/doctor/profile.jpg"], 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
