import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "../components/Nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "countries api app",
  description: "where in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='bg-white text-black dark:bg-blue-dark dark:text-white '>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
