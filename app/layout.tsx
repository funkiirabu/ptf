// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from '../lib/providers';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: "ptf",
  description: "ptf sumfing sumfing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          <Header />
          <main>{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}