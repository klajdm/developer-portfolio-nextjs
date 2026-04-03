import "@/styles/globals.css";
import "@/styles/hero.css";
import "@/styles/custom.css";
import Layout from "@/components/Layout/Layout";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NextThemesProvider enableSystem={true} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
