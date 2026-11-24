import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site, siteUrl } from "../content/site";
import "./globals.css";

const description = "Download PickleD³ on the App Store for pickleball drills and structured practice sessions. Join our community for product updates.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  alternates: { canonical: "/" },
  title: "PickleD³ | Personalized pickleball training",
  description,
  openGraph: { url: "/", title: `${site.hero.heading} ${site.hero.emphasis} | ${site.name}`, description,
    type: "website", images: [{ url: "/social-card.jpg", width: 1200, height: 630, alt: "PickleD³ pickleball training preview" }] },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
