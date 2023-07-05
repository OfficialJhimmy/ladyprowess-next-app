import "./globals.css";
import Footer from "./components/Footer/Footer";
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../public/Proxima Nova Font.otf" });

export const metadata = {
  title: "Lady Prowess - Creative, Communicative, Collaborative",
  description: "We are a content writing brand that provides high quality written materials for businesses and individuals.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className={myFont.className}>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
