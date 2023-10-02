import type { AppProps } from "next/app";
import {
  Mumbai,
  CoreBlockchain,
  Ethereum,
  Polygon,
} from "@thirdweb-dev/chains";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import Header from "../components/header";

import { createTheme, NextUIProvider, Container } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import NextNProgress from "nextjs-progressbar";
import { Analytics } from "@vercel/analytics/react";
import { SSRProvider } from "react-aria";
import Skeleton from "../components/Skeleton/Skeleton";
import Footer from "../components/footer";
import { startTransition } from "react";
import { useState, Suspense, lazy } from "react";
import { Loading } from "@web3uikit/core";
import { SessionProvider } from "next-auth/react";

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
    }, // optional
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
	
      <ThirdwebProvider
        activeChain={CoreBlockchain}
        authConfig={{
          domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
          authUrl: "/api/auth",
        }}
      >
        <NextThemesProvider
          defaultTheme="dark"
          attribute="class"
          value={{
            dark: darkTheme.className,
          }}
        >
          <NextUIProvider>
            <div
              style={{
                backgroundImage: `url("https://bafybeigywo2u5r4dhs6uugrtrpveetyomyrkvnxlovqs665dbanwzthrpa.ipfs.nftstorage.link/ipfs/bafybeigywo2u5r4dhs6uugrtrpveetyomyrkvnxlovqs665dbanwzthrpa/411997-fractal-fractal-flame-mathematics-energy-field-space.jpg")`,
                backgroundSize: "cover",
                backgroundRepeat: "repeat",
                width: "100%",
              }}
            >
              <NextNProgress
                color="var(--color-tertiary)"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
              />
              <Suspense fallback={<Loading />}>
                <Header />
                <Component {...pageProps} />
              </Suspense>

              <Footer />
              <Analytics />
            </div>
          </NextUIProvider>
        </NextThemesProvider>
      </ThirdwebProvider>

    </SSRProvider>
  );
}
