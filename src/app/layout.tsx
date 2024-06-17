"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/avenir.scss";
import "@/css/avenirNext.scss";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { Work_Sans } from '@next/font/google'

const work = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en" className={work.className}>
      <body suppressHydrationWarning={true} className={work.className}>
        {loading ? <Loader /> : children}
      </body>
    </html>
  );
}
