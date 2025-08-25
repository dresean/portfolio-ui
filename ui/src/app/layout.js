import { Geist, Geist_Mono, Vibes, Fleur_De_Leah, Major_Mono_Display, Dorsa, Miniver, Anton_SC } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vibes = Vibes({
 subsets: ['latin'],
  weight: ['400'],
  variable: "--font-vibes",
})

const fleurDeLeah = Fleur_De_Leah({
 subsets: ['latin'],
  weight: ['400'],
  variable: "--font-fleur-de-leah",
})

const majorMonoDisplay = Major_Mono_Display({
 subsets: ['latin'],
  weight: ['400'],
  variable: "--font-major-mono-display",
})

const dorsa = Dorsa({
 subsets: ['latin'],
  weight: ['400'],
  variable: "--font-dorsa",
})

const miniver = Miniver({
 subsets: ['latin'],
  weight: ['400'],
  variable: "--font-miniver",
})

const antonSC = Anton_SC({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--font-anton-sc",
})

export const metadata = {
  title: "Dre'Sean",
  description: "Created with love with React.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${miniver.variable} font-sans`}
        // todo remove && add default font! oh the choices!
      >
        {children}
      </body>
    </html>
  );
}
