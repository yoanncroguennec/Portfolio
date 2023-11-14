import "@/styles/Index.modules.scss";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
// ANIMATIONS
import { AnimationIntro } from "../components/animations";
import Providers from "../utils/providers/providers";
import MainLayout from "@/components/layouts/MainLayout";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [openModal, setOpenModal] = useState(false);
  const delay = 5;

  useEffect(() => {
    let timer1 = setTimeout(() => setOpenModal(true), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <Providers>
      {!openModal ? (
        <AnimationIntro />
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </Providers>
  );
}
