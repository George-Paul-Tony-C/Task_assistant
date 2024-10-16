import localFont, { Titillium_Web } from "next/font/google";
import "./globals.css";

const tittilium = Titillium_Web({
  variable: "--font-tittilium-web",
  subsets: ['latin'],
  weight: ["400","300","600","700","900"],
});


export const metadata = {
  title: "Task-Assistant",
  description: "A Task management app designed to improve productivity with automated Scheduling, Organization and Notes with support for optional AI assistance. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${tittilium.variable} font-titillium antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
