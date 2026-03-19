import Script from "next/script";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";

import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={config.colors.theme} className="font-bricolage">
      <body>
        <Script
          src="https://telegram.org/js/telegram-web-app.js?61"
          strategy="beforeInteractive"
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
