import localFont, { Titillium_Web } from "next/font/google";
import "./globals.css";
import {SideNav,Nav} from './nav';

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
        <div className="bg-white w-screen h-screen">
        <Nav />
        <div className="flex w-full h-full fixed">
          <SideNav />
          {children}
        </div>
      </div>
      </body>
    </html>
  );
}
