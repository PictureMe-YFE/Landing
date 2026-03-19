"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import config from "@/config";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PlausibleProvider from "next-plausible";

const ClientLayout = ({ children }) => {
  useEffect(() => {
    const tg = window?.Telegram?.WebApp;
    if (!tg) return;

    tg.ready();
    tg.expand();

    console.log("Telegram user:", tg.initDataUnsafe?.user);
  }, []);

  return (
    <>
      <PlausibleProvider domain="tunisian-pass.tn">
        <SessionProvider>
          <NextTopLoader showSpinner={false} />
          {children}
          <SpeedInsights />

          <Toaster
            toastOptions={{
              duration: 3000,
            }}
          />

          <Tooltip
            id="tooltip"
            className="z-[60] !opacity-100 max-w-sm shadow-lg"
          />
        </SessionProvider>
      </PlausibleProvider>
    </>
  );
};

export default ClientLayout;
